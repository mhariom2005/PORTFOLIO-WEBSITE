import { NextResponse } from "next/server";
import OpenAI from "openai";
import { profile, projects, skills, experience } from "@/lib/data";

const source = JSON.stringify({ profile, projects, skills, experience });

const fallback = (q: string) => {
  const x = q.toLowerCase();
  if (x.includes("spring") || x.includes("microservice")) return "Hari's portfolio documents Spring Boot and microservices work, including an Order & Inventory system with independent services, REST communication, failure/timeout handling and JUnit-tested business logic.";
  if (x.includes("wallet") || x.includes("transaction")) return "The Digital Wallet project covers deposits, withdrawals and peer-to-peer transfers. The resume states that ACID transactions and optimistic locking were used to prevent balance errors under concurrent transfers.";
  if (x.includes("auth") || x.includes("security") || x.includes("jwt")) return "The Full-Stack E-Commerce project uses Spring Security, JWT and role-based access control, according to Hari's resume.";
  if (x.includes("react")) return "Hari's documented frontend work includes React.js, Hooks, HTML, CSS, JavaScript ES6 and Fetch API, including a Task Manager and an e-commerce storefront.";
  if (x.includes("skill") || x.includes("technology") || x.includes("stack")) return "The documented stack includes Java, SQL, JavaScript, C/C++ and Python; Spring Boot, REST, JPA/Hibernate and Spring Security; React; MySQL; and tools including Git, Maven, Postman and JUnit.";
  return "I can answer questions about Hari's documented projects, technologies, experience and education. Try asking about Spring Boot, microservices, React, authentication, the Digital Wallet or the Order & Inventory project.";
};

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const question = typeof body.question === "string" ? body.question.trim() : "";
  if (!question) return NextResponse.json({ answer: "Please ask a question." }, { status: 400 });

  if (!process.env.OPENAI_API_KEY) return NextResponse.json({ answer: fallback(question), mode: "local" });

  try {
    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const response = await client.responses.create({
      model: process.env.OPENAI_MODEL || "gpt-5.6-luna",
      instructions: `You are the portfolio assistant for Hari Om Mishra. Answer only from the verified portfolio source below. Do not invent employers, metrics, technologies, links, achievements, dates or responsibilities. If the source does not support an answer, say that the portfolio does not document it. Keep answers concise and useful.\n\nSOURCE:\n${source}`,
      input: question,
    });
    return NextResponse.json({ answer: response.output_text, mode: "openai" });
  } catch {
    return NextResponse.json({ answer: fallback(question), mode: "local-fallback" });
  }
}
