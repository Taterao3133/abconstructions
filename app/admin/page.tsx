"use client";

import Image from "next/image";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { addDoc, collection, deleteDoc, doc, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut, type User } from "firebase/auth";
import { Edit3, ImagePlus, LogOut, Save, Trash2 } from "lucide-react";
import { uploadToCloudinary } from "@/lib/cloudinary";
import {
  defaultPageContent,
  defaultProjects,
  defaultSiteSettings,
  defaultSocialLinks,
  pageOptions,
  type PageContent,
  type PageKey,
  type Project,
  type SiteSettings,
  type SocialLinks
} from "@/lib/cms-content";
import { auth, db, isFirebaseConfigured } from "@/lib/firebase";
import { useCmsContent } from "@/lib/use-cms-content";

type ProjectForm = Omit<Project, "id"> & { id?: string };

const emptyProject: ProjectForm = {
  title: "",
  type: "",
  image: "/demo/project-villa.png"
};

export default function AdminPage() {
  const cms = useCmsContent();
  const [user, setUser] = useState<User | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [settings, setSettings] = useState<SiteSettings>(defaultSiteSettings);
  const [socialLinks, setSocialLinks] = useState<SocialLinks>(defaultSocialLinks);
  const [selectedPage, setSelectedPage] = useState<PageKey>("about");
  const [pageForm, setPageForm] = useState<PageContent>(defaultPageContent.about);
  const [projectForm, setProjectForm] = useState<ProjectForm>(emptyProject);
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!auth) {
      return;
    }

    return onAuthStateChanged(auth, setUser);
  }, []);

  useEffect(() => {
    setSettings(cms.settings);
    setSocialLinks(cms.socialLinks);
  }, [cms.settings, cms.socialLinks]);

  useEffect(() => {
    setPageForm(cms.pages[selectedPage]);
  }, [cms.pages, selectedPage]);

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!auth) {
      return;
    }

    setBusy(true);
    setMessage("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch {
      setMessage("Login failed. Check the admin email and password in Firebase Auth.");
    } finally {
      setBusy(false);
    }
  }

  async function saveSiteSettings(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!db) {
      return;
    }

    setBusy(true);
    await setDoc(doc(db, "site", "settings"), settings, { merge: true });
    setBusy(false);
    setMessage("Site settings saved.");
  }

  async function saveSocialLinks(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!db) {
      return;
    }

    setBusy(true);
    await setDoc(doc(db, "site", "social"), socialLinks, { merge: true });
    setBusy(false);
    setMessage("Social links saved.");
  }

  async function savePageContent(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!db) {
      return;
    }

    setBusy(true);
    await setDoc(doc(db, "pages", selectedPage), pageForm, { merge: true });
    setBusy(false);
    setMessage(`${selectedPage} page saved.`);
  }

  async function saveProject(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!db) {
      return;
    }

    setBusy(true);
    const payload = {
      title: projectForm.title,
      type: projectForm.type,
      image: projectForm.image,
      updatedAt: serverTimestamp()
    };

    if (projectForm.id) {
      await updateDoc(doc(db, "projects", projectForm.id), payload);
      setMessage("Project updated.");
    } else {
      await addDoc(collection(db, "projects"), { ...payload, createdAt: serverTimestamp() });
      setMessage("Project added.");
    }

    setProjectForm(emptyProject);
    setBusy(false);
  }

  async function deleteProject(projectId: string) {
    if (!db || projectId.startsWith("default-")) {
      setMessage("Default projects cannot be deleted until you add them to Firebase.");
      return;
    }

    setBusy(true);
    await deleteDoc(doc(db, "projects", projectId));
    setBusy(false);
    setMessage("Project deleted.");
  }

  async function handleUpload(file: File | undefined, onUploaded: (url: string) => void) {
    if (!file) {
      return;
    }

    setBusy(true);
    setMessage("Uploading image...");
    try {
      const imageUrl = await uploadToCloudinary(file);
      onUploaded(imageUrl);
      setMessage("Image uploaded.");
    } catch {
      setMessage("Upload failed. Check Cloudinary cloud name and unsigned upload preset.");
    } finally {
      setBusy(false);
    }
  }

  if (!isFirebaseConfigured) {
    return (
      <main className="min-h-screen bg-linen px-6 py-12">
        <div className="mx-auto max-w-2xl rounded-md border border-charcoal/10 bg-white p-8">
          <p className="eyebrow">Admin Setup</p>
          <h1 className="font-display mt-4 text-4xl">Firebase is not configured</h1>
          <p className="mt-4 leading-7 text-charcoal/70">
            Add the Firebase and Cloudinary values to `.env.local`, then restart the dev server. The public website will keep using the built-in content until then.
          </p>
        </div>
      </main>
    );
  }

  if (!user) {
    return (
      <main className="grid min-h-screen place-items-center bg-linen px-6">
        <form onSubmit={handleLogin} className="w-full max-w-sm rounded-md border border-charcoal/10 bg-white p-8 shadow-line">
          <p className="eyebrow">Admin Panel</p>
          <h1 className="font-display mt-4 text-4xl">Sign in</h1>
          <label className="mt-8 block text-sm font-bold">
            Email
            <input value={email} onChange={(event) => setEmail(event.target.value)} className="mt-2 h-12 w-full border border-charcoal/12 px-4 font-normal outline-none" type="email" required />
          </label>
          <label className="mt-4 block text-sm font-bold">
            Password
            <input value={password} onChange={(event) => setPassword(event.target.value)} className="mt-2 h-12 w-full border border-charcoal/12 px-4 font-normal outline-none" type="password" required />
          </label>
          <button disabled={busy} className="mt-6 flex h-12 w-full items-center justify-center rounded-[3px] bg-moss text-sm font-bold text-white disabled:opacity-60">
            Sign In
          </button>
          {message ? <p className="mt-4 text-sm text-charcoal/70">{message}</p> : null}
        </form>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-linen py-8">
      <div className="container">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="eyebrow">Admin Panel</p>
            <h1 className="font-display mt-2 text-5xl">Website Content</h1>
          </div>
          <button onClick={() => auth && signOut(auth)} className="inline-flex h-11 items-center gap-2 rounded-[3px] border border-charcoal/15 bg-white px-5 text-sm font-bold">
            <LogOut size={16} /> Sign Out
          </button>
        </div>

        {message ? <p className="mt-5 rounded-md border border-charcoal/10 bg-white px-4 py-3 text-sm text-charcoal/72">{message}</p> : null}

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <AdminCard title="Logo, Contact and About">
            <form onSubmit={saveSiteSettings} className="grid gap-4">
              <TextInput label="Business Name" value={settings.businessName} onChange={(value) => setSettings({ ...settings, businessName: value })} />
              <TextInput label="Mobile Number" value={settings.phone} onChange={(value) => setSettings({ ...settings, phone: value, whatsapp: value })} />
              <TextInput label="Email" value={settings.email} onChange={(value) => setSettings({ ...settings, email: value })} />
              <TextInput label="Address" value={settings.address} onChange={(value) => setSettings({ ...settings, address: value })} />
              <TextInput label="Website Link" value={settings.weblink} onChange={(value) => setSettings({ ...settings, weblink: value })} />
              <ImageField label="Logo" value={settings.logo} onUpload={(file) => handleUpload(file, (url) => setSettings({ ...settings, logo: url }))} />
              <TextArea label="About Short Text" value={settings.aboutText} onChange={(value) => setSettings({ ...settings, aboutText: value })} />
              <SaveButton busy={busy} />
            </form>
          </AdminCard>

          <AdminCard title="Social Links">
            <form onSubmit={saveSocialLinks} className="grid gap-4">
              <TextInput label="Facebook" value={socialLinks.facebook} onChange={(value) => setSocialLinks({ ...socialLinks, facebook: value })} />
              <TextInput label="Instagram" value={socialLinks.instagram} onChange={(value) => setSocialLinks({ ...socialLinks, instagram: value })} />
              <TextInput label="LinkedIn" value={socialLinks.linkedin} onChange={(value) => setSocialLinks({ ...socialLinks, linkedin: value })} />
              <TextInput label="YouTube" value={socialLinks.youtube} onChange={(value) => setSocialLinks({ ...socialLinks, youtube: value })} />
              <SaveButton busy={busy} />
            </form>
          </AdminCard>

          <AdminCard title="Page Hero and About Page">
            <form onSubmit={savePageContent} className="grid gap-4">
              <label className="text-sm font-bold">
                Page
                <select value={selectedPage} onChange={(event) => setSelectedPage(event.target.value as PageKey)} className="mt-2 h-12 w-full border border-charcoal/12 bg-white px-4 font-normal outline-none">
                  {pageOptions.map((page) => (
                    <option key={page} value={page}>{page}</option>
                  ))}
                </select>
              </label>
              <TextInput label="Eyebrow" value={pageForm.eyebrow} onChange={(value) => setPageForm({ ...pageForm, eyebrow: value })} />
              <TextInput label="Title" value={pageForm.title} onChange={(value) => setPageForm({ ...pageForm, title: value })} />
              <TextArea label="Intro Text" value={pageForm.text} onChange={(value) => setPageForm({ ...pageForm, text: value })} />
              <ImageField label="Hero Image" value={pageForm.image} onUpload={(file) => handleUpload(file, (url) => setPageForm({ ...pageForm, image: url }))} />
              {selectedPage === "about" ? (
                <TextArea label="About Page Detail" value={pageForm.body ?? ""} onChange={(value) => setPageForm({ ...pageForm, body: value })} />
              ) : null}
              <SaveButton busy={busy} />
            </form>
          </AdminCard>

          <AdminCard title="Project CRUD">
            <form onSubmit={saveProject} className="grid gap-4">
              <TextInput label="Project Title" value={projectForm.title} onChange={(value) => setProjectForm({ ...projectForm, title: value })} />
              <TextInput label="Project Type" value={projectForm.type} onChange={(value) => setProjectForm({ ...projectForm, type: value })} />
              <ImageField label="Project Image" value={projectForm.image} onUpload={(file) => handleUpload(file, (url) => setProjectForm({ ...projectForm, image: url }))} />
              <SaveButton busy={busy} label={projectForm.id ? "Update Project" : "Add Project"} />
            </form>
            <div className="mt-6 grid gap-3">
              {cms.projects.map((project) => (
                <div key={project.id} className="flex items-center gap-3 rounded-md border border-charcoal/10 p-3">
                  <div className="relative h-14 w-16 shrink-0 overflow-hidden rounded-sm bg-cream">
                    <Image src={project.image} alt={project.title} fill className="object-cover" sizes="64px" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-bold">{project.title}</p>
                    <p className="text-xs text-charcoal/60">{project.type}</p>
                  </div>
                  <button type="button" onClick={() => setProjectForm(project)} className="grid h-9 w-9 place-items-center rounded-sm border border-charcoal/12" aria-label="Edit project">
                    <Edit3 size={15} />
                  </button>
                  <button type="button" onClick={() => deleteProject(project.id)} className="grid h-9 w-9 place-items-center rounded-sm border border-charcoal/12 text-red-700" aria-label="Delete project">
                    <Trash2 size={15} />
                  </button>
                </div>
              ))}
            </div>
          </AdminCard>
        </div>
      </div>
    </main>
  );
}

function AdminCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-md border border-charcoal/10 bg-white p-6 shadow-line">
      <h2 className="text-lg font-bold">{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

function TextInput({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return (
    <label className="text-sm font-bold">
      {label}
      <input value={value} onChange={(event) => onChange(event.target.value)} className="mt-2 h-12 w-full border border-charcoal/12 px-4 font-normal outline-none" />
    </label>
  );
}

function TextArea({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return (
    <label className="text-sm font-bold">
      {label}
      <textarea value={value} onChange={(event) => onChange(event.target.value)} className="mt-2 min-h-28 w-full resize-y border border-charcoal/12 px-4 py-3 font-normal leading-6 outline-none" />
    </label>
  );
}

function ImageField({ label, value, onUpload }: { label: string; value: string; onUpload: (file: File | undefined) => void }) {
  return (
    <label className="text-sm font-bold">
      {label}
      <div className="mt-2 flex items-center gap-4">
        <div className="relative h-16 w-16 overflow-hidden rounded-sm border border-charcoal/10 bg-cream">
          <Image src={value} alt={label} fill className="object-cover" sizes="64px" />
        </div>
        <span className="inline-flex h-11 cursor-pointer items-center gap-2 rounded-[3px] border border-charcoal/12 px-4">
          <ImagePlus size={16} /> Upload
          <input className="sr-only" type="file" accept="image/*" onChange={(event: ChangeEvent<HTMLInputElement>) => onUpload(event.target.files?.[0])} />
        </span>
      </div>
    </label>
  );
}

function SaveButton({ busy, label = "Save Changes" }: { busy: boolean; label?: string }) {
  return (
    <button disabled={busy} className="inline-flex h-12 items-center justify-center gap-2 rounded-[3px] bg-moss px-5 text-sm font-bold text-white disabled:opacity-60">
      <Save size={16} /> {label}
    </button>
  );
}
