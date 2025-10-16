import Image from "next/image";

type SkillBadgeProps = {
  label: string;
  icon?: string;
  className?: string;
};

export default function SkillBadge({
  label,
  icon,
  className = "",
}: SkillBadgeProps) {
  const base =
    "inline-flex items-center rounded-full border border-neutral-200 bg-neutral-100 px-4 py-1 text-xs min-[400px]:text-sm xl:text-xl font-light text-neutral-800";
  return (
    <div className={`${base} ${className}`}>
      {icon && (
        <Image
          src={icon}
          alt={label}
          width={16}
          height={16}
          className="inline-block mr-1 w-3 h-3 min-[400px]:w-4 min-[400px]:h-4 lg:w-6 lg:h-6 object-contain"
        />
      )}
      {label}
    </div>
  );
}
