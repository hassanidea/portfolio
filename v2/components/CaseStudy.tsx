import Link from "next/link";

type Meta = {
  title: string;
  tagline: string;
  period: string;
  role?: string;
  stack: string[];
  links?: { label: string; href: string }[];
  badge?: string;
};

export function CaseStudyHeader({ meta }: { meta: Meta }) {
  return (
    <header className="mb-12">
      <Link
        href="/"
        className="mb-10 inline-block text-sm text-muted hover:text-accent"
      >
        ← Back
      </Link>
      {meta.badge && (
        <div className="mb-3 inline-block rounded-sm border border-accent/40 bg-accent/10 px-2 py-1 font-mono text-[11px] uppercase tracking-wider text-accent">
          {meta.badge}
        </div>
      )}
      <h1 className="mb-3 text-3xl font-medium tracking-tight sm:text-4xl">
        {meta.title}
      </h1>
      <p className="mb-6 text-lg leading-relaxed text-muted">{meta.tagline}</p>
      <dl className="grid grid-cols-1 gap-3 border-y border-line py-5 font-mono text-xs sm:grid-cols-3">
        <div>
          <dt className="text-muted">Period</dt>
          <dd>{meta.period}</dd>
        </div>
        {meta.role && (
          <div>
            <dt className="text-muted">Role</dt>
            <dd>{meta.role}</dd>
          </div>
        )}
        <div>
          <dt className="text-muted">Stack</dt>
          <dd className="leading-relaxed">{meta.stack.join(" · ")}</dd>
        </div>
      </dl>
      {meta.links && meta.links.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-3">
          {meta.links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-line px-3 py-1.5 text-sm hover:border-accent hover:text-accent"
            >
              {l.label} ↗
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

export function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-12">
      <h2 className="mb-4 text-sm font-medium uppercase tracking-wider text-muted">
        {title}
      </h2>
      <div className="space-y-4 text-[15px] leading-relaxed">{children}</div>
    </section>
  );
}

export function Metric({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="border-l-2 border-accent pl-4">
      <div className="font-mono text-2xl">{value}</div>
      <div className="text-xs text-muted">{label}</div>
    </div>
  );
}
