"use client";
import Link from "next/link";
import clsx from "clsx";
import { nav } from "../app/config/site";
import { useEffect, useId, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuId = `${useId()}-mobile-drawer`;

  // 모바일 드로어 열릴 때 바디 스크롤 잠금 + ESC 닫기
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const withoutContact = nav.header.filter((item) => item.label !== "Contact");

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-neutral-200 h-[var(--header-h)]">
      <div
        className={clsx(
          "mx-auto flex h-full max-w-screen-xl items-center justify-between",
          "px-4 xl:px-2"
        )}
      >
        {/* 로고 */}
        <Link
          href="/"
          replace
          className="font-shrikhand text-base md:text-xl lg:text-2xl lg:pt-1 tracking-wide text-neutral-800"
        >
          <h1>SEJIN BAEK</h1>
        </Link>

        {/* 데스크톱 네비 */}
        <nav className="hidden md:flex items-center gap-4">
          {withoutContact.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              replace
              className="text-sm md:text-base px-3 py-1 rounded-full text-neutral-800 hover:bg-neutral-100"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            replace
            className="rounded-full border border-neutral-800 text-neutral-800 px-4 py-1.5 text-sm md:text-base hover:bg-neutral-800 hover:text-white transition-colors"
          >
            Contact me
          </Link>
        </nav>

        {/* 모바일 햄버거 */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-neutral-100 text-neutral-800"
        >
          <svg width="22" height="22" viewBox="0 0 24 24">
            <path
              d="M4 7h16M4 12h16M4 17h16"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* 모바일 드로어 오버레이 */}
        <div
          className={clsx(
            "fixed inset-0 z-[60] bg-black/30 transition-opacity md:hidden",
            open ? "opacity-100" : "pointer-events-none opacity-0"
          )}
          onClick={() => setOpen(false)}
        />

        {/* 모바일 드로어 패널 (오른쪽에서 슬라이드) */}
        <div
          id={menuId}
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobileMenuTitle"
          className={clsx(
            "fixed right-0 top-0 z-[60] h-full w-full bg-white shadow-xl md:hidden",
            "transform-gpu transition-transform duration-300 ease-out",
            open ? "translate-x-0" : "translate-x-full"
          )}
        >
          <h2 id="mobileMenuTitle" className="sr-only">
            모바일 내비게이션 메뉴
          </h2>
          <div className="flex items-center justify-end px-4 py-3">
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="메뉴 닫기"
              className="rounded p-2 hover:bg-neutral-100 dark:text-neutral-800"
            >
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <ul className="font-shrikhand flex flex-col items-center gap-10 py-10 text-xl tracking-wide text-neutral-800">
            {nav.header.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  replace
                  onClick={() => setOpen(false)}
                  className="font-medium"
                >
                  {item.label.toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
