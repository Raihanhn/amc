// components/ShowcaseRow.js
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Parent controls the stagger timing between words.
const headingContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.05,
    },
  },
};

// Each word rises + fades in — the stagger above is what creates the "wave".
const wordVariant = {
  hidden: { opacity: 0, y: 34 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

/**
 * items: [{ image, alt, title, description, ctaLabel, ctaHref }] — exactly 3 items
 * eyebrowWord / boldWord: the two-tone heading, e.g. "Popular" (outlined) + "Pathways" (solid)
 */
export default function ShowcaseRow({ eyebrowWord, boldWord, items }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <motion.h2
        className="text-3xl md:text-4xl font-medium mb-10 md:mb-14 tracking-tight"
        variants={headingContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.7 }}
      >
        <motion.span variants={wordVariant} className="showcase-outline inline-block">
          {eyebrowWord}
        </motion.span>{" "}
        <motion.span variants={wordVariant} className="text-ink-900 inline-block">
          {boldWord}
        </motion.span>
      </motion.h2>

      <div className="flex flex-col sm:flex-row gap-4 md:gap-5 h-auto sm:h-[300px] md:h-[440px]">
        {items.map((item, i) => {
          const isActive = i === active;
          return (
            <div
              key={item.title}
              onMouseEnter={() => setActive(i)}
              onClick={() => setActive(i)}
              className="relative rounded-[24px] overflow-hidden shadow-sm transition-[flex-grow] duration-500 ease-out cursor-pointer min-h-[220px] sm:min-h-0"
              style={{ flexGrow: isActive ? 2.2 : 1, flexBasis: 0 }}
            >
              {isActive ? (
                <div className="flex flex-col sm:flex-row h-full bg-white border border-platinum-200">
                  <div className="relative w-full sm:w-2/5 h-48 sm:h-full shrink-0">
                    <Image src={item.image} alt={item.alt} fill className="object-cover" />
                  </div>
                  <div className="flex-1 p-6 md:p-8 flex flex-col justify-center relative">
                    <h3 className="text-xl md:text-2xl text-ink-900 font-medium mb-3 font-display">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed mb-6">
                      {item.description}
                    </p>
                    <Link
                      href={item.ctaHref}
                      className="inline-flex items-center gap-2 self-start rounded-full bg-navy-950 text-platinum-50 text-xs font-mono uppercase tracking-wider px-5 py-3 hover:bg-gold-500 hover:text-navy-950 transition"
                    >
                      <span aria-hidden>→</span>
                      {item.ctaLabel}
                    </Link>
                    <span className="absolute bottom-4 right-5 font-mono text-xs text-platinum-200 select-none">
                      0{i + 1}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="relative w-full h-full">
                  <Image src={item.image} alt={item.alt} fill className="object-cover" />
                  <div className="absolute inset-0 bg-navy-950/10" />
                  <span className="absolute bottom-4 right-5 font-mono text-xs text-white/80 select-none">
                    0{i + 1}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}