import Image from "next/image";

type Social = { name: string; href: string; icon: string };

type Props = {
  title?: string;
  emailLabel?: string;
  email: string;
  socials?: Social[];
  className?: string;
};

export default function GetInTouch({
  title = "Get In Touch",
  emailLabel = "Email:",
  email,
  socials = [],
  className = "",
}: Props) {
  return (
    <section
      className={`flex flex-col items-center text-center gap-4 ${className}`}
    >
      <h3 className="text-xl font-semibold min-[400px]:text-2xl">{title}</h3>

      <div className="space-y-1">
        <p className="text-base min-[400px]:text-xl text-neutral-500">Email:</p>
        <a href={`mailto:${email}`} className="text-base min-[400px]:text-xl">
          {email}
        </a>
      </div>

      {socials.length > 0 && (
        <div className="space-y-2">
          <p className="text-base min-[400px]:text-xl text-neutral-500">
            Follow Me
          </p>
          <div className="flex items-center justify-center gap-3">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                aria-label={social.name}
                target="_blank"
                rel="noreferrer"
                className="hover:bg-neutral-100"
              >
                <Image
                  src={social.icon}
                  alt=""
                  width={50}
                  height={50}
                  className="w-6 h-6 min-[400px]:w-7 min-[400px]:h-7"
                />
              </a>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
