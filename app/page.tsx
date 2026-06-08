import Image from "next/image";
import portrait from "@/public/pavan-lankalapalli.jpg";
import {
  agentCapabilities,
  aiExperience,
  contact,
  experience,
  projects,
  skills,
} from "./data";
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
} from "@/components/icons";
import { Navigation } from "@/components/navigation";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const toneClasses: Record<string, string> = {
  lime: "bg-lime",
  blue: "bg-blue",
  orange: "bg-orange",
  ink: "bg-ink text-white",
};

export default function Home() {
  const profileJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Pavan Sai Lankalapalli",
    url: "https://pavansae99.github.io/pavan-portfolio/",
    jobTitle: "Senior Software Engineer at Google",
    email: `mailto:${contact.email}`,
    sameAs: [contact.github, contact.linkedin],
    knowsAbout: [
      "Golang",
      "Python",
      "Java",
      "Distributed Systems",
      "Kubernetes",
      "Cloud-Native Microservices",
      "Agentic AI",
    ],
  };

  return (
    <main id="top" className="overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileJsonLd) }}
      />
      <Navigation />

      <section className="relative min-h-screen px-4 pb-10 pt-28 sm:px-6 sm:pt-32">
        <div className="hero-grid relative mx-auto flex min-h-[calc(100vh-9rem)] max-w-[1400px] flex-col justify-between overflow-hidden rounded-[2rem] border border-ink/10 bg-white px-6 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-12">
          <div className="pointer-events-none absolute right-[-12%] top-[-12%] size-[34rem] rounded-full bg-lime/70 blur-[1px]" />
          <div className="pointer-events-none absolute bottom-[-32%] right-[10%] size-[28rem] rounded-full border-[70px] border-blue/45" />

          <div className="relative flex items-center justify-between">
            <div className="flex items-center gap-2 rounded-full border border-ink/10 bg-paper/80 px-3 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.14em]">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-500 opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-green-600" />
              </span>
              Open to meaningful challenges
            </div>
            <span className="hidden font-mono text-[11px] uppercase tracking-[0.18em] text-ink/45 sm:block">
              Google · Senior Software Engineer
            </span>
          </div>

          <div className="relative my-16 max-w-6xl lg:my-24">
            <Reveal>
              <p className="mb-5 font-mono text-xs font-medium uppercase tracking-[0.2em] text-ink/55">
                Senior Software Engineer
              </p>
              <h1 className="text-[clamp(3.5rem,10vw,9rem)] font-semibold leading-[0.82] tracking-[-0.075em] text-ink">
                Pavan Sai
                <span className="block pl-[8vw] text-ink/35">Lankalapalli.</span>
              </h1>
            </Reveal>
          </div>

          <div className="relative grid items-end gap-8 border-t border-ink/10 pt-7 md:grid-cols-[1fr_auto]">
            <p className="max-w-2xl text-lg font-medium leading-7 tracking-[-0.015em] text-ink/75 sm:text-xl sm:leading-8">
              I build secure distributed systems, cloud-native services, and
              intelligent automation with Go and Python.
            </p>
            <a
              href="#about"
              className="group flex items-center gap-4 justify-self-start font-mono text-xs font-medium uppercase tracking-[0.16em]"
            >
              Explore my work
              <span className="grid size-11 place-items-center rounded-full border border-ink/15 transition group-hover:translate-y-1 group-hover:bg-ink group-hover:text-white">
                <ArrowDown className="size-5" />
              </span>
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="section-shell scroll-mt-20">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="Backend depth, cloud scale, practical execution."
          />
        </Reveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <Reveal className="relative min-h-[30rem] overflow-hidden rounded-[2rem] border border-ink/10 bg-white shadow-card">
            <Image
              src={portrait}
              alt="Pavan Sai Lankalapalli"
              fill
              sizes="(max-width: 1024px) 100vw, 38vw"
              className="object-cover object-top"
            />
            <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-ink via-ink/75 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-9">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-lime">
                Pavan Sai Lankalapalli
              </p>
              <p className="mt-3 text-xl font-semibold tracking-[-0.025em]">
                Senior Software Engineer
              </p>
              <p className="mt-1 text-sm text-white/55">
                Backend systems · Cloud infrastructure · AI
              </p>
            </div>
          </Reveal>

          <div className="flex flex-col justify-between gap-12">
            <Reveal>
              <p className="text-2xl font-medium leading-[1.45] tracking-[-0.025em] text-ink sm:text-3xl">
                I&apos;m a senior software engineer with 6+ years of experience
                specializing in{" "}
                <span className="highlight highlight-lime">distributed systems</span>,
                cloud-native platforms, and{" "}
                <span className="highlight highlight-blue">agentic AI</span>.
              </p>
              <p className="mt-8 max-w-3xl text-base leading-8 text-ink/60 sm:text-lg">
                Currently at Google, I build Go and Python services for secure
                compliance automation across distributed Kubernetes
                environments. My recent experience spans identity platforms,
                recruiting systems, and legal technology, with a consistent focus
                on reliable APIs, cloud infrastructure, and measurable performance.
              </p>
            </Reveal>

            <Reveal>
              <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-3">
                {[
                  ["EXPERIENCE", "6+ years"],
                  ["CURRENT", "Google"],
                  ["EDUCATION", "Northeastern"],
                ].map(([label, value]) => (
                  <div key={label} className="bg-paper p-5 sm:p-6">
                    <p className="font-mono text-[10px] tracking-[0.16em] text-ink/40">
                      {label}
                    </p>
                    <p className="mt-3 text-base font-semibold">{value}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="skills" className="section-shell scroll-mt-20 border-t border-line">
        <Reveal>
          <SectionHeading
            eyebrow="Capabilities"
            title="A practical toolkit for ambitious systems."
            description="From service internals to production operations, I work across the full lifecycle of dependable software."
          />
        </Reveal>

        <div className="mt-16 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {skills.map((skill, index) => (
            <Reveal key={skill.title} delay={index * 70}>
              <article
                className={`group flex min-h-[26rem] flex-col rounded-[2rem] p-7 transition duration-300 hover:-translate-y-1 sm:p-8 ${toneClasses[skill.tone]}`}
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs opacity-55">{skill.number}</span>
                  <div className="grid size-11 place-items-center rounded-full border border-current/15">
                    <span className="text-lg transition group-hover:rotate-45">↗</span>
                  </div>
                </div>
                <div className="mt-auto">
                  <h3 className="text-2xl font-semibold tracking-[-0.035em]">
                    {skill.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 opacity-65">
                    {skill.description}
                  </p>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-current/15 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.08em]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section
        id="experience"
        className="scroll-mt-20 bg-ink px-4 py-24 text-white sm:px-6 sm:py-32"
      >
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <SectionHeading
              eyebrow="Experience"
              title="From legal technology to cloud-scale infrastructure."
              description="Selected experience from Bloomberg Law through my current work at Google."
              light
            />
          </Reveal>

          <div className="mt-20 border-t border-white/15">
            {experience.map((item, index) => (
              <Reveal key={item.company} delay={index * 80}>
                <article className="grid gap-8 border-b border-white/15 py-10 lg:grid-cols-[0.3fr_0.7fr_1fr] lg:gap-12 lg:py-14">
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-lime">
                    {item.period}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-0.03em]">
                      {item.company}
                    </h3>
                    <p className="mt-3 text-sm font-semibold text-white/75">
                      {item.role}
                    </p>
                    <p className="mt-1 text-sm text-white/40">{item.focus}</p>
                  </div>
                  <div>
                    <p className="text-lg leading-8 text-white/75">{item.summary}</p>
                    <ul className="mt-7 space-y-3">
                      {item.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-3 text-sm leading-6 text-white/55">
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-orange" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 flex flex-wrap gap-2">
                      {item.stack.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-white/15 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-white/55"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section-shell scroll-mt-20">
        <Reveal>
          <SectionHeading
            eyebrow="Selected work"
            title="Systems designed with purpose."
            description="Representative projects across intelligent automation, event-driven architecture, and platform engineering."
          />
        </Reveal>

        <div className="mt-16 grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal
              key={project.title}
              className={project.featured ? "lg:row-span-2" : ""}
              delay={index * 80}
            >
              <article
                className={`project-card group relative flex h-full min-h-[24rem] flex-col overflow-hidden rounded-[2rem] border border-ink/10 p-7 sm:p-9 ${
                  project.featured
                    ? "bg-lime lg:min-h-[50rem]"
                    : index === 1
                      ? "bg-white"
                      : "bg-blue"
                }`}
              >
                {project.featured ? (
                  <div className="agent-orbit" aria-hidden="true">
                    <div className="orbit orbit-one" />
                    <div className="orbit orbit-two" />
                    <div className="orbit-center">AI</div>
                    <div className="orbit-dot dot-one" />
                    <div className="orbit-dot dot-two" />
                    <div className="orbit-dot dot-three" />
                  </div>
                ) : (
                  <div
                    className={`absolute right-[-3rem] top-[-3rem] size-52 rounded-full ${
                      index === 1 ? "bg-orange" : "bg-white/60"
                    }`}
                  />
                )}

                <div className="relative flex items-center justify-between">
                  <span className="font-mono text-[10px] font-medium uppercase tracking-[0.15em] text-ink/50">
                    {project.number} / {project.category}
                  </span>
                  <span className="grid size-11 place-items-center rounded-full border border-ink/15 transition duration-300 group-hover:rotate-45 group-hover:bg-ink group-hover:text-white">
                    <ArrowUpRight className="size-5" />
                  </span>
                </div>

                <div className="relative mt-auto max-w-xl">
                  <h3 className="text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl">
                    {project.title}
                  </h3>
                  <p className="mt-5 text-sm leading-7 text-ink/60 sm:text-base">
                    {project.description}
                  </p>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-ink/15 bg-paper/40 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.08em]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section
        id="job-search-agent"
        className="scroll-mt-20 px-4 py-24 sm:px-6 sm:py-32"
      >
        <div className="mx-auto max-w-[1400px] overflow-hidden rounded-[2.5rem] bg-white p-6 shadow-card sm:p-10 lg:p-14">
          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-5 border-b border-line pb-8">
              <div className="flex items-center gap-3">
                <span className="grid size-12 place-items-center rounded-2xl bg-lime font-mono text-sm font-medium">
                  AI
                </span>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink/45">
                    Featured deep dive
                  </p>
                  <p className="mt-1 font-semibold">AI Job Search Agent</p>
                </div>
              </div>
              <span className="rounded-full bg-paper px-4 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-ink/55">
                Human in the loop
              </span>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <Reveal>
              <p className="text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">
                A focused agent that treats job search as a system, not a browser
                tab marathon.
              </p>
              <p className="mt-7 text-base leading-8 text-ink/60">
                The agent coordinates discovery, semantic matching, company
                research, and application preparation. Every consequential action
                is reviewable, keeping automation useful without giving up human
                judgment.
              </p>
              <div className="mt-9 flex flex-wrap gap-2">
                {["Stateful graph", "Tool use", "RAG", "Evaluation", "Approval gates"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-paper px-4 py-2 font-mono text-[10px] uppercase tracking-[0.08em]"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </Reveal>

            <div className="grid gap-3 sm:grid-cols-2">
              {agentCapabilities.map((capability, index) => (
                <Reveal key={capability.step} delay={index * 70}>
                  <div className="flex h-full min-h-52 flex-col rounded-3xl border border-line bg-paper p-6 transition hover:border-ink/25 hover:bg-lime/25">
                    <span className="font-mono text-xs text-ink/40">
                      {capability.step}
                    </span>
                    <div className="mt-auto">
                      <h3 className="text-xl font-semibold">{capability.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-ink/55">
                        {capability.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="agentic-ai"
        className="section-shell scroll-mt-20 border-y border-line"
      >
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <Reveal>
            <div className="sticky top-28">
              <div className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-ink/50">
                <span className="size-2 rounded-full bg-orange" />
                Agentic AI Experience
              </div>
              <h2 className="text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                AI systems that can reason, act, and be trusted.
              </h2>
              <p className="mt-7 max-w-xl text-base leading-8 text-ink/60 sm:text-lg">
                I approach agents as software systems: explicit state, observable
                behavior, carefully scoped tools, measurable quality, and clear
                boundaries for human control.
              </p>
            </div>
          </Reveal>

          <div>
            {aiExperience.map((item, index) => (
              <Reveal key={item} delay={index * 60}>
                <div className="group flex gap-5 border-t border-line py-8 sm:gap-8 sm:py-10">
                  <span className="font-mono text-xs text-ink/35">
                    0{index + 1}
                  </span>
                  <p className="text-xl font-semibold leading-snug tracking-[-0.025em] text-ink/75 transition group-hover:text-ink sm:text-2xl">
                    {item}
                  </p>
                </div>
              </Reveal>
            ))}
            <div className="border-t border-line" />
          </div>
        </div>
      </section>

      <section id="resume" className="section-shell scroll-mt-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-orange p-8 sm:p-12 lg:p-16">
            <div className="absolute -right-20 -top-20 size-80 rounded-full border-[55px] border-ink/10" />
            <div className="relative grid items-end gap-10 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-ink/55">
                  Resume
                </p>
                <h2 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-6xl">
                  The concise version, ready for your next tab.
                </h2>
                <p className="mt-6 max-w-xl text-base leading-7 text-ink/65">
                  Explore my engineering focus, technical breadth, and approach to
                  building dependable systems.
                </p>
              </div>
              <a
                href={`mailto:${contact.email}?subject=Resume request for Pavan Sai Lankalapalli`}
                className="group flex items-center gap-4 rounded-full bg-ink px-6 py-4 font-semibold text-white transition hover:bg-white hover:text-ink"
              >
                Request resume
                <Download className="size-5 transition group-hover:translate-y-0.5" />
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <section id="contact" className="scroll-mt-20 bg-ink px-4 pb-7 pt-24 text-white sm:px-6 sm:pt-32">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <div className="grid gap-12 border-b border-white/15 pb-20 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-lime">
                  Have a hard problem?
                </p>
                <h2 className="mt-7 text-[clamp(3.5rem,8vw,7.5rem)] font-semibold leading-[0.9] tracking-[-0.07em]">
                  Let&apos;s build
                  <span className="block text-white/30">something solid.</span>
                </h2>
              </div>
              <div className="lg:pb-2">
                <p className="max-w-md text-base leading-7 text-white/55">
                  I&apos;m open to thoughtful conversations about distributed
                  systems, cloud platforms, and applied AI.
                </p>
                <a
                  href={`mailto:${contact.email}`}
                  className="mt-8 inline-flex items-center gap-4 rounded-full bg-lime px-6 py-4 font-semibold text-ink transition hover:bg-white"
                >
                  Start a conversation
                  <ArrowUpRight className="size-5" />
                </a>
                <a
                  href={`mailto:${contact.email}`}
                  className="mt-5 block break-all font-mono text-xs text-white/40 transition hover:text-lime"
                >
                  {contact.email}
                </a>
              </div>
            </div>
          </Reveal>

          <footer className="grid gap-8 py-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="font-semibold">Pavan Sai Lankalapalli</p>
              <p className="mt-1 text-sm text-white/35">
                Senior Software Engineer · Systems + AI
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${contact.email}`}
                aria-label="Email Pavan"
                className="social-link"
              >
                <Mail className="size-5" />
              </a>
              <a
                href={contact.github}
                target="_blank"
                rel="noreferrer"
                aria-label="Pavan on GitHub"
                className="social-link"
              >
                <Github className="size-5" />
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="Pavan on LinkedIn"
                className="social-link"
              >
                <Linkedin className="size-5" />
              </a>
              <span className="ml-2 font-mono text-[10px] uppercase tracking-[0.12em] text-white/25">
                © {new Date().getFullYear()}
              </span>
            </div>
          </footer>
        </div>
      </section>
    </main>
  );
}
