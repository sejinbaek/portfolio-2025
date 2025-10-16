import Link from "next/link";
import Image from "next/image";

type LinkButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
};

export default function LinkButton({
  href,
  children,
  className = "",
  ariaLabel,
}: LinkButtonProps) {
  const base =
    "inline-flex items-center gap-2 pt-4 pb-3 px-3 rounded-xl min-[400px]:rounded-2xl text-xs min-[400px]:text-base xl:text-xl border border-neutral-200 text-neutral-800 transform-gpu transition duration-200 ease-out hover:-translate-y-1 hover:bg-neutral-100 [will-change:transform] dark:text-white";
  const ArrowIcon = (
    <span
      aria-hidden="true"
      className="inline-flex translate-x-0 translate-y-0 transition-transform"
    >
      <Image
        src="/about/arrow.svg"
        alt=""
        width={16}
        height={16}
        className="w-2 h-2 min-[400px]:w-3 min-[400px]:h-3"
      />
    </span>
  );

  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      target="_blank"
      className={`${base} ${className}`}
    >
      <span className="whitespace-nowrap break-keep">{children}</span>
      {ArrowIcon}
    </Link>
  );
}
