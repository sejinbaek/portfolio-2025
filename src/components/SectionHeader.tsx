type Props = {
  title: string;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  titleColor?: string;
};

const SectionHeader = ({
  title,
  subtitle,
  align = "center",
  className = "",
  titleColor = "#262626",
}: Props) => {
  const isCenter = align === "center";
  const alignCls = isCenter
    ? "items-center text-center"
    : "items-start text-left";

  return (
    <div
      className={`flex flex-col gap-4 min-[400px]:gap-6 lg:gap-8 ${alignCls} ${className}`}
    >
      <h2
        className={[
          "font-shrikhand inline-block px-5 pt-1 text-2xl font-extrabold leading-none min-[400px]:text-3xl md:text-4xl lg:text-6xl",
          isCenter ? "bg-neutral-200" : "bg-transparent",
        ].join(" ")}
        style={{ color: titleColor }}
      >
        {title}
      </h2>

      {subtitle && (
        <p className="max-w-prose text-base leading-7 text-neutral-800 whitespace-pre-line min-[400px]:text-lg md:text-xl lg:text-2xl md:leading-8 lg:leading-9 dark:text-white">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
