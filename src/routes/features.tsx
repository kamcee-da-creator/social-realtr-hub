import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Features — Social Realtr" },
      { name: "description", content: "Every tool a realtor needs to run social media on autopilot — content creation, scheduling, analytics, and more." },
      { property: "og:title", content: "Features — Social Realtr" },
      { property: "og:description", content: "One platform that replaces your designer, scheduler, and social media manager." },
    ],
  }),
  component: FeaturesPage,
});

const FEATURES = [
  { title: "Content Creation", bullets: ["Done-for-you graphics by real designers", "On-brand for your headshot, logo & colors", "Weekly batches delivered automatically", "Unlimited revisions"] },
  { title: "Video Scripts", bullets: ["Custom shot lists for every reel", "Talking points written for your voice", "Filming instructions step-by-step", "Hooks engineered to stop the scroll"] },
  { title: "Upload → Done", bullets: ["Upload raw footage in-app", "Pro editors cut & caption it", "Auto-published when approved", "Turnaround in 24-48 hours"] },
  { title: "Captions & Hashtags", bullets: ["Localized to your market", "Optimized per platform", "SEO-aware keyword usage", "Editable before publish"] },
  { title: "Content Pipeline™", bullets: ["Visual kanban board", "To Do → In Progress → Scheduled", "Drag & drop reordering", "Real-time team updates"] },
  { title: "1-Click Approvals", bullets: ["Approve a week in seconds", "Request revisions in one click", "Mobile-friendly review", "Full version history"] },
  { title: "Direct Team Chat", bullets: ["Message your editors in-platform", "Per-post comment threads", "File & screenshot sharing", "Slack-fast response times"] },
  { title: "Smart Notifications", bullets: ["Real-time alerts that matter", "Daily digest option", "Mute non-essentials", "Email + push"] },
  { title: "Content Calendar", bullets: ["Full month-at-a-glance view", "Color-coded by status", "Drag to reschedule", "Filter by channel"] },
  { title: "Scheduler", bullets: ["Auto-post to every channel", "Best-time intelligence", "Publish on-demand too", "Queue management"] },
  { title: "Click Connect™", bullets: ["Link socials in seconds", "No passwords ever shared", "OAuth-secure", "Reconnects automatically"] },
  { title: "Performance Analytics", bullets: ["Engagement & reach trends", "Per-post breakdowns", "Audience growth tracking", "Export to PDF"] },
  { title: "Cloud Storage & Archive", bullets: ["Unlimited storage", "Searchable forever", "Tag & organize assets", "Reuse top performers"] },
  { title: "End of Day Reports", bullets: ["Daily email summary", "What posted, what's next", "No login required", "Forward to your team"] },
  { title: "API Integrations", bullets: ["Facebook & Instagram", "LinkedIn, TikTok, YouTube", "X (Twitter), Google Business", "More added monthly"] },
];

function FeaturesPage() {
  return (
    <div>
      <section className="relative overflow-hidden" style={{ backgroundImage: "var(--gradient-hero)" }}>
        <div className="max-w-5xl mx-auto px-6 pt-20 pb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Everything You Need. Nothing You Don't.</h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            One platform that replaces your designer, scheduler, social media manager, and more.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 space-y-12">
        {FEATURES.map((f, i) => (
          <div key={f.title} className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 ? "md:[direction:rtl]" : ""}`}>
            <div className="md:[direction:ltr]">
              <div className="text-xs uppercase tracking-wider text-primary font-semibold">Feature {String(i + 1).padStart(2, "0")}</div>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">{f.title}</h2>
              <ul className="mt-5 space-y-3">
                {f.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-foreground/90">
                    <span className="text-primary mt-1">✓</span><span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:[direction:ltr] aspect-video rounded-2xl border border-border bg-gradient-to-br from-secondary to-card" style={{ boxShadow: "var(--shadow-card)" }} />
          </div>
        ))}
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <div className="rounded-3xl border border-primary/30 bg-card p-12 md:p-16" style={{ backgroundImage: "var(--gradient-hero)" }}>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Ready to put your social on autopilot?</h2>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/book-a-demo" className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition" style={{ boxShadow: "var(--shadow-glow)" }}>
              Start 14-Day Free Trial
            </Link>
            <Link to="/book-a-demo" className="px-6 py-3 rounded-lg border border-border hover:border-foreground/40 font-semibold transition">
              Book a Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
