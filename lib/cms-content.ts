import { contact, pageSummaries, projects, siteSettings, socialLinks } from "@/lib/site-data";

export type SiteSettings = typeof siteSettings & typeof contact;
export type SocialLinks = typeof socialLinks;
export type PageKey = keyof typeof pageSummaries;
export type PageContent = {
  eyebrow: string;
  title: string;
  text: string;
  image: string;
  body?: string;
};
export type PageContentMap = Record<PageKey, PageContent>;
export type Project = {
  id: string;
  title: string;
  type: string;
  image: string;
};

export const defaultSiteSettings: SiteSettings = {
  ...siteSettings,
  ...contact
};

export const defaultSocialLinks: SocialLinks = socialLinks;

export const defaultPageContent: PageContentMap = pageSummaries;

export const defaultProjects: Project[] = projects.map((project, index) => ({
  id: `default-${index + 1}`,
  ...project
}));

export const pageOptions = Object.keys(defaultPageContent) as PageKey[];
