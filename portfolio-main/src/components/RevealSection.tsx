import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

type RevealSectionProps = PropsWithChildren<{
  id: string;
  direction: "left" | "right";
  delay?: number;
  className?: string;
}>;

export default function RevealSection({
  id,
  direction,
  delay = 0,
  className = "",
  children,
}: RevealSectionProps) {
  const x = direction === "left" ? -44 : 44;

  return (
    <motion.section
      id={id}
      className={`scroll-mt-28 ${className}`.trim()}
      initial={{ opacity: 0, x, scale: 0.985, filter: "blur(8px) brightness(1.08)" }}
      whileInView={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px) brightness(1)" }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.75, ease: "easeOut", delay }}
    >
      {children}
    </motion.section>
  );
}
