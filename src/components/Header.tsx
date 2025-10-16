"use client";
import { useEffect, useId, useState } from "react";
import clsx from "clsx";
import { nav } from "../app/config/site";
import Link from "next/link";

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
    <header className="sticky w-full top-0 z-40 overflow-hidden">
      <div
        className={clsx(
          "relative flex items-center justify-between border-b border-neutral-200 bg-white",
          "pl-4 pr-2 pt-1 md:px-8 md:py-3 lg:px-10 lg:py-4"
        )}
      >
        {/* 로고 */}
        <Link
          href="/"
          className="font-semibold text-sm md:text-base lg:text-xl tracking-wide text-neutral-800"
        >
          SEJIN BAEK
        </Link>

        {/* 데스크톱 네비게이션 */}
        <nav className="hidden md:flex items-center gap-4">
          {withoutContact.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm md:text-base md:px-3 md:py-1 xl:px-4 xl:py-2 rounded-full text-neutral-800 hover:bg-neutral-100"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
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
          aria-controls={menuId}
          aria-expanded={open}
          aria-label="메뉴 열기"
        >
          {/* 햄버거 아이콘 */}
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
        <aside
          id={menuId}
          role="dialog"
          aria-labelledby="mobileMenuTitle"
          className={clsx(
            "fixed right-0 top-0 z-[60] h-full w-72 bg-white shadow-xl md:hidden",
            "transform-gpu transition-transform duration-200 ease-out",
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
              className="rounded p-2 hover:bg-neutral-100"
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

          <ul className="flex flex-col items-center gap-8 py-10 text-sm tracking-wide text-neutral-800">
            {nav.header.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="font-medium"
                >
                  {item.label.toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </header>
  );
}
