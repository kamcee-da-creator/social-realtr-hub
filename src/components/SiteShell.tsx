import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "@tanstack/react-router";
import { Menu, X, Moon, Sun } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/features", label: "Features" },
  { to: "/pricing", label: "Pricing" },
  { to: "/examples", label: "Examples" },
  { to: "/reviews", label: "Reviews" },
  { to: "/about", label: "About" },
  { to: "/book-a-demo", label: "Book a Demo" },
] as const;

const COLORS: { name: string; rgb: string }[] = [
  { name: "Green", rgb: "34 197 94" },
  { name: "Blue", rgb: "59 130 246" },
  { name: "Purple", rgb: "168 85 247" },
  { name: "Orange", rgb: "249 115 22" },
  { name: "Red", rgb: "239 68 68" },
];

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2">
      <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold">
        S
      </div>
      <span className="font-semibold text-lg tracking-tight">Vmnf Studios</span>
    </Link>
  );
}

export function SiteShell() {
  const [open, setOpen] = useState(false);
  const [light, setLight] = useState(false);
  const [accent, setAccent] = useState(COLORS[0].rgb);
  const location = useLocation();

  // Init from localStorage
  useEffect(() => {
    const t = localStorage.getItem("sr-theme");
    const a = localStorage.getItem("sr-accent");
    if (t === "light") setLight(true);
    if (a) setAccent(a);
  }, []);

  // Apply theme class
  useEffect(() => {
    document.documentElement.classList.toggle("light", light);
    localStorage.setItem("sr-theme", light ? "light" : "dark");
  }, [light]);

  // Apply accent
  useEffect(() => {
    document.documentElement.style.setProperty("--accent-rgb", accent);
    localStorage.setItem("sr-accent", accent);
  }, [accent]);

  // Close panel on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">
      {/* Top nav */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Logo />
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            {NAV.slice(0, 5).map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="hover:text-foreground transition"
                activeProps={{ style: { color: "rgb(var(--accent-rgb))" } }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex px-4 py-2 text-sm rounded-lg border border-border hover:border-foreground/40 transition">
              Log In
            </button>
            <Link
              to="/book-a-demo"
              className="px-4 py-2 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition"
            >
              Book a Demo
            </Link>
          </div>
        </nav>
      </header>

      {/* Page content */}
      <main className="animate-in fade-in duration-300">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <Logo />
              <p className="mt-3 text-sm text-muted-foreground max-w-xs">
                Done-for-you social media for top-producing realtors.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/about" className="hover:text-foreground">About</Link></li>
                <li><Link to="/reviews" className="hover:text-foreground">Reviews</Link></li>
                <li><Link to="/book-a-demo" className="hover:text-foreground">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/features" className="hover:text-foreground">Features</Link></li>
                <li><Link to="/pricing" className="hover:text-foreground">Pricing</Link></li>
                <li><Link to="/examples" className="hover:text-foreground">Our Work</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-border text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Vmnf Studios. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Floating menu button */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        className="fixed bottom-6 left-6 z-40 h-14 w-14 rounded-full bg-card border border-border flex items-center justify-center hover:scale-105 transition"
        style={{ boxShadow: "var(--shadow-card)", color: "rgb(var(--accent-rgb))" }}
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Slide panel */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-[320px] max-w-[85vw] bg-card border-r border-border shadow-2xl transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-5 border-b border-border">
          <Logo />
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="h-9 w-9 rounded-lg border border-border flex items-center justify-center hover:border-foreground/40 transition"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <nav className="p-5 flex flex-col gap-1">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-secondary transition"
              activeProps={{ style: { color: "rgb(var(--accent-rgb))", backgroundColor: "rgb(var(--accent-rgb) / 0.1)" } }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="px-5 py-4 border-t border-border">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium flex items-center gap-2">
              {light ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              {light ? "Light Mode" : "Dark Mode"}
            </span>
            <button
              onClick={() => setLight((v) => !v)}
              role="switch"
              aria-checked={light}
              className={`relative h-6 w-11 rounded-full transition ${light ? "bg-primary" : "bg-secondary"}`}
            >
              <span
                className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${
                  light ? "translate-x-5" : "translate-x-0.5"
                }`}
              />
            </button>
          </div>
        </div>

        <div className="px-5 py-4 border-t border-border">
          <div className="text-sm font-medium mb-3">Theme Color</div>
          <div className="flex items-center gap-3">
            {COLORS.map((c) => (
              <button
                key={c.name}
                onClick={() => setAccent(c.rgb)}
                aria-label={c.name}
                className={`h-8 w-8 rounded-full transition ${
                  accent === c.rgb ? "ring-2 ring-offset-2 ring-offset-card ring-foreground" : ""
                }`}
                style={{ backgroundColor: `rgb(${c.rgb})` }}
              />
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}
