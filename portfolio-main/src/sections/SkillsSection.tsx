import { motion } from "framer-motion";
import type { ReactElement } from "react";
import {
  FaBrain,
  FaChartLine,
  FaChartPie,
  FaDatabase,
  FaFlask,
  FaMagic,
  FaTable,
} from "react-icons/fa";
import { FiBarChart2, FiCpu, FiLink2, FiMessageCircle, FiUploadCloud } from "react-icons/fi";
import { HiOutlineCalculator } from "react-icons/hi";
import { SiPython } from "react-icons/si";
import { TbBraces } from "react-icons/tb";
import SectionHeading from "../components/SectionHeading";
import { techStack } from "../data/portfolio";

const iconByKey: Record<string, ReactElement> = {
  chain: <FiLink2 size={24} />,
  llm: <FiCpu size={24} />,
  openai: <FiMessageCircle size={24} />,
  python: <SiPython size={24} />,
  science: <FaFlask size={24} />,
  data: <FaTable size={24} />,
  array: <TbBraces size={24} />,
  ml: <FaBrain size={24} />,
  datascience: <FaChartPie size={24} />,
  database: <FaDatabase size={24} />,
  chart: <FaChartLine size={24} />,
  powerbi: <FiBarChart2 size={24} />,
  dax: <HiOutlineCalculator size={24} />,
  predict: <FaMagic size={24} />,
  analytics: <FiBarChart2 size={24} />,
  deploy: <FiUploadCloud size={24} />,
};

export default function SkillsSection() {
  return (
    <div className="px-4 md:px-8">
      <div className="mx-auto w-full max-w-6xl rounded-3xl border border-border bg-gradient-to-br from-[#0f1533]/95 via-[#101736]/85 to-[#0a1027]/95 p-6 shadow-soft md:p-10">
        <div className="relative overflow-hidden rounded-3xl">
          <div className="pointer-events-none absolute -left-20 top-8 h-48 w-48 rounded-full bg-accent/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 bottom-0 h-56 w-56 rounded-full bg-accent2/20 blur-3xl" />

          <SectionHeading title="Tech Stack" />

          <div className="relative grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {techStack.map((item, index) => (
              <motion.article
                key={item.name}
                className="group section-shell flex min-h-36 flex-col items-center justify-center rounded-2xl border border-border/80 p-4 text-center"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -7, scale: 1.03 }}
              >
                <div className="mb-3 rounded-xl border border-border/60 bg-bg-soft/70 p-3 text-accent2 shadow-lg shadow-accent2/10 transition group-hover:shadow-accent2/40">
                  {iconByKey[item.icon]}
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-text sm:text-sm">
                  {item.name}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
