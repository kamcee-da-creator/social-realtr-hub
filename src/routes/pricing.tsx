import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Social Realtr" },
      { name: "description", content: "Simple, transparent pricing for realtors. No contracts, no surprises, cancel anytime." },
      { property: "og:title", content: "Pricing — Social Realtr" },
      { property: "og:description", content: "Three plans built for every stage of your real estate business." },
    ],
  }),
  component: PricingPage,
});

const PLANS = [
  {
    name: "Rookie", monthly: 199,
    perks: ["12 Post Credits", "4 Video Edit Credits", "Unlimited Platform Access", "Content Calendar", "Scheduler", "Click Connect™", "Performance Analytics", "Cloud Storage"],
    popular: false,
  },
  {
    name: "Rising Star", monthly: 399,
    perks: ["16 Post Credits", "8 Video Edit Credits", "Everything in Rookie", "Direct Team Chat", "Smart Notifications", "End of Day Reports"],
    popular: true,
  },
  {
    name: "Top Producer", monthly: 599,
    perks: ["20 Post Credits", "16 Video Edit Credits", "Everything in Rising Star", "Priority Support", "API Integrations", "Dedicated Account Manager"],
    popular: false,
  },
];

const COMPARE: { feature: string; r: boolean; rs: boolean; tp: boolean }[] = [
  { feature: "Content Calendar", r: true, rs: true, tp: true },
  { feature: "Scheduler", r: true, rs: true, tp: true },
  { feature: "Click Connect™", r: true, rs: true, tp: true },
  { feature: "Performance Analytics", r: true, rs: true, tp: true },
  { feature: "Cloud Storage", r: true, rs: true, tp: true },
  { feature: "Direct Team Chat", r: false, rs: true, tp: true },
  { feature: "Smart Notifications", r: false, rs: true, tp: true },
  { feature: "End of Day Reports", r: false, rs: true, tp: true },
  { feature: "Priority Support", r: false, rs: false, tp: true },
  { feature: "API Integrations", r: false, rs: false, tp: true },
  { feature: "Dedicated Account Manager", r: false, rs: false, tp: true },
];

const FAQS = [
  { q: "What is a Post Credit?", a: "One Post Credit covers a fully designed, captioned post ready to publish on your channels." },
  { q: "What is a Video Edit Credit?", a: "One Video Edit Credit covers a professionally edited reel or short-form video from your raw footage." },
  { q: "Do unused credits roll over?", a: "Credits roll over for one billing cycle so you never lose what you paid for." },
  { q: "Can I upgrade or downgrade anytime?", a: "Yes. Change plans from your dashboard — prorated to the day." },
  { q: "Is there a free trial?", a: "Yes — 14 days, no credit card required." },
];

function PricingPage() {
  const [annual, setAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const price = (m: number) => (annual ? Math.round(m * 0.8) : m);

  return (
    <div>
      <section className="relative overflow-hidden" style={{ backgroundImage: "var(--gradient-hero)" }}>
        <div className="max-w-4xl mx-auto px-6 pt-20 pb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Simple, Transparent Pricing.</h1>
          <p className="mt-6 text-lg text-muted-foreground">No contracts. No surprises. Cancel anytime.</p>
          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-border bg-card p-1.5">
            <button onClick={() => setAnnual(false)} className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${!annual ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}>Monthly</button>
            <button onClick={() => setAnnual(true)} className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${annual ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}>
              Annual <span className="ml-1 text-xs opacity-80">-20%</span>
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-3 gap-6">
          {PLANS.map((p) => (
            <div key={p.name} className={`relative rounded-2xl border p-8 bg-card transition hover:-translate-y-1 ${p.popular ? "border-primary" : "border-border"}`} style={p.popular ? { boxShadow: "var(--shadow-glow)" } : undefined}>
              {p.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">Most Popular</span>}
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-5xl font-bold">${price(p.monthly)}</span>
                <span className="text-muted-foreground">/mo</span>
              </div>
              {annual && <div className="text-xs text-primary mt-1">Billed annually</div>}
              <ul className="mt-6 space-y-3">
                {p.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2 text-sm"><span className="text-primary mt-0.5">✓</span><span>{perk}</span></li>
                ))}
              </ul>
              <button className={`mt-8 w-full py-3 rounded-lg font-medium transition ${p.popular ? "bg-primary text-primary-foreground hover:opacity-90" : "border border-border hover:border-foreground/40"}`}>View Full Details</button>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">Compare Plans</h2>
        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-card">
          <table className="w-full text-sm">
            <thead className="bg-secondary/40">
              <tr>
                <th className="text-left p-4 font-semibold">Feature</th>
                <th className="p-4 font-semibold">Rookie</th>
                <th className="p-4 font-semibold text-primary">Rising Star</th>
                <th className="p-4 font-semibold">Top Producer</th>
              </tr>
            </thead>
            <tbody>
              {COMPARE.map((row) => (
                <tr key={row.feature} className="border-t border-border">
                  <td className="p-4">{row.feature}</td>
                  <td className="p-4 text-center">{row.r ? <span className="text-primary">✓</span> : <span className="text-muted-foreground">—</span>}</td>
                  <td className="p-4 text-center">{row.rs ? <span className="text-primary">✓</span> : <span className="text-muted-foreground">—</span>}</td>
                  <td className="p-4 text-center">{row.tp ? <span className="text-primary">✓</span> : <span className="text-muted-foreground">—</span>}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">Pricing FAQ</h2>
        <div className="mt-10 space-y-3">
          {FAQS.map((f, i) => (
            <div key={f.q} className="rounded-xl border border-border bg-card overflow-hidden">
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left hover:bg-secondary/30 transition">
                <span className="font-medium">{f.q}</span>
                <span className={`text-primary transition-transform ${openFaq === i ? "rotate-45" : ""}`}>+</span>
              </button>
              {openFaq === i && <div className="px-5 pb-5 text-muted-foreground">{f.a}</div>}
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <div className="rounded-3xl border border-primary/30 bg-card p-12" style={{ backgroundImage: "var(--gradient-hero)" }}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Still not sure? Book a free demo call.</h2>
          <Link to="/book-a-demo" className="inline-block mt-8 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition" style={{ boxShadow: "var(--shadow-glow)" }}>Book a Demo</Link>
        </div>
      </section>
    </div>
  );
}
