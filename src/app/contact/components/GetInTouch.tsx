import SocialLinks from "../../../components/SocialLinks";
import { contact } from "@/app/config/site";

type Props = {
  title?: string;
  emailLabel?: string;
  email: string;
  className?: string;
};

export default function GetInTouch({
  title = "Get In Touch",
  email,
  className = "",
}: Props) {
  return (
    <section
      className={`flex flex-col items-center text-center gap-4 md:gap-8 lg:gap-10 ${className}`}
    >
      <h3 className="text-xl font-semibold min-[400px]:text-2xl md:text-3xl lg:text-4xl">
        {title}
      </h3>

      <div className="space-y-1">
        <p className="text-base min-[400px]:text-xl md:text-2xl text-neutral-400">
          Email
        </p>
        <a
          href={`mailto:${email}`}
          className="text-base min-[400px]:text-xl md:text-2xl text-neutral-800 dark:text-white"
        >
          {email}
        </a>
      </div>

      {contact.socialsDark.length > 0 && (
        <div className="space-y-2 md:space-y-3">
          <p className="text-base min-[400px]:text-xl md:text-2xl text-neutral-400">
            Follow Me
          </p>
          <SocialLinks items={contact.socialsDark} />
        </div>
      )}
    </section>
  );
}
