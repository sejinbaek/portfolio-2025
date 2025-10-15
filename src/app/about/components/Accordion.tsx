"use client";
import { useId, useState } from "react";
import { AccordionData } from "../../config/site";
import clsx from "clsx";

export default function Accordion({
  sections,
  defaultOpen = 0,
  className = "",
}: {
  sections: AccordionData[];
  defaultOpen?: number | null;
  className?: string;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen ?? null);
  const baseId = useId();

  return (
    <div className={clsx("space-y-4", className)}>
      {sections.map((sec, i) => {
        const isOpen = open === i;
        const btnId = `${baseId}-btn-${i}`;
        const panelId = `${baseId}-panel-${i}`;

        return (
          <section
            key={sec.label}
            className={clsx(
              // 모양
              "relative rounded-md md:rounded-lg lg:rounded-xl border",
              // 상태별 배경/텍스트/테두리
              isOpen
                ? "bg-neutral-900 text-white border-neutral-900"
                : "bg-white text-neutral-800 border-neutral-200",
              // 부드러운 호버 (변환/그림자/색)
              "transform-gpu transition duration-200 ease-out",
              "md:hover:-translate-y-1",
              // 색상 살짝 밝게
              !isOpen && "hover:bg-neutral-100 hover:border-neutral-300",
              // 미세한 떨림 방지
              "[will-change:transform]"
            )}
          >
            {/* Experience */}
            <h3>
              <button
                id={btnId}
                aria-controls={panelId}
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : i)}
                className={clsx(
                  "flex w-full items-center justify-between px-5 py-4 md:px-7 md:py-6 lg:px-9 lg:py-8 text-left font-bold text-base min-[400px]:text-xl md:text-2xl lg:text-3xl",
                  !isOpen &&
                    "focus-visible:ring-2 focus-visible:ring-sky-400 rounded-md"
                )}
              >
                {sec.label}

                {/* + / − 아이콘 */}
                <span
                  aria-hidden
                  className={clsx(
                    "grid size-6 place-items-center transition-colors",
                    isOpen ? "border-white" : "border-neutral-400"
                  )}
                >
                  {isOpen ? (
                    <svg
                      viewBox="0 0 24 24"
                      className="size-4 md:size-5 lg:size-6"
                    >
                      <path
                        d="M5 12h14"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      viewBox="0 0 24 24"
                      className="size-4 md:size-5 lg:size-6"
                    >
                      <path
                        d="M12 5v14M5 12h14"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  )}
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              className={clsx(
                "grid transition-all duration-300 ease-out",
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-95"
              )}
            >
              <div className="min-h-0 overflow-hidden">
                <ul
                  className={clsx(
                    "px-5 pb-5 flex flex-col gap-5 lg:px-64 lg:pb-12 lg:gap-10",
                    isOpen ? "text-white" : "text-neutral-900"
                  )}
                >
                  {sec.rows.map((r, idx) => (
                    <li
                      key={idx}
                      className="flex flex-col md:flex-row md:items-baseline md:justify-between md:gap-6"
                    >
                      {/* 기간 */}
                      <div
                        className={clsx(
                          "tabular-nums whitespace-nowrap",
                          "text-xs md:text-base lg:text-xl md:self-start",
                          "md:w-[18rem] md:min-w-[18rem] md:shrink-0",
                          isOpen ? "text-neutral-200" : "text-neutral-500"
                        )}
                      >
                        {r.period ?? ""}
                      </div>

                      {/* 내용(메인 + 서브) */}
                      <div className="min-w-0 md:flex-1">
                        {/* 메인 (데스크톱에선 기간과 같은 줄) */}
                        <div className="text-xs min-[400px]:text-base lg:text-xl leading-6 break-words">
                          {r.text}
                        </div>

                        {/* 서브 (있을 때만, 메인 아래 한 줄) */}
                        {r.sub && (
                          <div
                            className={clsx(
                              "text-[11px] min-[400px]:text-sm leading-5 break-words",
                              isOpen ? "text-white/70" : "text-neutral-500"
                            )}
                          >
                            {r.sub}
                          </div>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
