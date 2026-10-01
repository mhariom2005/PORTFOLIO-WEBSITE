"use client";
import Link from "next/link";
import { motion } from "motion/react";
import { Architecture } from "@/components/Architecture";
import { AskHari } from "@/components/AskHari";
import { SectionLabel } from "@/components/SectionLabel";
import { experience, profile, projects, skills } from "@/lib/data";

export default function Home() {
  return <main>
    <header className="nav"><Link href="#top" className="wordmark">HARI OM<span> / ENGINEERING</span></Link><nav><a href="#work">WORK</a><a href="#experience">EXPERIENCE</a><a href="#stack">STACK</a><a href="#about">ABOUT</a></nav><a className="resume" href="/Hari-Om-Mishra-Resume.pdf" target="_blank">RESUME ↗</a></header>

    <section id="top" className="hero page-pad">
      <div className="hero-meta"><span>01 / PORTFOLIO</span><span>JAVA · SPRING BOOT · REACT</span></div>
      <div className="hero-grid">
        <div><p className="kicker">SOFTWARE ENGINEERING PORTFOLIO</p><h1>I build software<br/><em>that solves problems.</em></h1><p className="hero-summary">{profile.summary}</p><div className="actions"><a className="button dark" href="#work">VIEW SELECTED WORK</a><a className="button light" href={`mailto:${profile.email}`}>GET IN TOUCH</a></div></div>
        <div className="hero-diagram"><div className="diagram-caption">SYSTEM / 001</div><Architecture nodes={["React interface", "REST API", "Spring Boot", "MySQL"]}/><div className="diagram-foot"><span>ARCHITECTURE-FIRST</span><span>JAVA / WEB</span></div></div>
      </div>
      <div className="scroll-note"><span>SCROLL TO EXPLORE</span><span>↓</span></div>
    </section>

    <section id="work" className="section page-pad"><SectionLabel number="02">SELECTED WORK</SectionLabel><div className="section-intro"><h2>Projects with<br/><em>engineering stories.</em></h2><p>Each project is presented as a system: the problem, the architecture, the implementation choices and the documented technology stack.</p></div>
      <div className="project-list">{projects.map(p => <motion.article className="project-row" key={p.slug} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }} transition={{ duration: .5 }}><div className="project-index">{p.number}</div><div className="project-main"><div className="project-heading"><div><span className="eyebrow">{p.subtitle}</span><h3>{p.title}</h3></div><Link href={`/projects/${p.slug}`} className="arrow-link">CASE STUDY ↗</Link></div><p>{p.description}</p><div className="chips">{p.stack.map(s => <span key={s}>{s}</span>)}</div></div><Architecture nodes={p.diagram}/></motion.article>)}</div>
    </section>

    <section className="lab page-pad"><SectionLabel number="03">ENGINEERING LAB</SectionLabel><div className="lab-grid"><div><h2>Show the system.<br/><em>Not the sparkle.</em></h2><p>Interactive diagrams replace decorative “AI” effects. Hover, scroll and open a case study to understand how the pieces fit together.</p></div><div className="lab-card"><div className="lab-top"><span>REQUEST FLOW</span><span>LIVE DIAGRAM</span></div><div className="flow"><div>CLIENT</div><span>→</span><div>REST</div><span>→</span><div>SPRING BOOT</div><span>→</span><div>DATABASE</div></div><div className="lab-bottom">Authentication · business logic · persistence</div></div></div></section>

    <section id="stack" className="section page-pad"><SectionLabel number="04">ENGINEERING STACK</SectionLabel><div className="stack-layout"><h2>Tools are useful.<br/><em>Relationships matter more.</em></h2><div className="stack-groups">{Object.entries(skills).map(([name, items]) => <div className="stack-group" key={name}><span>{name.toUpperCase()}</span><div>{items.map(i => <b key={i}>{i}</b>)}</div></div>)}</div></div></section>

    <section id="experience" className="section page-pad"><SectionLabel number="05">EXPERIENCE</SectionLabel><div className="experience-list">{experience.map((e, i) => <motion.div className="experience-row" key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * .05 }}><span>{e.year}</span><div><h3>{e.title}</h3><p className="org">{e.org}</p><p>{e.body}</p></div></motion.div>)}</div></section>

    <section id="about" className="about page-pad"><SectionLabel number="06">ABOUT / EDUCATION</SectionLabel><div className="about-grid"><div><h2>Computer Science<br/><em>in progress.</em></h2><p>Building a foundation across object-oriented programming, data structures and algorithms, databases, operating systems and software development practices.</p></div><div className="education"><span>2023 — 2027</span><h3>B.Tech — Computer Science & Engineering</h3><p>Dr. A.P.J. Abdul Kalam Technical University</p></div></div></section>

    <section className="ask-section page-pad"><SectionLabel number="07">PORTFOLIO AI</SectionLabel><AskHari/></section>

    <footer className="footer page-pad"><div><span className="eyebrow">LET'S BUILD SOMETHING</span><h2>Have a problem<br/><em>worth solving?</em></h2></div><div className="footer-links"><a href={`mailto:${profile.email}`}>{profile.email}</a><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a></div><p className="fine">© 2026 Hari Om Mishra. Portfolio content is based on documented resume/project information.</p></footer>
  </main>;
}
