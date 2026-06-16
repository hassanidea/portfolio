import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CaseStudyHeader, Section, Metric } from "@/components/CaseStudy";

export const metadata: Metadata = {
  title: "Arcain Voice Engine",
  description:
    "Dual-mode FastAPI voice service powering real-time Arabic conversational AI on AWS GPU.",
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
            title: "Arcain Voice Engine",
            tagline:
              "A dual-mode FastAPI service exposing streaming ASR / TTS WebSocket endpoints, with barge-in detection and end-to-end telemetry, deployed on AWS GPU.",
            period: "Dec 2025 — Present",
            role: "AI / Voice Engineer",
            stack: [
              "FastAPI",
              "WebSockets",
              "Silero VAD v5",
              "F5-TTS",
              "OpenTelemetry",
              "AWS EC2 GPU",
              "Docker",
            ],
          }}
        />

        <Section title="Outcome">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
            <Metric value="345 ms" label="p50 ASR latency" />
            <Metric value="32 ms" label="VAD chunk size" />
            <Metric value="60 ms" label="Barge-in trigger" />
          </div>
        </Section>

        <Section title="Context">
          <p>
            Arcain builds Arabic conversational AI. A real-time voice agent has a brutal
            latency budget: every link in the chain — VAD, ASR, LLM, TTS, audio framing —
            adds tens to hundreds of milliseconds, and the user feels every one of them.
            The engine had to support two deployment modes from day one: a full pipeline
            for phone-call traffic, and a platform-only mode that exposes streaming ASR
            and TTS for external integrations.
          </p>
        </Section>

        <Section title="Architecture">
          <ul className="list-inside list-disc space-y-2 marker:text-muted">
            <li>
              <strong>Dual-mode FastAPI service</strong> — one binary, one config flag
              switches between full-pipeline (telephony → inference → audio) and
              platform-only (WebSocket ASR / TTS endpoints).
            </li>
            <li>
              <strong>Silero VAD v5</strong> with 32 ms chunks and per-session state
              for accurate speech onset / offset detection.
            </li>
            <li>
              <strong>Energy-threshold barge-in</strong> on top of VAD: RMS gating with a
              60 ms trigger eliminates false interrupts while still cutting the agent off
              fast enough to feel natural.
            </li>
            <li>
              <strong>OpenTelemetry OTLP pipeline</strong> from edge to GPU — every audio
              frame and inference span is observable in production.
            </li>
            <li>
              <strong>Environment-variable model overrides</strong> — zero-downtime
              rollback between checkpoints by flipping a single env var.
            </li>
          </ul>
        </Section>

        <Section title="What broke (and what I learned)">
          <p>
            Latency under sustained load was the hardest problem. Three root causes,
            none of them obvious:
          </p>
          <ul className="list-inside list-disc space-y-2 marker:text-muted">
            <li>
              WebSocket session lifecycle bugs leaking sockets on abnormal disconnect.
            </li>
            <li>
              Audio framing mismatches between the client&apos;s 16 kHz PCM and the
              decoder&apos;s expected window — silently degraded WER and added a
              tail-latency spike.
            </li>
            <li>
              GPU memory leaks under sustained streaming. Fixed by tightening tensor
              lifetimes around the inference span and explicit cache eviction.
            </li>
          </ul>
          <p>
            Separately, tuning VAD thresholds eliminated barge-in false triggers that
            were cutting off the agent mid-syllable on noisy phone audio.
          </p>
        </Section>

        <Section title="Shipping discipline">
          <p>
            Every release ran a smoke + integration test suite before AWS staging. The
            first F5-TTS dialect fine-tune passed on first deploy — because the rollback
            pattern meant we were never one bad checkpoint away from an outage.
          </p>
        </Section>
      </main>
      <Footer />
    </Container>
  );
}
