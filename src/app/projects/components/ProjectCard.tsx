import Image from "next/image";
import Link from "next/link";
import { Project } from "../data/project";

export default function ProjectCard({
  project,
  priority = false,
}: {
  project: Project;
  priority?: boolean;
}) {
  const { slug, cover, title, subtitle, description } = project;
  return (
    <article>
      <Link
        href={`/projects/${slug}`}
        aria-label={`${title} 상세 보기`}
        className="block"
      >
        <div className="relative aspect-3/2 overflow-hidden rounded-2xl group shadow-sm transition-shadow duration-500 ease-[cubic-bezier(.5,.8,.2,1)] hover:shadow-xl">
          <Image
            src={cover.src}
            alt={cover.alt || title}
            fill
            className="object-cover transform-gpu will-change-transform transition-transform duration-500 ease-[cubic-bezier(.5,.8,.2,1)] hover:scale-105"
            sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
            priority={priority} // 첫 카드만 true
          />
        </div>
      </Link>

      <div className="pt-4 xl:pt-10 text-neutral-800 dark:text-white">
        <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold">
          {title}
        </h3>
        {subtitle && (
          <p className="py-2 lg:pt-4 font-semibold text-sm min-[360px]:text-base md:text-lg lg:text-xl text-neutral-600">
            {subtitle}
          </p>
        )}
        {description && (
          <p className="text-sm min-[360px]:text-base md:text-lg xl:text-xl xl:leading-8 text-neutral-500">
            {description}
          </p>
        )}
      </div>
    </article>
  );
}
