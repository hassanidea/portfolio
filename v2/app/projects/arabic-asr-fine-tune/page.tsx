import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CaseStudyHeader, Section, Metric } from "@/components/CaseStudy";

export const metadata: Metadata = {
  title: "Arabic ASR Fine-Tune",
  description:
    "Fine-tuned Whisper Large-v3 with LoRA on 14 Arabic dialects. WER 30.6% → 17.8% (41.8% relative reduction).",
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
            title: "Arabic ASR Fine-Tune",
            tagline:
              "Fine-tuned Whisper Large-v3 with LoRA across 14 Arabic dialects, then optimized for sub-400 ms inference.",
            period: "2025 · Arcain",
            role: "AI / Voice Engineer",
            stack: [
              "PyTorch",
              "Hugging Face Transformers",
              "PEFT / LoRA",
              "CTranslate2",
              "Faster-Whisper",
              "AWS EC2 GPU",
            ],
          }}
        />

        <Section title="Outcome">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
            <Metric value="17.8%" label="WER (from 30.6%)" />
            <Metric value="41.8%" label="Relative reduction" />
            <Metric value="345 ms" label="p50 ASR latency" />
          </div>
        </Section>

        <Section title="Context">
          <p>
            Arabic is one of the most underserved languages in production ASR. Off-the-shelf
            Whisper Large-v3 ran at <strong>30.6% WER</strong> on dialectal Arabic — usable
            for transcription, unusable for a real-time voice agent that needs to act on what
            it hears. The goal was to bring quality to production grade across 14 dialects
            without giving up inference latency.
          </p>
        </Section>

        <Section title="Approach">
          <p>
            Fine-tuned Whisper Large-v3 with LoRA adapters (<span className="font-mono">rank 32, alpha 64</span>)
            on a curated corpus of <strong>53,267 training samples</strong> and 5,913 evaluation samples
            spanning Gulf, Levantine, Egyptian, and Maghrebi dialects.
          </p>
          <p>
            After training, converted the merged model to <span className="font-mono">CTranslate2</span> and
            served it through <span className="font-mono">Faster-Whisper</span>. That conversion was the
            difference between a research artifact and a production speech engine — it cut p50 ASR
            latency to <strong>345 ms</strong> on AWS GPU and kept memory headroom for concurrent
            sessions.
          </p>
        </Section>

        <Section title="The bug that almost killed it">
          <p>
            During inference the model would loop — repeating a token forever until the
            decoder hit its max length. After tracing it back through the data collator I
            found a <strong>BOS-token double-prepend bug</strong>: the collator was inserting
            the beginning-of-sequence token a second time on top of what the tokenizer had
            already added. The model learned to output it during training, then at inference
            time the decoder saw it and never stopped.
          </p>
          <p>
            One-line fix in the collator. The lesson — that bug only surfaces when you
            actually run end-to-end inference under load — went into the team&apos;s internal
            postmortem.
          </p>
        </Section>

        <Section title="What I&apos;d do differently">
          <p>
            Add inference-time generation tests to the training loop, not just loss + WER on
            held-out audio. Loss can look healthy while the decoder is silently broken.
          </p>
        </Section>
      </main>
      <Footer />
    </Container>
  );
}
