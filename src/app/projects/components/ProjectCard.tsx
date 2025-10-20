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
    <article className="">
      <Link
        href={`/projects/${slug}`}
        aria-label={`${title} 상세 보기`}
        className="block"
      >
        <div className="relative aspect-3/2 overflow-hidden rounded-xl">
          <Image
            src={cover.src}
            alt={cover.alt || title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-110
          will-change-transform"
            sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
            priority={priority} // 첫 카드만 true
          />
        </div>
      </Link>

      <div className="pt-4 xl:pt-10 text-neutral-800">
        <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold">
          {title}
        </h3>
        {subtitle && (
          <p className="py-2 lg:pt-4 font-medium text-sm min-[360px]:text-base md:text-lg lg:text-xl">
            {subtitle}
          </p>
        )}
        {description && (
          <p className="text-sm min-[360px]:text-base md:text-lg xl:text-xl xl:leading-8">
            {description}
          </p>
        )}
      </div>
    </article>
  );
}
