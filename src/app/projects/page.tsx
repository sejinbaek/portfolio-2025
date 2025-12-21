import SectionHeader from "../../components/SectionHeader";
import ProjectList from "./components/ProjectList";
import { projects } from "./_data/projects";
import { pageMetadata } from "../../lib/seo";
import RouteMargin from "../../components/RouteMargin";

export const generateMetadata = () =>
  pageMetadata({
    title: "Projects",
    description: "진행한 프로젝트 모음",
    path: "/projects",
    type: "website",
  });

export default function ProjectPage() {
  return (
    <RouteMargin>
      <section className="flex flex-col gap-10 md:gap-14 lg:gap-16 mx-auto w-full">
        <SectionHeader
          title="PROJECTS"
          subtitle={
            <>
              지금까지 진행한 프로젝트로, <br className="block md:hidden" />
              기능 구현에서 UX와 인터랙션까지 성장해 <br />온 과정을 담았습니다.
            </>
          }
        />
        <ProjectList items={Object.values(projects)} />
      </section>
    </RouteMargin>
  );
}
