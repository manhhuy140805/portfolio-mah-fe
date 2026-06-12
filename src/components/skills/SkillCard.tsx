import type { Skill } from "@/src/types/skill.type";

type SkillCardProps = {
  skill: Skill;
};

export default function SkillCard({ skill }: SkillCardProps) {
  return (
    <article className="rounded-lg border border-white/10 bg-[var(--surface)] p-5 shadow-[0_18px_60px_rgba(0,0,0,0.2)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
          <p className="mt-2 text-sm text-zinc-500">{skill.category}</p>
        </div>
        {skill.level ? (
          <span className="rounded-md bg-white/5 px-2 py-1 text-xs font-medium text-[var(--accent-warm)]">
            {skill.level}
          </span>
        ) : null}
      </div>
      {skill.level ? (
        <div className="mt-5">
          <div className="h-2 rounded-md bg-white/10">
            <div
              className="h-2 rounded-md bg-[var(--accent)]"
              style={{ width: `${skill.value ?? 70}%` }}
            />
          </div>
          <p className="mt-2 text-xs text-zinc-500">{skill.value ?? 70}%</p>
        </div>
      ) : null}
    </article>
  );
}
