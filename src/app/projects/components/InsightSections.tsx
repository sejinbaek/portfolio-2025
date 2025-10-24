import React from "react";
import type { InsightSectionData, Paragraph, Inline } from "../_data/projects";

const InlineNode = (n: Inline) => {
  if (typeof n === "string") return <>{n}</>;
  if (n.mark === "red")
    return <span className="text-red-600 font-medium">{n.text}</span>;
  if (n.mark === "blue")
    return <span className="text-blue-500 font-medium">{n.text}</span>;
  return null;
};

const ParagraphView = ({ p }: { p: Paragraph }) =>
  typeof p === "string" ? (
    <p className="text-base md:text-lg whitespace-pre-line">{p}</p>
  ) : (
    <p className="text-base md:text-lg whitespace-pre-line">
      {p.children.map((c, i) => (
        <span key={i}>{InlineNode(c)}</span>
      ))}
    </p>
  );

function InsightSection({ data }: { data: InsightSectionData }) {
  return (
    <div className="relative pl-5">
      <span className="absolute left-0 top-[-1px] text-neutral-800 text-base md:text-lg dark:invert">
        •
      </span>
      <h3 className="font-semibold text-neutral-800 text-base md:text-lg lg:text-xl dark:invert">
        {data.title}
      </h3>
      <div className="mt-2 space-y-4">
        {data.content.map((p, i) => (
          <ParagraphView key={i} p={p} />
        ))}
      </div>
    </div>
  );
}

export default function InsightSections({
  heading,
  sections,
}: {
  heading: string;
  sections: InsightSectionData[];
}) {
  if (!sections?.length) return null;
  return (
    <section>
      <h2 className="font-semibold text-neutral-800 text-xl md:text-3xl mb-4 dark:invert">
        {heading}
      </h2>
      <div className="space-y-8 xl:space-y-12">
        {sections.map((s, i) => (
          <InsightSection key={i} data={s} />
        ))}
      </div>
    </section>
  );
}
