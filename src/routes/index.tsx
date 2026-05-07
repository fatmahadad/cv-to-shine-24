import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Download,
  Mail,
  Phone,
  Link2 as Linkedin,
  MapPin,
  Calendar,
  GraduationCap,
  Award,
  Smartphone,
  Code2,
  Sparkles,
  Languages,
  BookOpen,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { SkillBar } from "@/components/SkillBar";
import profileImg from "@/assets/profile.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Menna Mohamed Abdo — Flutter Mobile Developer" },
      {
        name: "description",
        content:
          "Portfolio of Menna Mohamed Abdo, a Flutter mobile developer and Technological University student crafting elegant cross-platform experiences.",
      },
      { property: "og:title", content: "Menna Mohamed Abdo — Flutter Developer Portfolio" },
      {
        property: "og:description",
        content: "Mobile-first developer building polished Flutter apps. Explore skills, training, and contact.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Portfolio,
});

const skills = [
  { name: "Flutter & Dart", level: 88 },
  { name: "Mobile UI / UX", level: 82 },
  { name: "State Management", level: 78 },
  { name: "REST APIs & Integration", level: 75 },
  { name: "Technical English", level: 90 },
  { name: "Problem Solving", level: 85 },
];

const services = [
  {
    icon: Smartphone,
    title: "Flutter App Development",
    desc: "Cross-platform mobile apps for iOS and Android with a single elegant codebase.",
  },
  {
    icon: Code2,
    title: "UI Implementation",
    desc: "Pixel-perfect, responsive interfaces with smooth animations and great UX.",
  },
  {
    icon: Sparkles,
    title: "Prototype & MVP",
    desc: "Rapid prototyping to validate ideas — from concept to working mobile MVP.",
  },
];

const experience = [
  {
    date: "Jul – Sep 2025",
    title: "Flutter Mobile Application Training Diploma",
    org: "WE — Egyptian Telecommunications Company",
    desc: "120-hour intensive program focused on building production-ready cross-platform mobile applications using the Flutter framework.",
  },
  {
    date: "2023",
    title: "Technical English Language Training Programme",
    org: "International Academy for Advanced Research & Studies (IARS) — London / Cairo",
    desc: "Modules: technical mathematics, technical drawing, electricity technology, semiconductor devices, microprocessors & memory, and control systems. Final score: 72/100.",
  },
  {
    date: "Aug 2022",
    title: "English Novice L Certificate — Grade Excellent (99%)",
    org: "Steinbeis University Berlin × German Egyptian Academy",
    desc: "Foundational English certification completed with an overall score of 99%.",
  },
];

const certifications = [
  {
    title: "Flutter Mobile Application Diploma",
    issuer: "WE Telecom Egypt",
    year: "2025",
  },
  {
    title: "Technical English Programme",
    issuer: "IARS — London",
    year: "2023",
  },
  {
    title: "Cambridge English Placement Test",
    issuer: "Cambridge — CEFR A1",
    year: "2023",
  },
  {
    title: "English Novice L — 99% Excellent",
    issuer: "Steinbeis University Berlin",
    year: "2022",
  },
];

