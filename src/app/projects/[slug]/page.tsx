import Image from "next/image";
import Link from "next/link";
import { projects } from "../data/project";
import type { Project } from "../data/project";
import { Metadata } from "next";

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
  const { slug } = await params; // <-- 반드시 await
  const p = getProject(slug);
  if (!p) return { title: "Project" };
  return {
    title: `${p.title} – Projects`,
    description: p.description,
    openGraph: {
      title: p.title,
      description: p.description,
      images: [p.cover.src],
    },
  };
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
    description,
    period,
    team,
    role,
    stack,
    links,
    about,
    features,
    implementation,
    screenshots,
  } = p;

  const subTitleStyle = "font-medium text-neutral-400 text-base";
  const contentStyle = "text-base";

  return (
    <article className="mx-auto md:py-10">
      {/* 헤더 */}
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-neutral-900 md:text-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-1 text-base text-neutral-600">{subtitle}</p>
        )}
      </header>

      {/* 메타 + 소개 레이아웃 */}
      <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* 소개(왼쪽, 데스크탑에서 1번째) */}
        <section className="space-y-4 order-2 md:order-1 prose prose-neutral dark:prose-invert">
          {description && (
            <div className="flex flex-col gap-2">
              <h2 className={subTitleStyle}>About the Service</h2>
              <p className={contentStyle}>{description}</p>
            </div>
          )}
          {about && <p className="whitespace-pre-wrap">{about}</p>}
          {features && features.length > 0 && (
            <>
              <ul className="list-disc pl-5 space-y-1 marker:text-neutral-400">
                {features.map((feature) => (
                  <li key={feature} className="">
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
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </div>
          )}
        </section>

        {/* 메타(오른쪽, 데스크탑에서 2번째) */}
        <section className="order-1 md:order-2 flex flex-col gap-2 mb-6 text-neutral-700 md:sticky md:top-20 lg:pl-40">
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
          {stack && stack.length > 0 && (
            <div>
              <h4 className={subTitleStyle}>Stack</h4>
              <p className={contentStyle}>{stack.join(" · ")}</p>
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
        <section className="mt-8 space-y-4">
          {screenshots.map((screenshot, i) => (
            <figure
              key={`${screenshot.src}-${i}`}
              className="overflow-hidden rounded-xl"
            >
              <div className="relative aspect-[16/9] bg-neutral-100">
                <Image
                  src={screenshot.src}
                  alt={screenshot.alt}
                  fill
                  sizes="(min-width:1024px) 960px, 100vw"
                  className="object-cover"
                />
              </div>
            </figure>
          ))}
        </section>
      )}

      {/* 돌아가기 */}
      <div className="mt-10 mx-12 flex justify-center text-neutral-800 hover:underline">
        <Link href="/projects" className="">
          프로젝트 목록으로
        </Link>
      </div>
    </article>
  );
}
