import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — Social Realtr" },
      { name: "description", content: "1,000+ realtors trust Social Realtr to keep them consistent, on-brand, and top-of-mind." },
      { property: "og:title", content: "Reviews — Social Realtr" },
      { property: "og:description", content: "Don't take our word for it — see what realtors are saying." },
    ],
  }),
  component: ReviewsPage,
});

const REVIEWS = [
  { name: "Dave B.", role: "Tom Ferry Coach", quote: "The consistency makes it shine compared to anything else we've seen on the market." },
  { name: "Melissa C.", role: "Dallas Realtor | Team Leader", quote: "Working with Social Realtr has been an absolute game-changer! They make everything so easy." },
  { name: "Don J.", role: "Tom Ferry Coach", quote: "The team is amazing and the best in the game. Their communication is on point." },
  { name: "Sarah M.", role: "Phoenix Realtor", quote: "I've gotten 10 hours back every week. My feed has never looked better." },
  { name: "James W.", role: "Toronto Broker", quote: "Quality is unmatched. My listings get noticed within hours of posting." },
  { name: "Priya R.", role: "Vancouver Agent", quote: "The video edits are stunning. Clients constantly compliment my content." },
  { name: "Marcus T.", role: "Miami Team Lead", quote: "Finally, a service that actually delivers. Worth every penny." },
  { name: "Olivia K.", role: "Austin Realtor", quote: "Consistent, on-brand, and always on time. Couldn't run my business without it." },
  { name: "Nathan H.", role: "Denver Broker", quote: "From posting once a month to daily — Social Realtr changed everything for my brand." },
];

function Stars() {
  return (
    <div className="flex gap-1 text-primary">
      {Array.from({ length: 5 }).map((_, i) => <span key={i}>★</span>)}
    </div>
  );
}

function ReviewsPage() {
  return (
    <div>
      <section className="relative overflow-hidden" style={{ backgroundImage: "var(--gradient-hero)" }}>
        <div className="max-w-4xl mx-auto px-6 pt-20 pb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Don't Take Our Word For It.</h1>
          <p className="mt-6 text-lg text-muted-foreground">1,000+ realtors trust Social Realtr to keep them consistent, on-brand, and top-of-mind.</p>
          <div className="mt-10 inline-flex items-center gap-6 rounded-2xl border border-border bg-card px-8 py-5">
            <div className="text-left">
              <div className="text-5xl font-bold text-primary">4.9</div>
              <Stars />
            </div>
            <div className="h-12 w-px bg-border" />
            <div className="text-left">
              <div className="text-sm font-semibold">Trustpilot</div>
              <div className="text-xs text-muted-foreground">Based on 1,247 reviews</div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {REVIEWS.map((r) => (
            <div key={r.name} className="rounded-2xl border border-border bg-card p-6 hover:border-primary/40 transition">
              <Stars />
              <p className="mt-4 text-foreground/90 leading-relaxed">"{r.quote}"</p>
              <div className="mt-6 pt-6 border-t border-border flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-secondary border border-border" />
                <div>
                  <div className="font-semibold text-sm">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <div className="rounded-3xl border border-primary/30 bg-card p-12" style={{ backgroundImage: "var(--gradient-hero)" }}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Love Social Realtr? Leave us a review.</h2>
          <p className="mt-4 text-muted-foreground">Share your experience on Trustpilot — it helps other realtors discover us.</p>
          <a href="#" className="inline-block mt-8 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition" style={{ boxShadow: "var(--shadow-glow)" }}>Write a Review</a>
        </div>
      </section>
    </div>
  );
}