function Portfolio() {
  return (
    <div id="top" className="relative min-h-screen overflow-x-hidden">
      <Nav />

      {/* Hero */}
      <section className="relative pt-36 md:pt-44 pb-24">
        <div className="absolute inset-0 -z-10 opacity-40 [background-image:radial-gradient(ellipse_at_30%_20%,oklch(0.82_0.14_78/0.18),transparent_60%)]" />
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                <span className="size-1.5 rounded-full bg-gold animate-pulse" />
                Available for opportunities
              </span>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="mt-6 text-5xl md:text-7xl leading-[1.05] font-medium">
                Crafting <span className="text-gradient-gold italic">elegant</span>
                <br />
                mobile experiences.
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
                I'm <span className="text-foreground font-medium">Menna Mohamed Abdo</span> — a
                Flutter mobile developer and Technological University student passionate about
                building thoughtful, performant cross-platform apps.
              </p>
            </Reveal>
            <Reveal delay={360}>
              <div className="mt-10 flex flex-wrap gap-3">
                <Button variant="hero" size="xl" asChild>
                  <a href="#contact">
                    Let's talk <ArrowRight className="ml-1" />
                  </a>
                </Button>
                <Button variant="outlineGold" size="xl" asChild>
                  <a href="/CV_Menna_Mohamed_Abdo.pdf" download>
                    <Download /> Download CV
                  </a>
                </Button>
              </div>
            </Reveal>
            <Reveal delay={480}>
              <div className="mt-12 grid grid-cols-3 max-w-md gap-6">
                {[
                  { k: "120h", v: "Flutter training" },
                  { k: "99%", v: "English Excellent" },
                  { k: "A1+", v: "Cambridge CEFR" },
                ].map((s) => (
                  <div key={s.v}>
                    <div className="text-2xl font-display text-gradient-gold">{s.k}</div>
                    <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-4 rounded-[2rem] bg-[image:var(--gradient-gold)] opacity-20 blur-3xl" />
              <div className="relative rounded-[2rem] glass p-2 hover-lift">
                <img
                  src={profileImg}
                  alt="Portrait of Menna Mohamed Abdo"
                  width={768}
                  height={960}
                  className="rounded-[1.6rem] w-full h-auto object-cover"
                />
                <div className="absolute -bottom-5 -left-5 glass rounded-2xl px-4 py-3 flex items-center gap-3">
                  <Smartphone className="size-5 text-gold" />
                  <div>
                    <div className="text-sm font-medium">Flutter Dev</div>
                    <div className="text-xs text-muted-foreground">iOS · Android · Web</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* About */}
      <Section id="about" eyebrow="About" title="A student-developer with a builder's mind.">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <Reveal>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently studying at <span className="text-foreground">New Cairo Technological
              University</span>, I focus on mobile engineering with Flutter. I love translating
              clean designs into smooth, intuitive apps — and I take pride in writing code that's
              maintainable, testable, and easy to grow.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: GraduationCap, label: "Student", val: "NCTU" },
                { icon: MapPin, label: "Based in", val: "Cairo, Egypt" },
                { icon: Calendar, label: "Born", val: "Apr 6, 2005" },
                { icon: Languages, label: "Languages", val: "AR · EN" },
              ].map((c) => (
                <div key={c.label} className="glass rounded-xl p-4 hover-lift">
                  <c.icon className="size-5 text-gold" />
                  <div className="mt-3 text-xs uppercase tracking-wider text-muted-foreground">
                    {c.label}
                  </div>
                  <div className="text-base font-medium">{c.val}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" eyebrow="Skills" title="Tools of the craft.">
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-7">
          {skills.map((s, i) => (
            <Reveal key={s.name} delay={i * 80}>
              <SkillBar name={s.name} level={s.level} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Services */}
      <Section id="services" eyebrow="Services" title="What I can build for you.">
        <div className="grid md:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <div className="glass rounded-2xl p-7 h-full hover-lift">
                <div className="size-12 rounded-xl bg-gold/10 grid place-items-center">
                  <s.icon className="size-6 text-gold" />
                </div>
                <h3 className="mt-5 text-xl">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Experience timeline */}
      <Section id="experience" eyebrow="Journey" title="Training & growth.">
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />
          <div className="space-y-10">
            {experience.map((e, i) => (
              <Reveal key={e.title} delay={i * 100}>
                <div
                  className={`relative md:grid md:grid-cols-2 md:gap-10 ${
                    i % 2 === 0 ? "" : "md:[&>*:first-child]:col-start-2"
                  }`}
                >
                  <div className="pl-12 md:pl-0 md:pr-10 md:text-right">
                    <div className="absolute left-4 md:left-1/2 top-2 size-3 rounded-full bg-[image:var(--gradient-gold)] ring-4 ring-background md:-translate-x-1/2" />
                    <div className="text-xs uppercase tracking-[0.2em] text-gold mb-2">
                      {e.date}
                    </div>
                    <h3 className="text-xl">{e.title}</h3>
                    <div className="text-sm text-muted-foreground mt-1">{e.org}</div>
                    <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{e.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Education */}
      <Section id="education" eyebrow="Education" title="Academic foundation.">
        <Reveal>
          <div className="glass rounded-2xl p-8 md:p-10 hover-lift">
            <div className="flex items-start gap-5">
              <div className="size-14 rounded-xl bg-gold/10 grid place-items-center shrink-0">
                <BookOpen className="size-7 text-gold" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-gold">Currently</div>
                <h3 className="text-2xl mt-1">New Cairo Technological University</h3>
                <p className="text-muted-foreground mt-2">
                  Pursuing technological studies with a focus on software and mobile engineering —
                  combining academic rigor with hands-on industry training.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Certifications */}
      <Section
        id="certifications"
        eyebrow="Achievements"
        title="Certifications & recognitions."
      >
        <div className="grid md:grid-cols-2 gap-4">
          {certifications.map((c, i) => (
            <Reveal key={c.title} delay={i * 80}>
              <div className="glass rounded-xl p-6 flex items-center gap-4 hover-lift">
                <Award className="size-6 text-gold shrink-0" />
                <div className="flex-1">
                  <div className="font-medium">{c.title}</div>
                  <div className="text-sm text-muted-foreground">{c.issuer}</div>
                </div>
                <div className="text-sm text-gold font-medium">{c.year}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" eyebrow="Contact" title="Let's build something great.">
        <div className="grid md:grid-cols-2 gap-8">
          <Reveal>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                I'm open to internships, freelance Flutter projects, and collaboration. The fastest
                way to reach me is via email or LinkedIn.
              </p>
              <ContactRow icon={Mail} label="Email" value="menna.mohamed@example.com" href="mailto:menna.mohamed@example.com" />
              <ContactRow icon={Phone} label="Phone" value="+20 155 164 4409" href="tel:+201551644409" />
              <ContactRow
                icon={Linkedin}
                label="LinkedIn"
                value="menna-mohamed-abdo"
                href="https://www.linkedin.com/in/menna-mohamed-abdo-2036342a2"
              />
              <ContactRow icon={MapPin} label="Location" value="Cairo, Egypt" />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                const subject = encodeURIComponent(`Portfolio inquiry from ${data.get("name")}`);
                const body = encodeURIComponent(`${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`);
                window.location.href = `mailto:menna.mohamed@example.com?subject=${subject}&body=${body}`;
              }}
              className="glass rounded-2xl p-6 md:p-8 space-y-4"
            >
              <Field name="name" label="Your name" placeholder="Jane Doe" />
              <Field name="email" type="email" label="Email" placeholder="jane@company.com" />
              <Field name="message" label="Message" placeholder="Tell me about your project…" textarea />
              <Button type="submit" variant="hero" size="lg" className="w-full">
                Send message <Send />
              </Button>
            </form>
          </Reveal>
        </div>
      </Section>

      <footer className="border-t border-border/50 py-10 mt-10">
        <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row gap-4 items-center justify-between text-sm text-muted-foreground">
          <div>© {new Date().getFullYear()} Menna Mohamed Abdo. Crafted with care.</div>
          <div className="flex gap-5">
            <a href="https://www.linkedin.com/in/menna-mohamed-abdo-2036342a2" className="hover:text-foreground">LinkedIn</a>
            <a href="mailto:menna.mohamed@example.com" className="hover:text-foreground">Email</a>
            <a href="/CV_Menna_Mohamed_Abdo.pdf" download className="hover:text-foreground">CV</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-24 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mb-12 max-w-2xl">
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">{eyebrow}</div>
            <h2 className="text-4xl md:text-5xl">{title}</h2>
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  const Inner = (
    <div className="glass rounded-xl px-5 py-4 flex items-center gap-4 hover-lift">
      <Icon className="size-5 text-gold" />
      <div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="text-sm font-medium">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
      {Inner}
    </a>
  ) : (
    Inner
  );
}

function Field({
  name,
  label,
  type = "text",
  placeholder,
  textarea,
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  textarea?: boolean;
}) {
  const cls =
    "w-full rounded-lg bg-background/40 border border-border px-4 py-3 text-sm focus:outline-none focus:border-gold/60 focus:ring-2 focus:ring-gold/20 transition";
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-wider text-muted-foreground">{label}</span>
      <div className="mt-1.5">
        {textarea ? (
          <textarea name={name} placeholder={placeholder} rows={4} required className={cls} />
        ) : (
          <input name={name} type={type} placeholder={placeholder} required className={cls} />
        )}
      </div>
    </label>
  );
}
