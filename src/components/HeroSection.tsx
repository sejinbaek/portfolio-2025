"use client";
import Image from "next/image";
import { Anton } from "next/font/google";
import clsx from "clsx";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function Hero() {
  const shapeStyle =
    "w-10 h-10 min-[350px]:w-12 min-[350px]:h-12 xl:w-16 xl:h-16";
  const textStyle = "text-white text-stroke";

  return (
    <section
      className="grid place-content-center min-h-[calc(100svh-4rem)] lg:min-h-[calc(100svh-6rem)] px-6 mb-20"
      aria-labelledby="hero-title"
    >
      <div
        className={clsx(
          anton.className,
          "flex flex-col justify-center w-full mx-auto text-center space-y-4 text-4xl min-[350px]:text-6xl md:text-8xl xl:text-9xl text-neutral-800 dark:text-white"
        )}
      >
        <div className="flex items-center justify-center lg:justify-between">
          {/* 1. CREATIVE */}
          <h1 id="hero-title" className={textStyle}>
            CREATIVE
          </h1>
          <div className="hidden lg:block">
            <Image
              src="/hero/flower.webp"
              alt="히어로 이미지"
              width={500}
              height={200}
              priority
              className="lg:w-120 lg:h-21 xl:w-160 xl:h-27"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-2 items-center lg:justify-between">
          {/* 2. 장식 아이콘 */}
          <div className="flex justify-center" aria-hidden>
            <Image
              src="/hero/shine-diamond.svg"
              alt="히어로 장식-1"
              width={28}
              height={28}
              priority
              className={shapeStyle}
            />
          </div>
          {/* 3. FRONTEND / 4. DEVELOPER — 채움(볼드) */}
          <p className="leading-normal">
            FRONTEND <br className="block lg:hidden" />
            DEVELOPER
          </p>
        </div>

        <div className="flex flex-col mt-6 lg:mt-0 lg:flex-row gap-4 lg:items-center">
          {/* 5. SEJIN BAEK */}
          <p className={textStyle}>SEJIN BAEK</p>

          {/* 6. 회색 도형(장식) */}
          <div className="flex justify-center" aria-hidden>
            <Image
              src="/hero/blob-flower.svg"
              alt="히어로 장식-2"
              width={28}
              height={28}
              className={shapeStyle}
            />
          </div>

          {/* 7. PORTFOLIO — 외곽선만 */}
          <p className={textStyle}>PORTFOLIO</p>
        </div>
      </div>
    </section>
  );
}
