import Link from "next/link";
import { profile, resume } from "@/lib/content";

export function Nav() {
  return (
    <nav className="flex items-center justify-between text-sm">
      <Link href="/" className="font-medium hover:text-accent">
        Software Engineer
      </Link>
      <div className="flex items-center gap-5 text-muted">
        <a href={`mailto:${profile.email}`} className="hover:text-fg">
          Email
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-fg">
          GitHub
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-fg">
          LinkedIn
        </a>
        <a href={resume.file} className="hover:text-fg">
          Resume
        </a>
      </div>
    </nav>
  );
}
