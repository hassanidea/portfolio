import Link from "next/link";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <Container>
      <div className="flex min-h-dvh flex-col items-start justify-center py-20">
        <p className="mb-2 font-mono text-sm text-muted">404</p>
        <h1 className="mb-4 text-3xl font-medium tracking-tight">
          Wrong turn.
        </h1>
        <p className="mb-8 text-muted">
          The page you&apos;re looking for doesn&apos;t exist — or never did.
        </p>
        <Link href="/" className="text-sm hover:text-accent">
          ← Back home
        </Link>
      </div>
    </Container>
  );
}
