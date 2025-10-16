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
    "w-8 h-8 min-[350px]:w-10 min-[350px]:h-10 xl:w-14 xl:h-14";
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
          <h1 id="hero-title" className={clsx(textStyle, "mb-4 lg:mb-0")}>
            CREATIVE
          </h1>
          <div className="relative hidden lg:block h-auto overflow-hidden">
            <Image
              src="/hero/flower.webp"
              alt="히어로 이미지"
              width={1600}
              height={900}
              priority
              className="lg:w-[450px] lg:h-[80px] xl:w-[600px] xl:h-[110px]"
              aria-hidden="true"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-2 items-center lg:justify-between">
          {/* 2. 장식 아이콘 */}
          <div className="flex justify-center" aria-hidden>
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="currentColor"
              aria-hidden="true"
              className={shapeStyle}
            >
              <path
                d="M12 2
           C 9.5 7.5, 7.5 9.5, 2 12
           C 7.5 14.5, 9.5 16.5, 12 22
           C 14.5 16.5, 16.5 14.5, 22 12
           C 16.5 9.5, 14.5 7.5, 12 2 Z"
              />
            </svg>
          </div>
          {/* 3. FRONTEND / 4. DEVELOPER — 채움(볼드) */}
          <p className="leading-normal">
            FRONTEND <br className="block lg:hidden" />
            DEVELOPER
          </p>
        </div>

        <div className="flex flex-col mt-6 lg:mt-0 lg:flex-row gap-4 md:gap-8 lg:gap-4 lg:items-center">
          {/* 5. SEJIN BAEK */}
          <p className={textStyle}>SEJIN BAEK</p>

          {/* 6. 회색 도형(장식) */}
          <div className="flex justify-center" aria-hidden>
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="currentColor"
              aria-hidden="true"
              className={clsx(shapeStyle, "text-neutral-300")}
            >
              {/* 가운데 원 */}
              <circle cx="12" cy="12" r="6.5" />
              {/* 둘레의 둥근 스캘럽(12개) */}
              <circle cx="19" cy="12" r="3.5" />
              <circle cx="18.062" cy="15.5" r="3.5" />
              <circle cx="15.5" cy="18.062" r="3.5" />
              <circle cx="12" cy="19" r="3.5" />
              <circle cx="8.5" cy="18.062" r="3.5" />
              <circle cx="5.938" cy="15.5" r="3.5" />
              <circle cx="5" cy="12" r="3.5" />
              <circle cx="5.938" cy="8.5" r="3.5" />
              <circle cx="8.5" cy="5.938" r="3.5" />
              <circle cx="12" cy="5" r="3.5" />
              <circle cx="15.5" cy="5.938" r="3.5" />
              <circle cx="18.062" cy="8.5" r="3.5" />
            </svg>
          </div>

          {/* 7. PORTFOLIO — 외곽선만 */}
          <p className={textStyle}>PORTFOLIO</p>
        </div>
      </div>
    </section>
  );
}
