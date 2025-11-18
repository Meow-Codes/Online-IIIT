'use client';

import Link from "next/link";
import { motion } from "framer-motion";

const programmes = [
  {
    title: "Online M.Tech in CSE",
    description: "Build advanced expertise in computer science and engineering.",
    href: "#",
    accent: "from-[#1b91ff]/50 to-transparent",
    badge: "border-white/30 bg-white/10 text-white",
    button: "bg-white text-[#041b39] hover:bg-white/90 hover:text-[#031630] focus-visible:ring-white/60",
    delay: 0,
  },
  {
    title: "Online M.Tech in DSAI",
    description: "Gain practical knowledge in Data Science and Artificial Intelligence.",
    href: "https://online.iiitdwd.ac.in",
    accent: "from-[#90ffef]/60 to-transparent",
    badge: "border-[#90ffef]/50 bg-[#90ffef]/10 text-[#90ffef]",
    button:
      "bg-gradient-to-r from-[#00e0ff] to-[#00ffa3] text-[#041b39] hover:opacity-90 focus-visible:ring-[#00ffa3]/60",
    delay: 0.15,
  },
];

export default function MtechPage() {
  return (
    <div className="font-roboto bg-[#010611] text-white">
      <section className="relative px-6 pt-20 pb-24 sm:px-10">
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
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${programme.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-70`}
              />
              <div className="relative h-full overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-1 shadow-[0_25px_65px_rgba(0,0,0,0.35)] backdrop-blur">
                <div className="rounded-[26px] border border-white/5 bg-[#041b39]/80 p-8">
                  <div className="space-y-4">
                    <span
                      className={`inline-flex w-fit items-center rounded-full border px-4 py-1 text-xs tracking-wide ${programme.badge}`}
                    >
                      {programme.title}
                    </span>
                    <p className="text-3xl font-semibold text-white">{programme.title}</p>
                    <p className="text-base text-white/75">{programme.description}</p>
                  </div>
                  <div className="mt-6 flex">
                    <Link
                      className={`inline-flex rounded-full px-8 py-3 text-base font-semibold shadow-lg transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${programme.button}`}
                      href={programme.href}
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

      <footer className="border-t border-white/10 bg-[#01050d] py-10 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Indian Institute of Information Technology, Dharwad. All Rights Reserved.
      </footer>
    </div>
  );
}

