import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Journey" },
  { href: "#education", label: "Education" },
  { href: "#certifications", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-6 ${
          scrolled ? "glass rounded-full mx-4 md:mx-auto md:max-w-5xl py-2 px-5" : ""
        } transition-all duration-500`}
      >
        <a href="#top" className="font-display text-lg font-semibold tracking-tight">
          Menna<span className="text-gradient-gold">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="/CV_Menna_Mohamed_Abdo.pdf"
          download
          className="hidden sm:inline-flex h-9 items-center rounded-full bg-[image:var(--gradient-gold)] px-4 text-sm font-medium text-gold-foreground shadow-[var(--shadow-glow)] hover:-translate-y-0.5 transition-transform"
        >
          Download CV
        </a>
      </div>
    </header>
  );
}
