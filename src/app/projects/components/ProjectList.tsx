import ProjectCard from "./ProjectCard";
import { Project } from "../_types/types";

export default function ProjectList({ items }: { items: Project[] }) {
  return (
    <section className="grid gap-12 mx-2 md:grid-cols-2 md:gap-8 lg:gap-14 xl:gap-20">
      {items.map((p) => (
        <ProjectCard key={p.slug} project={p} />
      ))}
    </section>
  );
}
