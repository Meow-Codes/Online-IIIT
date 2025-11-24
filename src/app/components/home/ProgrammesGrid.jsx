'use client';

import Link from "next/link";
import { motion } from "framer-motion";

const programmes = [
  {
    title: "Online M.Tech in CSE",
    description: "Build advanced expertise in computer science and engineering.",
    href: "https://onlinecse.iiitdwd.ac.in",
    accent: "from-[#1b91ff]/50 to-transparent",
    badge: "border-white/30 bg-white/10 text-white",
    button: "bg-white text-[#041b39] hover:bg-white/90 hover:text-[#031630] focus-visible:ring-white/60",
    delay: 0,
  },
  {
    title: "Online M.Tech in DSAI",
    description: "Gain practical knowledge in Data Science and Artificial Intelligence.",
    href: "https://onlinedsai.iiitdwd.ac.in",
    accent: "from-[#90ffef]/60 to-transparent",
    badge: "border-[#90ffef]/50 bg-[#90ffef]/10 text-[#90ffef]",
    button:
      "bg-gradient-to-r from-[#00e0ff] to-[#00ffa3] text-[#041b39] hover:opacity-90 focus-visible:ring-[#00ffa3]/60",
    delay: 0.15,
  },
];

export default function ProgrammesGrid() {
  return (
    <section className="relative z-10 px-6 py-24 sm:px-10">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
        {programmes.map((programme) => (
          <motion.div
            key={programme.title}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: programme.delay }}
            className="group relative"
          >
            <div className="absolute inset-0 rounded-[44px] bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
            <div className="relative h-full overflow-hidden rounded-[36px] bg-gradient-to-br from-[#03132a] via-[#051838] to-[#020b18] p-[1.5px] shadow-[0_25px_80px_rgba(0,0,0,0.45)]">
              <div className="flex h-full flex-col justify-between rounded-[34px] border border-white/5 bg-[#04142d] px-10 py-12">
                <div className="space-y-5">
                  <span
                    className={`inline-flex w-fit items-center rounded-full border px-6 py-2 text-sm tracking-wide ${programme.badge}`}
                  >
                    {programme.title}
                  </span>
                  <p className="text-4xl font-semibold text-white">{programme.title}</p>
                  <p className="text-lg text-white/80">{programme.description}</p>
                </div>
                <div className="pt-8">
                  <Link
                    className={`inline-flex items-center justify-center rounded-full px-10 py-4 text-lg font-semibold shadow-[0_15px_40px_rgba(0,0,0,0.35)] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${programme.button}`}
                    href={programme.href}
                    target={programme.href && programme.href.startsWith('http') ? '_blank' : undefined}
                    rel={programme.href && programme.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    View Programme
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
