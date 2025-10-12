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
      className={`flex flex-col items-center text-center gap-4 ${className}`}
    >
      <h3 className="text-xl font-semibold min-[400px]:text-2xl">{title}</h3>

      <div className="space-y-1">
        <p className="text-base min-[400px]:text-xl text-neutral-500">Email:</p>
        <a href={`mailto:${email}`} className="text-base min-[400px]:text-xl">
          {email}
        </a>
      </div>

      {contact.socialsDark.length > 0 && (
        <div className="space-y-2">
          <p className="text-base min-[400px]:text-xl text-neutral-500">
            Follow Me
          </p>
          <SocialLinks items={contact.socialsDark} />
        </div>
      )}
    </section>
  );
}
