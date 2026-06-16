import Link from "next/link";
import { Container } from "@/components/Container";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { profile, featuredProjects, experience } from "@/lib/content";

export default function Home() {
  return (
    <Container>
      <header className="pt-10">
        <Nav />
      </header>

      <main className="pt-20">
        <section className="mb-20">
          <h1 className="mb-5 text-3xl font-medium tracking-tight sm:text-4xl">
            {profile.name}
          </h1>
          <p className="text-lg leading-relaxed text-muted">{profile.pitch}</p>
        </section>

        <section className="mb-20">
          <h2 className="mb-6 text-sm font-medium uppercase tracking-wider text-muted">
            Featured Work
          </h2>
          <ul className="divide-y divide-line border-y border-line">
            {featuredProjects.map((p) => (
              <li key={p.slug}>
                <Link
                  href={p.href}
                  className="group flex flex-col gap-2 py-5 hover:text-fg"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <div className="flex items-baseline gap-3">
                      <span className="text-base font-medium text-fg group-hover:text-accent">
                        {p.title}
                      </span>
                      {p.badge && (
                        <span className="rounded-sm border border-accent/40 bg-accent/10 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent">
                          {p.badge}
                        </span>
                      )}
                    </div>
                    <span className="shrink-0 font-mono text-xs text-muted">
                      {p.period}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-muted">{p.tagline}</p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="font-mono text-[11px] text-muted"
                      >
                        {s}
                      </span>
                    )).reduce<React.ReactNode[]>((acc, el, i) => {
                      if (i > 0) acc.push(<span key={`d${i}`} className="text-muted/40">·</span>);
                      acc.push(el);
                      return acc;
                    }, [])}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-20">
          <h2 className="mb-6 text-sm font-medium uppercase tracking-wider text-muted">
            Experience
          </h2>
          <ol className="space-y-8">
            {experience.map((r) => (
              <li key={r.company + r.period}>
                <div className="mb-2 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-base font-medium">
                    {r.title}{" "}
                    <span className="text-muted">·</span>{" "}
                    <a
                      href={r.href}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-accent"
                    >
                      {r.company}
                    </a>
                  </h3>
                  <span className="font-mono text-xs text-muted">{r.period}</span>
                </div>
                <ul className="space-y-1.5 text-sm leading-relaxed text-muted">
                  {r.bullets.map((b, i) => (
                    <li key={i} className="pl-4 -indent-4 before:mr-2 before:content-['—']">
                      {b}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-20">
          <h2 className="mb-6 text-sm font-medium uppercase tracking-wider text-muted">
            Education
          </h2>
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="text-base font-medium">
              B.Eng., Software Engineering{" "}
              <span className="text-muted">·</span>{" "}
              <a
                href="https://carleton.ca/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent"
              >
                Carleton University
              </a>
            </h3>
            <span className="font-mono text-xs text-muted">Sept 2017 — Jun 2022</span>
          </div>
        </section>
      </main>

      <Footer />
    </Container>
  );
}
