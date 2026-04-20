import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/book-a-demo")({
  head: () => ({
    meta: [
      { title: "Book a Demo — Vmnf Studios" },
      { name: "description", content: "Book a free 15-minute call to see Vmnf Studios in action. No pressure, just answers." },
      { property: "og:title", content: "Book a Demo — Vmnf Studios" },
      { property: "og:description", content: "Let's talk. Book a free 15-min call." },
    ],
  }),
  component: BookDemoPage,
});

function BookDemoPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-start">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Let's Talk. Book a Free 15-Min Call.</h1>
        <p className="mt-5 text-lg text-muted-foreground">No pressure. Just a quick call to see if Vmnf Studios is the right fit for you.</p>

        <ul className="mt-10 space-y-5">
          {[
            "Get all your questions answered live",
            "See the platform in action",
            "Walk away with a clear next step",
          ].map((b) => (
            <li key={b} className="flex items-start gap-3">
              <span className="h-7 w-7 rounded-full bg-primary/15 border border-primary/30 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
              <span className="text-foreground/90">{b}</span>
            </li>
          ))}
        </ul>

        <div className="mt-12 rounded-2xl border border-border bg-card p-6">
          <div className="flex gap-1 text-primary">{Array.from({ length: 5 }).map((_, i) => <span key={i}>★</span>)}</div>
          <p className="mt-3 text-foreground/90 italic">"The consistency makes it shine compared to anything else we've seen on the market."</p>
          <div className="mt-3 text-sm">
            <span className="font-semibold">Dave B.</span>
            <span className="text-muted-foreground"> · Tom Ferry Coach</span>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-card p-8" style={{ boxShadow: "var(--shadow-card)" }}>
        {submitted ? (
          <div className="text-center py-12">
            <div className="mx-auto h-16 w-16 rounded-full bg-primary/15 border border-primary/30 text-primary flex items-center justify-center text-3xl">✓</div>
            <h3 className="mt-4 text-2xl font-bold">You're booked!</h3>
            <p className="mt-2 text-muted-foreground">Check your inbox for confirmation and calendar invite.</p>
          </div>
        ) : (
          <form
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold">Reserve your slot</h2>
            <div className="grid grid-cols-2 gap-3">
              <Field label="First Name" name="firstName" required />
              <Field label="Last Name" name="lastName" required />
            </div>
            <Field label="Email Address" name="email" type="email" required />
            <Field label="Phone Number" name="phone" type="tel" required />
            <Field label="Brokerage / Company Name" name="company" />

            <div>
              <label className="block text-sm font-medium mb-1.5">How did you hear about us?</label>
              <select className="w-full px-4 py-2.5 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition">
                <option>Instagram</option>
                <option>Facebook</option>
                <option>Google Search</option>
                <option>Referral</option>
                <option>Tom Ferry Coach</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5">A short message or question</label>
              <textarea rows={4} className="w-full px-4 py-2.5 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition resize-none" />
            </div>

            <button type="submit" className="w-full px-6 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition" style={{ boxShadow: "var(--shadow-glow)" }}>
              Book My Demo Call
            </button>
          </form>
        )}

        <div className="mt-6 text-center text-sm text-muted-foreground">
          Prefer to watch first? <a href="#" className="text-primary hover:underline">Watch a 2-min demo video →</a>
        </div>
      </div>
    </div>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium mb-1.5">{label}{required && <span className="text-primary"> *</span>}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full px-4 py-2.5 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition"
      />
    </div>
  );
}
