import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CaseStudyHeader, Section, Metric } from "@/components/CaseStudy";

export const metadata: Metadata = {
  title: "FocusFriend — 1st Place, Vibe Code-a-thon",
  description:
    "Cross-platform desktop agent that tracks digital activity and delivers AI focus insights using computer vision. Won 1st place 'Most Useful Agent' at the Vibe Code-a-thon by AGI Ventures.",
};

export default function Page() {
  return (
    <Container>
      <header className="pt-10">
        <Nav />
      </header>
      <main className="pt-16">
        <CaseStudyHeader
          meta={{
            title: "FocusFriend",
            tagline:
              "A cross-platform desktop agent that watches what you&apos;re actually doing — and tells you, with receipts, when you&apos;ve drifted.",
            period: "2025",
            role: "Builder",
            stack: ["Electron", "React", "Python", "Computer Vision", "LangChain"],
            badge: "1st Place · Most Useful Agent",
            links: [
              { label: "Devpost", href: "https://devpost.com/software/focusfriend" },
            ],
          }}
        />

        <div className="mb-12 overflow-hidden rounded-lg border border-line">
          <Image
            src="/hackathon.jpg"
            alt="FocusFriend team winning 1st place at the Vibe Code-a-thon"
            width={1600}
            height={1067}
            priority
            className="h-auto w-full"
          />
        </div>

        <Section title="The win">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
            <Metric value="1st" label="Most Useful Agent" />
            <Metric value="112" label="Participants" />
            <Metric value="$1,000" label="LangChain credits" />
          </div>
          <p>
            <strong>Vibe Code-a-thon</strong> by AGI Ventures, 2025. Out of 112 participants,
            FocusFriend took 1st place in the Most Useful Agent category, with $1,000 in
            LangChain credits as prize.
          </p>
        </Section>

        <Section title="What we built">
          <p>
            A desktop agent that runs in the background, periodically takes a screenshot,
            and uses computer vision to classify what you&apos;re doing across applications.
            It builds a timeline of your focus and surfaces it as AI-generated insights —
            e.g. <em>&quot;you spent 47 minutes in Figma but context-switched to Slack 14
            times.&quot;</em>
          </p>
          <p>
            The pitch: every other &quot;productivity&quot; tool relies on you logging your
            time. FocusFriend just watches and tells you the truth.
          </p>
        </Section>

        <Section title="Why it won">
          <p>
            Judges flagged three things: (1) it solved a real problem the panel themselves
            had, (2) the technical execution was end-to-end — desktop binary, CV pipeline,
            agent loop, polished UI — not a half-finished prototype, and (3) the privacy
            model was thought through (everything local, opt-in classification).
          </p>
        </Section>

        <Section title="What I built">
          <p>
            I led the Electron + React desktop shell, the screenshot capture pipeline,
            and the integration with the Python CV / agent backend. The hackathon timebox
            was real — every architectural decision was &quot;what can we still ship by
            demo time.&quot;
          </p>
        </Section>
      </main>
      <Footer />
    </Container>
  );
}
