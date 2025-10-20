import ProjectCard from "./ProjectCard";
import type { Project } from "../data/project";

export default function ProjectList({ items }: { items: Project[] }) {
  return (
    <section className="grid gap-12 mx-2 md:grid-cols-2 md:gap-8 lg:gap-14">
      {items.map((p, i) => (
        <ProjectCard key={p.slug} project={p} priority={i === 0} />
      ))}
    </section>
  );
}
