import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Vmnf Studios" },
      { name: "description", content: "Built by realtors, powered by creatives. Meet the team behind Vmnf Studios." },
      { property: "og:title", content: "About — Vmnf Studios" },
      { property: "og:description", content: "We started Vmnf Studios because we saw agents struggling to stay consistent online. So we fixed it." },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  { title: "Consistency", desc: "We show up for you every single day." },
  { title: "Quality", desc: "Real humans. Real design. Real results." },
  { title: "Simplicity", desc: "Powerful software that feels effortless." },
  { title: "Transparency", desc: "No contracts, no hidden fees, no surprises." },
];

const TEAM = [
  { name: "Alex Rivera", role: "Creative Director" },
  { name: "Jordan Lee", role: "Lead Designer" },
  { name: "Sam Patel", role: "Video Editor" },
  { name: "Casey Morgan", role: "Account Manager" },
];

function AboutPage() {
  return (
    <div>
      <section className="relative overflow-hidden" style={{ backgroundImage: "var(--gradient-hero)" }}>
        <div className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Built by Realtors. Powered by Creatives.</h1>
          <p className="mt-6 text-lg text-muted-foreground">We started Vmnf Studios because we saw agents struggling to stay consistent online. So we fixed it.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Our mission is simple: <span className="text-primary">make every realtor unmissable online.</span></h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Vmnf Studios was born when our founders — both top-producing agents — realized that the only thing standing between them and more deals was a consistent online presence. They tried freelancers, agencies, and DIY tools. Nothing worked. So they built the platform they wished existed: a single place where real designers, video editors, and strategists handle everything for you. Today, we serve over 1,000 agents across North America.
        </p>
      </section>

      <section className="bg-card/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">Our Core Values</h2>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v) => (
              <div key={v.title} className="rounded-2xl border border-border bg-card p-6 hover:border-primary/40 transition">
                <div className="h-10 w-10 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center text-primary font-bold">✦</div>
                <h3 className="mt-4 text-lg font-bold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">The Humans Behind Your Content</h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM.map((m) => (
            <div key={m.name} className="rounded-2xl border border-border bg-card p-6 text-center">
              <div className="mx-auto h-24 w-24 rounded-full bg-gradient-to-br from-primary/30 to-secondary border border-border" />
              <div className="mt-4 font-semibold">{m.name}</div>
              <div className="text-sm text-muted-foreground">{m.role}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <div className="rounded-3xl border border-primary/30 bg-card p-12" style={{ backgroundImage: "var(--gradient-hero)" }}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Want to see what we can do for you?</h2>
          <Link to="/book-a-demo" className="inline-block mt-8 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition" style={{ boxShadow: "var(--shadow-glow)" }}>Book a Demo</Link>
        </div>
      </section>
    </div>
  );
}
