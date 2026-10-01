"use client";
import { useState } from "react";

const prompts = [
  "What has Hari built with Spring Boot?",
  "Explain the Digital Wallet project.",
  "What technologies does Hari use?",
  "Has Hari worked with authentication?",
];

export function AskHari() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  async function ask(q = question) {
    if (!q.trim()) return;
    setQuestion(q); setLoading(true); setAnswer("");
    try {
      const res = await fetch("/api/ask", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ question: q }) });
      const data = await res.json();
      setAnswer(data.answer ?? "I don't have enough verified portfolio information to answer that.");
    } catch { setAnswer("The assistant is unavailable right now. Please use the resume and project pages for the verified details."); }
    finally { setLoading(false); }
  }

  return <div className="ask-hari">
    <div className="ask-copy"><span className="eyebrow">PORTFOLIO AI</span><h3>Ask Hari</h3><p>Ask about projects, technologies, experience or engineering decisions. The live assistant is constrained to the portfolio content.</p></div>
    <div className="ask-panel">
      <div className="prompt-list">{prompts.map(p => <button key={p} onClick={() => ask(p)}>{p}<span>↗</span></button>)}</div>
      <div className="ask-input"><input value={question} onChange={e => setQuestion(e.target.value)} onKeyDown={e => e.key === "Enter" && ask()} placeholder="Ask a question..." aria-label="Ask Hari a question" /><button onClick={() => ask()} disabled={loading}>{loading ? "..." : "ASK"}</button></div>
      {answer && <div className="answer"><span>HARI AI</span><p>{answer}</p></div>}
    </div>
  </div>;
}
