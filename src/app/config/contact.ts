export type Social = { name: string; href: string; icon: string };

export const contact = {
  email: "sejin9767@gmail.com",
  socials: [
    {
      name: "instagram",
      href: "https://instagram.com/...",
      icon: "/icons/instagram.svg",
    },
    {
      name: "youtube",
      href: "https://youtube.com/...",
      icon: "/icons/youtube.svg",
    },
    { name: "blog", href: "https://your.blog/...", icon: "/icons/blog.svg" },
    {
      name: "github",
      href: "https://github.com/...",
      icon: "/icons/github.svg",
    },
  ] satisfies Social[],
};
