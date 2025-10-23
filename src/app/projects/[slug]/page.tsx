import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { Project, GroupedStackItem } from "../data/project";
import { projects } from "../data/project";
import InsightSections from "../components/InsightSections";
import { projectMetadata, pageMetadata } from "../../../lib/seo";

// 슬러그로 프로젝트 찾기
function getProject(slug: string): Project | undefined {
  return projects[slug];
}

// 정적 생성 (SSG)
export async function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

// SEO 메타 데이터 생성
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return pageMetadata({ title: "Project", path: `/projects/${slug}` });
  return projectMetadata(p, `/projects/${slug}`);
}

export function isFlatStack(s: Project["stack"]): s is string[] {
  return Array.isArray(s) && (s.length === 0 || typeof s[0] === "string");
}

export function isGroupedStack(s: Project["stack"]): s is GroupedStackItem[] {
  return (
    Array.isArray(s) &&
    s.length > 0 &&
    typeof s[0] === "object" &&
    s[0] !== null &&
    // 'items' in s[0] 만으로도 되지만 hasOwnProperty가 더 엄격
    Object.prototype.hasOwnProperty.call(s[0], "items")
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getProject(slug);
  // 프로젝트 정보가 없을 때
  if (!p) {
    return (
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-xl font-semibold">프로젝트를 찾을 수 없어요.</h1>
        <Link
          href="/projects"
          className="mt-4 inline-block text-neutral-400 underline"
        >
          프로젝트 목록으로
        </Link>
      </div>
    );
  }

  const {
    title,
    subtitle,
    period,
    team,
    role,
    stack,
    links,
    about,
    features,
    implementation,
    screenshots,
    performance,
    troubleshooting,
  } = p;

  const subTitleStyle = "font-medium text-neutral-400 text-base md:text-xl";
  const contentStyle = "text-base md:text-lg text-neutral-800";

  return (
    <article className="mx-auto xl:py-10">
      {/* 헤더 */}
      <header className="mb-6 md:mb-20 flex flex-col lg:gap-2 dark:invert">
        <h1 className="text-2xl font-bold text-neutral-900 md:text-4xl xl:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-1 text-base md:text-lg xl:text-xl text-neutral-400">
            {subtitle}
          </p>
        )}
      </header>

      {/* 메타 + 소개 레이아웃 */}
      <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-2 dark:invert">
        {/* 소개(왼쪽, 데스크탑에서 1번째) */}
        <section className="space-y-4 order-2 lg:order-1 prose prose-neutral">
          {about && (
            <div className="flex flex-col gap-2">
              <h2 className={subTitleStyle}>About the Service</h2>
              <p className={contentStyle}>{about}</p>
            </div>
          )}
          {features && features.length > 0 && (
            <>
              <ul className="list-disc pl-5 space-y-1 marker:text-neutral-400">
                {features.map((feature) => (
                  <li key={feature} className={contentStyle}>
                    {feature}
                  </li>
                ))}
              </ul>
            </>
          )}
          {implementation && implementation.length > 0 && (
            <div className="flex flex-col gap-2 mt-8">
              <h3 className={subTitleStyle}>Frontend Implementation</h3>
              <ul className="space-y-4">
                {implementation.map((line, i) => (
                  <li key={i} className={contentStyle}>
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>

        {/* 메타(오른쪽, 데스크탑에서 2번째) */}
        <section className="order-1 lg:order-2 flex flex-col gap-4 lg:gap-8 mb-6 text-neutral-700 lg:sticky lg:top-20 lg:pl-20 xl:pl-40">
          {period && (
            <div>
              <h4 className={subTitleStyle}>Date</h4>
              <p className={contentStyle}>{period}</p>
            </div>
          )}
          {team && (
            <div>
              <h4 className={subTitleStyle}>Team</h4>
              <p className={contentStyle}>{team}</p>
            </div>
          )}
          {role && (
            <div>
              <h4 className={subTitleStyle}>Role</h4>
              <p className={contentStyle}>{role}</p>
            </div>
          )}
          {Array.isArray(stack) && stack.length > 0 && (
            <div>
              <h4 className={subTitleStyle}>Stack</h4>

              {isFlatStack(stack) ? (
                <p className={contentStyle}>{stack.join(" · ")}</p>
              ) : isGroupedStack(stack) ? (
                <ul className="mt-1 space-y-4">
                  {stack.map((g, i) => (
                    <li key={i} className={contentStyle}>
                      <p className={`${contentStyle} text-neutral-400`}>
                        {g.label}{" "}
                      </p>
                      <p className={contentStyle}>{g.items.join(" · ")}</p>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          )}
          {links && links.length > 0 && (
            <div className="mt-1 flex flex-wrap gap-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  className="inline-flex py-2"
                >
                  {link.icon && (
                    <Image
                      src={link.icon}
                      alt="프로젝트 링크 아이콘"
                      width={28}
                      height={28}
                    />
                  )}
                </Link>
              ))}
            </div>
          )}
        </section>
      </div>

      {/* 스크린샷 갤러리 */}
      {screenshots && screenshots.length > 0 && (
        <section className="mt-8 space-y-4 md:mt-10 md:space-y-10 lg:mt-12 lg:space-y-16">
          {screenshots.map((screenshot, i) => (
            <figure
              key={`${screenshot.src}-${i}`}
              className="overflow-hidden rounded-lg md:rounded-xl"
            >
              <div className="relative aspect-[16/9] bg-neutral-100">
                <Image
                  src={screenshot.src}
                  alt={screenshot.alt}
                  fill
                  sizes="(min-width:1536px) 1200px, 
                         (min-width:1280px) 1200px,
                         (min-width:1024px) 944px,
                         (min-width:768px) 688px, 100vw"
                  quality={90}
                  className="object-contain"
                />
              </div>
            </figure>
          ))}
        </section>
      )}
      <div>
        {slug !== "jobthoughts" && (
          <p className="text-red-500 text-xs md:text-sm lg:text-base mt-12 mb-2 md:mt-20 lg:mt-28">
            * 본 항목의 내용은 담당한 영역에 한정됩니다.
          </p>
        )}

        <div className="flex flex-col gap-12 md:gap-16 lg:gap-20 xl:gap-24">
          {Array.isArray(performance) && performance.length > 0 && (
            <InsightSections
              heading="Web Performance Optimization"
              sections={performance}
            />
          )}
          {Array.isArray(troubleshooting) && troubleshooting.length > 0 && (
            <InsightSections
              heading="Troubleshooting"
              sections={troubleshooting}
            />
          )}
        </div>
      </div>

      {/* 돌아가기 */}
      <div className="mt-24 md:mt-28 lg:mt-32 xl:mt-36 mx-12 flex justify-center text-neutral-800 dark:invert">
        <Link
          href="/projects"
          className={`${contentStyle} border border-neutral-200 rounded-full hover:bg-neutral-100 px-8 md:px-12 py-2 dark:bg-neutral-200`}
        >
          프로젝트 목록으로
        </Link>
      </div>
    </article>
  );
}
