import { useEffect, useState } from "react";
import { profile, stats, experience, projects, skills, education, achievements } from "./data.js";

const NAV = ["About", "Experience", "Projects", "Skills", "Contact"];

function useTyping(words) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const word = words[i % words.length];
    const t = setTimeout(
      () => {
        if (!del) {
          setText(word.slice(0, text.length + 1));
          if (text.length + 1 === word.length) setTimeout(() => setDel(true), 1100);
        } else {
          setText(word.slice(0, text.length - 1));
          if (text.length - 1 === 0) { setDel(false); setI(i + 1); }
        }
      },
      del ? 35 : 75
    );
    return () => clearTimeout(t);
  }, [text, del, i, words]);
  return text;
}

function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/60 bg-ink/70 backdrop-blur-md">
      <div className="wrap flex h-16 items-center justify-between">
        <a href="#top" className="font-display text-lg font-bold">pradip<span className="text-iris">.dev</span></a>
        <nav className="hidden gap-8 text-sm text-mute md:flex">
          {NAV.map((n) => (
            <a key={n} href={`#${n.toLowerCase()}`} className="transition hover:text-paper">{n}</a>
          ))}
        </nav>
        <a href={profile.links.resume} className="btn border border-line text-paper hover:border-iris">Resume</a>
      </div>
    </header>
  );
}

function CodeCard() {
  return (
    <div className="animate-rise rounded-2xl border border-line bg-panel/80 p-5 text-[13px] leading-7 shadow-2xl shadow-iris/10 backdrop-blur [animation-delay:.25s]">
      <div className="mb-3 flex gap-2">
        <span className="h-3 w-3 rounded-full bg-[#ff6b6b]" /><span className="h-3 w-3 rounded-full bg-sun" /><span className="h-3 w-3 rounded-full bg-mint" />
      </div>
      <pre className="overflow-x-auto font-[ui-monospace,Menlo,monospace] text-paper/90">
{`const pradip = {
  role: "Software Engineer",
  company: "Affluense.ai",
  stack: ["Node", "Express", "MongoDB",
          "React", "Tailwind"],
  also: ["C++", "Python", "FastAPI"],
  solved: "900+ LeetCode problems",
  openTo: "interesting problems",
};`}
      </pre>
    </div>
  );
}

