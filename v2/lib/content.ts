export const profile = {
  name: "Hassan Nasr Hassan",
  pitch:
    "I build production AI and data systems. Currently shipping real-time Arabic voice AI at Arcain. Previously 4+ years of data engineering across Canadian federal agencies.",
  location: "Remote · Open to relocation",
  email: "hassannasr.hsn@gmail.com",
  github: "https://github.com/hassanidea",
  linkedin: "https://linkedin.com/in/hassann-hassan",
  domain: "hassannasr.com",
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  period: string;
  stack: string[];
  badge?: string;
  href: string;
};

export const featuredProjects: Project[] = [
  {
    slug: "arcain-voice-engine",
    title: "Arcain Voice Engine",
    tagline:
      "Dual-mode FastAPI voice service powering real-time Arabic conversational AI on AWS GPU.",
    period: "Dec 2025 — Present",
    stack: ["FastAPI", "WebSockets", "Silero VAD", "OpenTelemetry", "AWS EC2 GPU"],
    href: "/projects/arcain-voice-engine",
  },
  {
    slug: "arabic-asr-fine-tune",
    title: "Arabic ASR Fine-Tune",
    tagline:
      "Fine-tuned Whisper Large-v3 with LoRA on 14 Arabic dialects. WER 30.6% → 17.8% (41.8% relative). p50 latency 345 ms.",
    period: "2025",
    stack: ["PyTorch", "Hugging Face", "PEFT / LoRA", "CTranslate2", "Faster-Whisper"],
    href: "/projects/arabic-asr-fine-tune",
  },
  {
    slug: "focusfriend",
    title: "FocusFriend",
    tagline:
      "Cross-platform desktop agent that tracks digital activity and delivers AI focus insights using computer vision.",
    period: "2025",
    stack: ["Electron", "React", "Python", "Computer Vision"],
    badge: "1st Place — Vibe Code-a-thon",
    href: "/projects/focusfriend",
  },
];

export type Role = {
  company: string;
  title: string;
  period: string;
  href: string;
  bullets: string[];
};

export const experience: Role[] = [
  {
    company: "Arcain",
    title: "AI / Voice Engineer",
    period: "Dec 2025 — Present",
    href: "https://arcainco.ai",
    bullets: [
      "Fine-tuned Whisper Large-v3 with LoRA on 53k Arabic samples across 14 dialects. Cut WER 30.6 → 17.8% (41.8% relative) and p50 ASR latency to 345 ms.",
      "Shipped a dual-mode FastAPI voice service with streaming ASR / TTS over WebSockets, Silero VAD v5 barge-in, and OpenTelemetry on AWS GPU.",
      "Built an Emirati Arabic TTS fine-tune on the F5-TTS architecture with a zero-downtime env-var rollback pattern.",
    ],
  },
  {
    company: "Innovation, Science and Economic Development Canada",
    title: "Data Engineer",
    period: "Aug 2024 — Present",
    href: "https://ised-isde.canada.ca/",
    bullets: [
      "Built incremental and full-load ETL pipelines (Python, SQL, AWS Lambda + EventBridge, EC2) moving data across RDS, PostgreSQL, and Oracle.",
      "Implemented validation logic and stored procedures supporting 10+ analysts on 4M+ record datasets. Cut validation effort 50%.",
    ],
  },
  {
    company: "Transport Canada",
    title: "Data Engineer",
    period: "Feb 2023 — May 2024",
    href: "https://tc.canada.ca/en",
    bullets: [
      "Built automated Oracle-to-Databricks pipelines with PySpark, curating data across 945 projects for 20+ program managers.",
    ],
  },
  {
    company: "Fisheries and Oceans Canada",
    title: "Data Analyst",
    period: "May 2022 — Feb 2023",
    href: "https://www.dfo-mpo.gc.ca/index-eng.html",
    bullets: [
      "Automated cleaning and matching of ~2,000 raw survey responses and built visualizations surfacing trends across Atlantic and Pacific fisheries quota data.",
    ],
  },
  {
    company: "Defence Research and Development Canada",
    title: "Data Scientist Intern",
    period: "Jun 2021 — Dec 2021",
    href: "https://www.canada.ca/en/defence-research-development.html",
    bullets: [
      "Built an OCR pipeline recognizing typed, handwritten, and printed Arabic text, adapting prior OCR research to a multi-format task.",
    ],
  },
  {
    company: "Statistics Canada",
    title: "Software Engineer Intern",
    period: "Jan 2020 — Aug 2020",
    href: "https://www.statcan.gc.ca/",
    bullets: [
      "Built a user management module for the Census 2021 application in C# / ASP.NET / Azure handling names, roles, and groups.",
    ],
  },
];

export const resume = { label: "Resume", file: "/Resume.pdf" };
