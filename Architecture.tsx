"use client";
import { motion } from "motion/react";

export function Architecture({ nodes }: { nodes: string[] }) {
  return <div className="architecture" aria-label="Project architecture diagram">
    {nodes.map((node, i) => <div className="arch-row" key={node}>
      <motion.div className="arch-node" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .08 }}>{node}</motion.div>
      {i < nodes.length - 1 && <motion.div className="arch-line" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: i * .08 + .1 }} />}
    </div>)}
  </div>;
}
