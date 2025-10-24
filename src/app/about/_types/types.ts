export type TimelineRow = { text: string; sub?: string; period?: string };
export type AccordionData = { label: string; rows: TimelineRow[] };
export type SkillBadgeProps = {
  label: string;
  icon?: string;
  className?: string;
};