function Hero() {
  const typed = useTyping(profile.roles);
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40">
      <div className="pointer-events-none absolute -left-24 top-10 h-96 w-96 animate-drift rounded-full bg-iris/25 blur-[110px]" />
      <div className="pointer-events-none absolute right-0 top-40 h-80 w-80 animate-drift rounded-full bg-mint/15 blur-[110px] [animation-delay:-6s]" />
      <div className="wrap relative grid items-center gap-14 lg:grid-cols-[1.15fr_.85fr]">
        <div className="animate-rise">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-panel px-4 py-1.5 text-sm text-mute">
            <span className="h-2 w-2 rounded-full bg-mint" /> Software Engineer at Affluense.ai
          </p>
          <h1 className="font-display text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-7xl">
            Pradip Yadav
          </h1>
          <p className="mt-5 font-display text-2xl text-mute sm:text-3xl">
            I build <span className="text-paper">{typed}</span><span className="animate-blink text-iris">|</span>
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-mute">{profile.tagline}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="btn bg-iris text-ink hover:bg-paper">See my projects</a>
            <a href="#contact" className="btn border border-line hover:border-mint">Get in touch</a>
            <a href={profile.links.github} target="_blank" rel="noreferrer" className="btn border border-line hover:border-iris">GitHub</a>
          </div>
        </div>
        <CodeCard />
      </div>
      <div className="wrap relative mt-20 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl border border-line bg-panel/60 p-5">
            <div className="font-display text-4xl font-bold text-paper">{s.value}</div>
            <div className="mt-1 text-sm text-paper/90">{s.label}</div>
            {s.note && <div className="text-xs text-mute">{s.note}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-20">
      <div className="wrap grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="h2">Backend depth, product instincts</h2>
          <p className="mt-5 max-w-lg leading-relaxed text-mute">
            I have finished my B.Tech in Information Technology at IIIT Allahabad. At work I design services where
            security and correctness matter: encrypted data, machine-bound licences and fast fuzzy lookups. Outside work I
            ship full-stack apps with the MERN stack and keep my problem-solving sharp on Codeforces, LeetCode and CodeChef.
          </p>
        </div>
        <div className="space-y-5">
          {education.map((e) => (
            <div key={e.title} className="rounded-2xl border border-line bg-panel/60 p-5">
              <div className="font-display text-lg font-semibold">{e.title}</div>
              <div className="text-mute">{e.place}</div>
              <div className="mt-1 text-sm text-iris">{e.period}</div>
            </div>
          ))}
          <ul className="space-y-2 pt-2 text-sm text-mute">
            {achievements.map((a) => (
              <li key={a} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-mint" />{a}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="wrap">
        <h2 className="h2">Where I've worked</h2>
        <div className="relative mt-12 border-l border-line pl-8 sm:pl-12">
          {experience.map((x) => (
            <div key={x.company} className="relative pb-14 last:pb-0">
              <span className="absolute -left-[41px] top-2 h-3 w-3 rounded-full bg-iris ring-4 ring-ink sm:-left-[57px]" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-2xl font-bold">{x.role}, <span className="text-iris">{x.company}</span></h3>
                <span className="text-sm text-mute">{x.period} · {x.place}</span>
              </div>
              <ul className="mt-4 max-w-3xl space-y-3 text-mute">
                {x.points.map((p) => (<li key={p} className="leading-relaxed">{p}</li>))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="wrap">
        <h2 className="h2">Things I've built</h2>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((p) => (
            <article key={p.title} className="group flex flex-col rounded-3xl border border-line bg-panel/70 p-7 transition hover:border-iris/70">
              <h3 className="font-display text-3xl font-bold">{p.title}</h3>
              <p className="text-sm text-iris">{p.subtitle}</p>
              <p className="mt-4 leading-relaxed text-mute">{p.description}</p>
              <ul className="mt-5 space-y-2 text-sm text-paper/85">
                {p.highlights.map((h) => (
                  <li key={h} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-mint" />{h}</li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">{p.tech.map((t) => <span key={t} className="chip">{t}</span>)}</div>
              <div className="mt-7 flex gap-3 pt-1">
                <a href={p.github} target="_blank" rel="noreferrer" className="btn border border-line text-paper hover:border-iris">View code</a>
                {p.live && <a href={p.live} target="_blank" rel="noreferrer" className="btn bg-iris text-ink hover:bg-paper">Live demo</a>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="wrap">
        <h2 className="h2">Toolbox</h2>
        <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group}>
              <h3 className="mb-3 font-display text-lg font-semibold text-iris">{group}</h3>
              <div className="flex flex-wrap gap-2">{items.map((s) => <span key={s} className="chip text-paper/90">{s}</span>)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ state: "idle", msg: "" });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  async function send(e) {
    e.preventDefault();
    setStatus({ state: "loading", msg: "" });
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL || ""}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      setForm({ name: "", email: "", message: "" });
      setStatus({ state: "ok", msg: "Message sent. I'll reply soon." });
    } catch (err) {
      setStatus({ state: "error", msg: err.message });
    }
  }

  const field = "w-full rounded-xl border border-line bg-ink px-4 py-3 text-paper placeholder:text-mute/60 focus:border-iris focus:outline-none";
  return (
    <section id="contact" className="py-20">
      <div className="wrap">
        <div className="grid gap-12 rounded-3xl border border-line bg-panel/70 p-8 sm:p-12 lg:grid-cols-2">
          <div>
            <h2 className="h2">Let's work together</h2>
            <p className="mt-5 max-w-md text-mute">
              I'm open to SDE roles and interesting projects. Send a message or write to me directly.
            </p>
            <a className="mt-6 inline-block font-display text-xl text-mint hover:underline">{profile.email}</a>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              {["github", "linkedin", "leetcode", "codeforces"].map((k) => (
                <a key={k} href={profile.links[k]} target="_blank" rel="noreferrer" className="chip capitalize hover:border-iris hover:text-paper">{k}</a>
              ))}
            </div>
          </div>
          <form onSubmit={send} className="space-y-4">
            <input className={field} placeholder="Your name" value={form.name} onChange={set("name")} required maxLength={80} aria-label="Your name" />
            <input className={field} type="email" placeholder="Your email" value={form.email} onChange={set("email")} required aria-label="Your email" />
            <textarea className={field} rows={5} placeholder="What would you like to build?" value={form.message} onChange={set("message")} required maxLength={2000} aria-label="Message" />
            <button disabled={status.state === "loading"} className="btn w-full bg-iris text-ink hover:bg-paper disabled:opacity-60">
              {status.state === "loading" ? "Sending..." : "Send message"}
            </button>
            {status.msg && (
              <p role="status" className={status.state === "ok" ? "text-mint" : "text-[#ff8a8a]"}>{status.msg}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="border-t border-line py-8 text-center text-sm text-mute">
        © {new Date().getFullYear()} Pradip Yadav. Built with React, Tailwind, Express and MongoDB.
      </footer>
    </>
  );
}
