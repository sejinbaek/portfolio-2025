import Image from "next/image";

export type Social = { name: string; href: string; icon: string };

type Props = {
  items: Social[];
};

export default function SocialLinks({ items }: Props) {
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
            className="w-6 h-6 min-[400px]:w-7 min-[400px]:h-7 lg:w-8 lg:h-8"
          />
        </a>
      ))}
    </div>
  );
}
