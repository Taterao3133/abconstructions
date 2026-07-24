import {
  ArrowRight,
  Award,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  DraftingCompass,
  Hammer,
  HardHat,
  Home,
  Leaf,
  Mail,
  MapPin,
  PaintRoller,
  Phone,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users
} from "lucide-react";

export const contact = {
  address: "OPP: H.P Petrol bunk, Banswada, 503187",
  whatsapp:"+91 9989-9402-20",
  phone: "+91 9989-9402-20",
  email: "Surisabconstructions@gmail.com",
  weblink: "abconstructionsandinterior.in"
};

export const siteSettings = {
  businessName: "AB BUILDERS & Constructions",
  logo: "/ab-logo.jpeg",
  aboutText:
    "AB Construction & Interior is a leading construction and interior design company delivering residential, commercial and luxury projects with innovation, quality and transparency."
};

export const socialLinks = {
  facebook: "",
  instagram: "",
  linkedin: "",
  youtube: ""
};

export const navItems = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Services", "/services"],
  ["Projects", "/projects"],
  ["Pages", "/gallery"],
  ["Blog", "/blog"],
  ["Contact", "/contact"]
] as const;

export const stats = [
  { value: "15+", label: "Years of Experience", icon: Award },
  { value: "250+", label: "Projects Completed", icon: Building2 },
  { value: "98%", label: "Client Satisfaction", icon: Users },
  { value: "50+", label: "Expert Professionals", icon: HardHat },
  { value: "20+", label: "Awards Won", icon: Trophy }
];

export const services = [
  {
    title: "Architectural Design",
    description: "Purposeful plans, elevations and spatial concepts tailored to lifestyle and site constraints.",
    icon: DraftingCompass
  },
  {
    title: "Construction",
    description: "End-to-end civil execution with careful scheduling, procurement and site supervision.",
    icon: Hammer
  },
  {
    title: "Interior Design",
    description: "Warm, functional interiors with custom finishes, lighting, storage and furniture planning.",
    icon: Home
  },
  {
    title: "Renovation",
    description: "Measured upgrades that transform existing homes, offices and hospitality spaces.",
    icon: PaintRoller
  }
];

export const projects = [
  { title: "Luxury Villa", type: "Residential", image: "/demo/project-villa.png" },
  { title: "Modern Interior", type: "Interior Design", image: "/demo/project-interior.png" },
  { title: "Commercial Building", type: "Commercial", image: "/demo/project-commercial.png" },
  { title: "Premium Interior", type: "Interior Design", image: "/demo/project-premium.png" }
];

export const processSteps = [
  { title: "Consultation", icon: Leaf },
  { title: "Planning", icon: BriefcaseBusiness },
  { title: "Design", icon: DraftingCompass },
  { title: "Construction", icon: HardHat },
  { title: "Handover", icon: CheckCircle2 }
];

export const pageSummaries = {
  about: {
    eyebrow: "About Us",
    title: "Building More Than Structures, We Build Trust",
    text: "AB Construction & Interior brings design clarity, technical discipline and transparent execution to homes, offices and lifestyle spaces.",
    image: "/demo/project-villa.png",
    body:
      "Our team brings planning, civil execution, interior detailing and project coordination together under one accountable process. From first site visit to final handover, we focus on clear communication, durable materials and refined finishing."
  },
  services: {
    eyebrow: "Services",
    title: "From Site Planning to Finishing Details",
    text: "Explore integrated construction, architecture, interiors, renovation and project management under one accountable team.",
    image: "/demo/process-chair.png"
  },
  projects: {
    eyebrow: "Projects",
    title: "A Portfolio of Calm, Durable Spaces",
    text: "A curated view of residences, commercial spaces and interiors crafted with material honesty and precise execution.",
    image: "/demo/project-premium.png"
  },
  interiors: {
    eyebrow: "Interiors",
    title: "Interiors That Feel Effortless Every Day",
    text: "We design kitchens, bedrooms, living areas and bespoke storage systems that are warm, quiet and highly usable.",
    image: "/hero-interior.png"
  },
  construction: {
    eyebrow: "Construction",
    title: "Strong Foundations, Refined Delivery",
    text: "Civil construction services supported by planning, quality control, procurement discipline and site reporting.",
    image: "/demo/project-commercial.png"
  },
  gallery: {
    eyebrow: "Gallery",
    title: "Materials, Spaces and Finishing Moments",
    text: "Browse the textures, palettes and room experiences that define our premium construction and interior language.",
    image: "/demo/project-interior.png"
  },
  testimonials: {
    eyebrow: "Testimonials",
    title: "Client Confidence, Earned on Site",
    text: "Homeowners and business clients trust our team for attentive design, clean execution and reliable handovers.",
    image: "/demo/cta-kitchen.png"
  },
  blog: {
    eyebrow: "Blog",
    title: "Ideas for Better Living and Building",
    text: "Guides on planning, materials, interiors, renovation decisions and project readiness.",
    image: "/demo/blog-villa.png"
  },
  career: {
    eyebrow: "Career",
    title: "Build Beautiful Work With Us",
    text: "Join a thoughtful team of designers, engineers, project managers and site professionals.",
    image: "/demo/project-commercial.png"
  },
  faq: {
    eyebrow: "FAQ",
    title: "Clear Answers Before We Begin",
    text: "Common questions about timelines, budgets, design process, materials and project delivery.",
    image: "/demo/process-chair.png"
  },
  contact: {
    eyebrow: "Contact",
    title: "Let’s Discuss Your Dream Project",
    text: "Tell us about your site, room or renovation plan. We will help you shape the next practical step.",
    image: "/demo/mobile-map.png"
  },
  privacy: {
    eyebrow: "Privacy",
    title: "Your Information Is Handled With Care",
    text: "We collect only the details needed to respond to enquiries and manage client communication.",
    image: "/demo/hero.png"
  },
  terms: {
    eyebrow: "Terms",
    title: "Transparent Terms for a Better Working Relationship",
    text: "These terms outline responsible website use and the broad expectations around enquiries and service discussions.",
    image: "/demo/project-villa.png"
  }
};

export const featureBullets = [
  "Transparent estimates and phased delivery",
  "Premium material selection with practical durability",
  "Dedicated project coordination from concept to handover",
  "Clean contemporary detailing guided by your lifestyle"
];

export const icons = { ArrowRight, Mail, MapPin, Phone, ShieldCheck, Sparkles };
