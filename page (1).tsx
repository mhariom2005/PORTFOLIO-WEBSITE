import Link from "next/link";
import { notFound } from "next/navigation";
import { Architecture } from "@/components/Architecture";
import { projects } from "@/lib/data";

export function generateStaticParams() { return projects.map(p => ({ slug: p.slug })); }

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);
  if (!project) notFound();
  return <main><header className="nav"><Link href="/" className="wordmark">HARI OM<span> / ENGINEERING</span></Link><Link href="/" className="resume">← BACK</Link></header><article className="case-study page-pad"><div className="case-top"><span>{project.number} / CASE STUDY</span><span>{project.subtitle}</span></div><h1>{project.title}</h1><p className="case-lead">{project.description}</p><div className="case-diagram"><Architecture nodes={project.diagram}/></div><div className="case-grid"><div><span className="eyebrow">DOCUMENTED IMPLEMENTATION</span>{project.details.map((d,i)=><div className="detail" key={i}><span>0{i+1}</span><p>{d}</p></div>)}</div><aside><span className="eyebrow">TECH STACK</span><div className="chips case-chips">{project.stack.map(s=><span key={s}>{s}</span>)}</div></aside></div><div className="case-next"><Link href="/">← All projects</Link></div></article></main>;
}
