import { ArrowUpRight } from "lucide-react";
import type { FlutterRelease } from "@/lib/releases";
import Link from "next/link";

type ReleaseCardProps = {
  release: FlutterRelease;
};

export function ReleaseCard({ release }: ReleaseCardProps) {
  return (
    <article className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-slate-900/60 p-8 shadow-xl shadow-black/20 backdrop-blur">
      <header className="flex items-center justify-between gap-4">
        <div>
          <span className="text-sm uppercase tracking-[0.3em] text-slate-400">
            {release.releaseDate}
          </span>
          <h3 className="mt-2 text-2xl font-semibold text-white">
            Flutter {release.version}
          </h3>
          {release.codename && (
            <p className="mt-1 text-sm text-slate-400">{release.codename}</p>
          )}
        </div>
        <span className="rounded-full border border-flutterTeal/30 bg-flutterTeal/20 px-4 py-1 text-sm font-medium text-flutterTeal">
          Stable
        </span>
      </header>
      <ul className="flex flex-col gap-3 text-base leading-relaxed text-slate-200">
        {release.highlights.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-2 w-2 flex-none rounded-full bg-flutterTeal/80" />
            <p>{item}</p>
          </li>
        ))}
      </ul>
      <footer className="flex flex-wrap gap-3">
        {release.resources.map((resource) => (
          <Link
            key={resource.url}
            href={resource.url}
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-flutterTeal/50 hover:text-flutterTeal"
          >
            {resource.label}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        ))}
      </footer>
    </article>
  );
}
