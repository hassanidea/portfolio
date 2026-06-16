import { profile, resume } from "@/lib/content";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-line pt-10 text-sm text-muted">
      <div className="mb-8">
        <a
          href={resume.file}
          className="inline-block rounded-md border border-line px-4 py-2 text-fg hover:border-accent hover:text-accent"
        >
          Download resume ↓
        </a>
      </div>
      <div className="flex flex-col gap-2 pb-10 sm:flex-row sm:items-center sm:justify-between">
        <div>{profile.location}</div>
        <div className="flex gap-4">
          <a href={`mailto:${profile.email}`} className="hover:text-fg">
            {profile.email}
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-fg">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-fg">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
