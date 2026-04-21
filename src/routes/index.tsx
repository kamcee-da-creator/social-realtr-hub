import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useLocalStorage } from "../hooks/use-local-storage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vmnf Studios — Your Social Media, On Autopilot" },
      {
        name: "description",
        content:
          "Custom posts and videos created, scheduled, and posted to every channel for realtors. Replace your designer, scheduler, and social media manager.",
      },
      { property: "og:title", content: "Vmnf Studios — Your Social Media, On Autopilot" },
      {
        property: "og:description",
        content: "Done-for-you social media content for top-producing realtors and coaches.",
      },
    ],
  }),
  component: Index,
});

const contentTabs = [
  "Educational",
  "Local Spotlight",
  "New Listing",
  "Market Updates",
  "Motivation",
  "Sold Listing",
  "Open House",
  "Testimonials",
  "Fun Facts",
  "Others",
];

const features = [
  { title: "Content Creation", desc: "On-brand posts crafted weekly by real designers." },
  { title: "Video Scripts", desc: "Hooks and scripts written for your voice." },
  { title: "Upload → Done", desc: "Send a clip, get a polished reel back." },
  { title: "Captions & Hashtags", desc: "Optimized copy for every platform." },
  { title: "Content Pipeline™", desc: "See every post moving through production." },
  { title: "1-Click Approvals", desc: "Approve a week of content in seconds." },
  { title: "Direct Team Communication", desc: "Chat with your editors in-app." },
  { title: "Smart Notifications", desc: "Only the alerts that matter." },
  { title: "Content Calendar", desc: "A bird's-eye view of your month." },
  { title: "Scheduler", desc: "Auto-post to every channel at peak times." },
  { title: "Click Connect™", desc: "Link accounts in one click—no passwords." },
  { title: "Performance Analytics", desc: "Track what's working in real time." },
  { title: "Cloud Storage & Archive", desc: "Every asset, forever, searchable." },
  { title: "End of Day Reports", desc: "A daily snapshot in your inbox." },
  { title: "API Integrations", desc: "Plug into your existing CRM stack." },
];

const pricing = [
  {
    name: "Rookie",
    price: 199,
    perks: ["12 Post Credits", "4 Video Edit Credits", "Unlimited Platform Access"],
    popular: false,
  },
  {
    name: "Rising Star",
    price: 399,
    perks: ["16 Post Credits", "8 Video Edit Credits", "Unlimited Platform Access"],
    popular: true,
  },
  {
    name: "Top Producer",
    price: 599,
    perks: ["20 Post Credits", "16 Video Edit Credits", "Unlimited Platform Access"],
    popular: false,
  },
];

const testimonials = [
  {
    name: "Dave B.",
    role: "Tom Ferry Coach",
    quote: "The consistency makes it shine compared to anything else we've seen on the market.",
  },
  {
    name: "Melissa C.",
    role: "Dallas Realtor | Team Leader",
    quote: "Working with Vmnf Studios has been an absolute game-changer!",
  },
  {
    name: "Don J.",
    role: "Tom Ferry Coach",
    quote: "The team is amazing and the best in the game.",
  },
];

const steps = [
  {
    n: "01",
    title: "Connect Your Accounts",
    desc: "Link your social media accounts—no passwords needed.",
  },
  {
    n: "02",
    title: "Build Your Brand Profile",
    desc: "Upload your headshots and branding once. We handle the rest.",
  },
  {
    n: "03",
    title: "We Post It For You",
    desc: "Within 24 hours of signing up, your first week is ready.",
  },
];

const faqs = [
  {
    q: "Do I have to send video clips to get content?",
    a: "No. You'll still receive proactive, branded feed posts every month.",
  },
  { q: "Can I cancel anytime?", a: "Yes." },
  {
    q: "Will this make me go viral?",
    a: "No one can promise virality. We promise consistency and quality.",
  },
  {
    q: "Who makes the content?",
    a: "Real editors and designers who specialize in real estate.",
  },
];

