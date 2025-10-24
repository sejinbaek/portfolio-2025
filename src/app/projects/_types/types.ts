export type Inline = string | { mark: "red" | "blue"; text: string };
export type Paragraph = { children: Inline[] };
export type List = { items: Inline[][] };

export type InsightSectionData = {
  title: string;
  content: Paragraph[];
  impact?: "low" | "medium" | "high";
};

export type Project = {
  slug: string;
  cover: { src: string; alt: string };
  title: string;
  subtitle: string;
  description: string;

  period?: string;
  team?: string;
  role?: string;
  stack?: string[] | { label: string; items: string[] }[];
  links?: { label: string; href: string; icon?: string }[];

  about?: string;
  features?: string[];
  implementation?: string[];

  thumbnail?: string;
  screenshots?: {
    src: string;
    alt: string;
  }[];

  performance?: InsightSectionData[];
  troubleshooting?: InsightSectionData[];
};

export type GroupedStackItem = { label: string; items: string[] };
