import type { Metadata } from "next";
import type { Project } from "../app/projects/_types/types";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

const toAbs = (pathOrUrl?: string) => {
  if (!pathOrUrl) return SITE_URL;
  try {
    return new URL(pathOrUrl, SITE_URL).toString();
  } catch {
    return pathOrUrl;
  }
};

export function pageMetadata({
  title,
  description,
  path, // e.g., `/projects/umate`
  image, // og 이미지 경로 또는 절대 URL
  type = "article",
}: {
  title: string;
  description?: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
}): Metadata {
  const url = toAbs(path);
  const ogImage = toAbs(image || "/og/default.webp");
  return {
    title, // layout의 template에 들어감
    description,
    alternates: { canonical: path || "/" },
    openGraph: {
      type,
      title,
      description,
      url,
      images: [ogImage],
      siteName: "BAEK SEJIN",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export function projectMetadata(p: Project, path: string): Metadata {
  return pageMetadata({
    title: p.title,
    description: p.description,
    path,
    image: p.cover?.src,
    type: "article",
  });
}
