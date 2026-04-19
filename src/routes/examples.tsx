import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/examples")({
  head: () => ({
    meta: [
      { title: "Our Work — Social Realtr" },
      { name: "description", content: "Browse hundreds of posts and videos created for top-producing realtors across North America." },
      { property: "og:title", content: "Our Work — Social Realtr" },
      { property: "og:description", content: "Real work for real realtors." },
    ],
  }),
  component: ExamplesPage,
});

const TABS = ["All", "Educational", "Local Spotlight", "New Listing", "Market Updates", "Motivation", "Sold Listing", "Open House", "Testimonials", "Fun Facts", "Others"];

const TRANSFORMATIONS = [
  { name: "Afshin Afshar", before: ["Sporadic posting", "Inconsistent branding", "Low engagement", "No video presence"], after: ["Daily on-brand posts", "Cohesive feed aesthetic", "5x engagement growth", "Weekly reels"] },
  { name: "Yaakov Tannenbaum", before: ["No content strategy", "DIY graphics", "0 reels per month", "Gray dashboard"], after: ["Strategy mapped quarterly", "Pro-designed posts", "8 reels per month", "Live analytics"] },
  { name: "Paul Swanson", before: ["Outdated templates", "No captions", "Manual scheduling", "Wasted hours"], after: ["Fresh creative weekly", "SEO-rich captions", "Auto-scheduled queue", "10+ hours saved"] },
  { name: "Coach David Burchell", before: ["Mixed brand voice", "Stale stories", "Low CTA clarity", "No tracking"], after: ["Unified voice", "Daily story content", "Clear conversions", "Weekly reports"] },
  { name: "Kirby Eady", before: ["Posting once a week", "No video edits", "Low follower growth", "Frustration"], after: ["Daily posts", "Pro video edits", "+220% follower growth", "Peace of mind"] },
];

function ExamplesPage() {
  const [tab, setTab] = useState("All");
  const [count, setCount] = useState(12);

  return (
    <div>
      <section className="relative overflow-hidden" style={{ backgroundImage: "var(--gradient-hero)" }}>
        <div className="max-w-4xl mx-auto px-6 pt-20 pb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Real Work. Real Realtors.</h1>
          <p className="mt-6 text-lg text-muted-foreground">Browse hundreds of posts and videos we've created for agents across North America.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-wrap justify-center gap-2">
          {TABS.map((t) => (
            <button key={t} onClick={() => setTab(t)} className={`px-4 py-2 rounded-full text-sm border transition ${tab === t ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/40"}`}>{t}</button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: count }).map((_, i) => (
            <div key={i} className="aspect-[4/5] rounded-xl border border-border bg-gradient-to-br from-secondary to-card relative overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition" />
              <div className="absolute bottom-3 left-3 right-3">
                <div className="text-xs text-primary font-medium">{tab === "All" ? TABS[(i % (TABS.length - 1)) + 1] : tab}</div>
                <div className="text-sm font-semibold">Post #{i + 1}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button onClick={() => setCount((c) => c + 8)} className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition" style={{ boxShadow: "var(--shadow-glow)" }}>Load More</button>
        </div>
      </section>

      <section className="bg-card/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center">Before & After</h2>
          <p className="mt-3 text-center text-muted-foreground">Real transformations from real clients.</p>
          <div className="mt-12 space-y-6">
            {TRANSFORMATIONS.map((t) => (
              <div key={t.name} className="rounded-2xl border border-border bg-card p-6 md:p-8">
                <h3 className="text-xl font-bold">{t.name}</h3>
                <div className="mt-6 grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="aspect-video rounded-xl bg-secondary/60 border border-border flex items-center justify-center text-muted-foreground text-sm">Before</div>
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                      {t.before.map((b) => <li key={b} className="flex gap-2"><span>✗</span>{b}</li>)}
                    </ul>
                  </div>
                  <div>
                    <div className="aspect-video rounded-xl bg-gradient-to-br from-primary/20 to-card border border-primary/30 flex items-center justify-center text-primary text-sm font-semibold">After</div>
                    <ul className="mt-4 space-y-2 text-sm">
                      {t.after.map((b) => <li key={b} className="flex gap-2"><span className="text-primary">✓</span>{b}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
