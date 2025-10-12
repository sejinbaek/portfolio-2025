import Image from "next/image";

export type Social = { name: string; href: string; icon: string };

export default function SocialLinks({ items }: { items: Social[] }) {
  return (
    <div className="flex items-center justify-center gap-3">
      {items.map((s) => (
        <a
          key={s.name}
          href={s.href}
          aria-label={s.name}
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src={s.icon}
            alt=""
            width={50}
            height={50}
            className="w-6 h-6 min-[400px]:w-7 min-[400px]:h-7"
          />
        </a>
      ))}
    </div>
  );
}
