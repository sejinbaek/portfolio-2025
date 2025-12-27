type LinkButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
  target?: React.HTMLAttributeAnchorTarget;
  download?: boolean;
  rel?: string;
};

export default function LinkButton({
  href,
  children,
  className = "",
  ariaLabel,
  target = "_blank",
  download,
  rel,
}: LinkButtonProps) {
  const base =
    "w-full flex items-center justify-center gap-2 pt-6 pb-5 px-3 rounded-xl min-[400px]:rounded-2xl text-sm min-[400px]:text-base xl:text-xl border border-neutral-200 text-neutral-800 transform-gpu transition duration-200 ease-out md:hover:-translate-y-1 hover:bg-neutral-100 focus:bg-neutral-100 [will-change:transform] dark:bg-white";
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

  const computedRel =
    rel ?? (target === "_blank" ? "noopener noreferrer" : undefined);

  return (
    <a
      href={href}
      aria-label={ariaLabel}
      target="_blank"
      rel={computedRel}
      className={`${base} ${className}`}
      download={download}
    >
      <span className="whitespace-nowrap break-keep">{children}</span>
      {ArrowIcon}
    </a>
  );
}