function Index() {
  const [activeTab, setActiveTab] = useState(contentTabs[0]);
  const [activeFeature, setActiveFeature] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [bannerDismissed, setBannerDismissed, bannerHydrated] = useLocalStorage<boolean>(
    "vmnf-banner-trial-dismissed",
    false,
  );

  return (
    <div className="text-foreground">

      {bannerHydrated && !bannerDismissed && (
        <div className="bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-6 py-2.5 flex items-center justify-between gap-4 text-sm">
            <p className="font-medium">
              🎉 Limited-time: Start your 14-day free trial — no credit card required.
            </p>
            <button
              onClick={() => setBannerDismissed(true)}
              aria-label="Dismiss banner"
              className="h-7 w-7 flex items-center justify-center rounded-full hover:bg-primary-foreground/20 transition flex-shrink-0"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Hero */}
      <section
        id="home"
        className="relative overflow-hidden"
        style={{ backgroundImage: "var(--gradient-hero)" }}
      >
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-16 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-medium mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Trusted by 1,000+ realtors
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] max-w-4xl mx-auto">
            Your Social Media,{" "}
            <span className="text-primary">On Autopilot</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Custom posts and videos created, scheduled, and posted to every channel. Replace your
            designer, your scheduler, and your social media manager.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <button
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition"
              style={{ boxShadow: "var(--shadow-glow)" }}
            >
              Start 14-Day Free Trial
            </button>
            <button className="px-6 py-3 rounded-lg border border-border hover:border-foreground/40 font-semibold transition">
              Book a Demo
            </button>
          </div>

          {/* Dashboard mockup */}
          <div
            className="mt-16 mx-auto max-w-5xl rounded-2xl border border-border bg-card overflow-hidden"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-secondary/40">
              <span className="h-3 w-3 rounded-full bg-destructive/70" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
              <span className="h-3 w-3 rounded-full bg-primary/70" />
            </div>
            <div className="grid grid-cols-12 gap-4 p-6">
              <div className="col-span-3 space-y-2">
                {["Dashboard", "Calendar", "Pipeline", "Analytics", "Inbox"].map((i, idx) => (
                  <div
                    key={i}
                    className={`px-3 py-2 rounded-lg text-sm text-left ${
                      idx === 0 ? "bg-primary/15 text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {i}
                  </div>
                ))}
              </div>
              <div className="col-span-9 space-y-4">
                <div className="grid grid-cols-3 gap-3">
                  {["Posts Live", "Engagement", "Scheduled"].map((s, i) => (
                    <div key={s} className="rounded-lg border border-border p-4 text-left">
                      <div className="text-xs text-muted-foreground">{s}</div>
                      <div className="text-2xl font-bold mt-1">
                        {[128, "12.4k", 42][i]}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-4 gap-3">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div
                      key={i}
                      className="aspect-square rounded-lg bg-secondary/60 border border-border"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="border-y border-border bg-card/30">
        <div className="max-w-7xl mx-auto px-6 py-12 text-center">
          <p className="text-sm text-muted-foreground uppercase tracking-wider">
            Trusted by 1,000+ Realtors & Coaching Organizations
          </p>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-6 gap-6 items-center">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="h-10 rounded-md bg-secondary/60 border border-border opacity-70"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Examples */}
      <section id="examples" className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            You stay visible. Your business stays top-of-mind.
          </h2>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {contentTabs.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              className={`px-4 py-2 rounded-full text-sm border transition ${
                activeTab === t
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/40"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="aspect-[4/5] rounded-xl border border-border bg-gradient-to-br from-secondary/60 to-card relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <div className="text-xs text-primary font-medium">{activeTab}</div>
                <div className="text-sm font-semibold">Post #{i + 1}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-card/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              It does it all—so you don't have to.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A software platform that replaces 6 tools, 3 contractors, and your mental load.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {features.map((f, i) => (
              <button
                key={f.title}
                onClick={() => setActiveFeature(i)}
                className={`px-4 py-2 rounded-full text-sm border transition ${
                  activeFeature === i
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/40"
                }`}
              >
                {f.title}
              </button>
            ))}
          </div>
          <div
            className="mt-10 grid md:grid-cols-2 gap-8 items-center rounded-2xl border border-border bg-card p-8"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div>
              <div className="h-12 w-12 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary font-bold mb-4">
                ✦
              </div>
              <h3 className="text-2xl font-bold">{features[activeFeature].title}</h3>
              <p className="mt-3 text-muted-foreground">{features[activeFeature].desc}</p>
              <button className="mt-6 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition">
                Learn more
              </button>
            </div>
            <div className="aspect-video rounded-xl bg-gradient-to-br from-secondary/80 to-background border border-border" />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Simple pricing. Pay a fixed, monthly, and predictable rate.
          </h2>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {pricing.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl border p-8 bg-card transition hover:-translate-y-1 ${
                p.popular ? "border-primary" : "border-border"
              }`}
              style={p.popular ? { boxShadow: "var(--shadow-glow)" } : undefined}
            >
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-5xl font-bold">${p.price}</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <ul className="mt-6 space-y-3">
                {p.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2 text-sm">
                    <span className="text-primary mt-0.5">✓</span>
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`mt-8 w-full py-3 rounded-lg font-medium transition ${
                  p.popular
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "border border-border hover:border-foreground/40"
                }`}
              >
                View Full Details
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-card/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Realtors are saving 10+ hours a week—and closing more deals.
            </h2>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl border border-border bg-card p-6 hover:border-primary/40 transition"
              >
                <div className="flex gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="mt-4 text-foreground/90 leading-relaxed">"{t.quote}"</p>
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            3 steps. Zero effort.
          </h2>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div
              key={s.n}
              className="rounded-2xl border border-border bg-card p-8 hover:border-primary/40 transition"
            >
              <div className="text-primary font-mono text-sm">{s.n}</div>
              <h3 className="mt-3 text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card/30 border-y border-border">
        <div className="max-w-3xl mx-auto px-6 py-24">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Frequently asked questions.
            </h2>
          </div>
          <div className="mt-10 space-y-3">
            {faqs.map((f, i) => (
              <div
                key={f.q}
                className="rounded-xl border border-border bg-card overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-secondary/30 transition"
                >
                  <span className="font-medium">{f.q}</span>
                  <span className={`text-primary transition-transform ${openFaq === i ? "rotate-45" : ""}`}>
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-muted-foreground">{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <div
          className="rounded-3xl border border-primary/30 bg-card p-12 md:p-16"
          style={{ backgroundImage: "var(--gradient-hero)" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Ready to give us a try?
          </h2>
          <button
            className="mt-8 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition"
            style={{ boxShadow: "var(--shadow-glow)" }}
          >
            Book a Demo
          </button>
        </div>
      </section>

    </div>
  );
}
