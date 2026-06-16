type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  tone?: "dark" | "light";
};

export default function SectionTitle({
  description,
  eyebrow,
  tone = "dark",
  title,
}: SectionTitleProps) {
  const isLight = tone === "light";

  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p
          className={[
            "text-sm font-semibold uppercase",
            isLight ? "text-[var(--accent)]" : "text-[var(--accent)]",
          ].join(" ")}
        >
          {eyebrow}
        </p>
      ) : null}
      <div className="mt-2 flex items-center gap-4">
        <h2
          className={[
            "text-3xl font-semibold",
            isLight ? "text-zinc-950" : "text-zinc-900 dark:text-white",
          ].join(" ")}
        >
          {title}
        </h2>
        <span className="hidden h-px w-16 bg-[var(--accent-warm)] sm:block" />
      </div>
      {description ? (
        <p
          className={[
            "mt-4 leading-7",
            isLight ? "text-zinc-600" : "text-zinc-600 dark:text-zinc-400",
          ].join(" ")}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
