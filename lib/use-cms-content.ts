"use client";

import { useEffect, useMemo, useState } from "react";
import { collection, doc, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "@/lib/firebase";
import {
  defaultPageContent,
  defaultProjects,
  defaultSiteSettings,
  defaultSocialLinks,
  type PageContent,
  type PageKey,
  type Project,
  type SiteSettings,
  type SocialLinks
} from "@/lib/cms-content";

type CmsState = {
  settings: SiteSettings;
  socialLinks: SocialLinks;
  pages: typeof defaultPageContent;
  projects: Project[];
  configured: boolean;
};

export function useCmsContent(): CmsState {
  const [settings, setSettings] = useState<SiteSettings>(defaultSiteSettings);
  const [social, setSocial] = useState<SocialLinks>(defaultSocialLinks);
  const [pages, setPages] = useState(defaultPageContent);
  const [projectList, setProjectList] = useState<Project[]>(defaultProjects);

  useEffect(() => {
    if (!db) {
      return;
    }

    const unsubscribers = [
      onSnapshot(doc(db, "site", "settings"), (snapshot) => {
        setSettings({ ...defaultSiteSettings, ...(snapshot.data() as Partial<SiteSettings> | undefined) });
      }),
      onSnapshot(doc(db, "site", "social"), (snapshot) => {
        setSocial({ ...defaultSocialLinks, ...(snapshot.data() as Partial<SocialLinks> | undefined) });
      }),
      onSnapshot(collection(db, "pages"), (snapshot) => {
        const updates = { ...defaultPageContent };
        snapshot.forEach((pageDoc) => {
          const key = pageDoc.id as PageKey;
          if (key in updates) {
            updates[key] = { ...updates[key], ...(pageDoc.data() as Partial<PageContent>) };
          }
        });
        setPages(updates);
      }),
      onSnapshot(query(collection(db, "projects"), orderBy("createdAt", "desc")), (snapshot) => {
        const remoteProjects = snapshot.docs.map((projectDoc) => ({
          id: projectDoc.id,
          ...(projectDoc.data() as Omit<Project, "id">)
        }));

        setProjectList(remoteProjects.length ? remoteProjects : defaultProjects);
      })
    ];

    return () => unsubscribers.forEach((unsubscribe) => unsubscribe());
  }, []);

  return useMemo(
    () => ({
      settings,
      socialLinks: social,
      pages,
      projects: projectList,
      configured: Boolean(db)
    }),
    [pages, projectList, settings, social]
  );
}
