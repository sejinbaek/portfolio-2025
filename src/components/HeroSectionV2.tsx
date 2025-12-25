import clsx from "clsx";
import { shrikhand } from "../app/styles/font";

export default function HeroSectionV2() {
  const subTextStyle = clsx(
    "relative z-10 text-center",
    "text-xl sm:text-2xl md:text-4xl",
    "text-white"
  );

  const mainTextStyle = clsx(
    "relative z-10 text-center",
    "text-6xl min-[390px]:text-7xl sm:text-8xl md:text-9xl lg:text-[150px] xl:text-[230px]",
    "text-white/90"
  );

  return (
    <section
      className="relative overflow-hidden w-full h-[calc(100svh-var(--header-h))]"
      aria-labelledby="hero-title"
    >
      {/* ✅ background-color */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#434343] to-black" />

      {/* ✅ 콘텐츠는 위로 */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center space-y-12 md:space-y-24">
        <span id="hero-title" className={clsx("font-paperlogy", subTextStyle)}>
          [ BAEK SEJIN - 2025 ]
        </span>

        <h1 className={clsx(shrikhand.className, mainTextStyle)}>portfolio</h1>
        <span
          className={clsx("font-paperlogy", subTextStyle, "leading-relaxed")}
        >
          Web Publisher, <br className="lg:hidden" /> Frontend Developer
        </span>
      </div>
    </section>
  );
}
