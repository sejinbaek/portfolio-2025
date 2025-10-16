import Link from "next/link";

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
      <svg
        viewBox="0 0 16 16"
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="w-3 h-3 min-[400px]:w-4 min-[400px]:h-4 lg:w-5 lg:h-5"
      >
        <path d="M3 13L13 3" />
        <path d="M9 3h4v4" />
      </svg>
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
