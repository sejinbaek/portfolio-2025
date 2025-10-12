import Image from "next/image";
import SocialLinks from "./SocialLinks";
import { contact } from "../app/config/site";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="mx-auto w-full max-w-screen-2xl">
        <div className="pt-8 pb-10 md:pt-10 md:pb-24 flex flex-col gap-1 lg:gap-4">
          <div className="overflow-hidden pb-2">
            <div
              className="marquee-anim flex w-max whitespace-nowrap will-change-transform
                 animate-[marquee_linear_infinite] [animation-duration:35s]"
            >
              {/* 같은 문구를 2번 이어붙여야 끊김 없이 순환 */}
              <h2 className="min-w-[50%] text-xl min-[400px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white pr-2 lg:pr-4">
                <span className="opacity-70">Keep </span> Learning,{" "}
                <span className="opacity-70">Keep </span> Growing,{" "}
                <span className="opacity-70">Keep </span> Creating.
              </h2>
              <h2
                aria-hidden
                className="min-w-[50%] text-xl min-[400px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white pr-2 lg:pr-4"
              >
                <span className="opacity-70">Keep </span> Learning,{" "}
                <span className="opacity-70">Keep </span> Growing,{" "}
                <span className="opacity-70">Keep </span> Creating.
              </h2>
            </div>
          </div>
          <div className="overflow-hidden">
            <div
              className="marquee-anim flex w-max whitespace-nowrap gap-0 will-change-transform
                    animate-[marquee_linear_infinite_reverse] [animation-duration:35s]"
            >
              <h2 className="min-w-[50%] text-xl min-[400px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white pr-2 lg:pr-4">
                Portfolio of Baek Sejin — Creative Frontend Developer
              </h2>
              <h2
                aria-hidden
                className="min-w-[50%] text-xl min-[400px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white pr-2 lg:pr-4"
              >
                Portfolio of Baek Sejin — Creative Frontend Developer
              </h2>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-neutral-800" />

        <div className="px-4 sm:px-6 lg:px-10 py-4 flex flex-col gap-4 md:gap-0 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <Image src="/favicon.ico" alt="" width={20} height={20} />
            <span className="text-sm text-neutral-200">Baek Sejin</span>
          </div>

          <p className="text-xs lg:text-base text-neutral-400 text-center md:text-left">
            © 2025 Baek Sejin. All rights reserved.
          </p>

          <div className="flex items-center justify-center md:justify-end gap-4">
            <SocialLinks items={contact.socialsLight} />
          </div>
        </div>
      </div>
    </footer>
  );
}
