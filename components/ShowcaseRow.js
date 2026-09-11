// components/ShowcaseRow.js
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// How far (px) a drag must travel before we treat it as a swipe to the next/prev slide.
const SWIPE_THRESHOLD = 50;

const slideVariants = {
  enter: (dir) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
};

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
  const [direction, setDirection] = useState(0);

  const goTo = (i) => {
    setDirection(i > active ? 1 : -1);
    setActive(i);
  };

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

      {/* Desktop / tablet — hover-to-grow row (unchanged) */}
      <div className="hidden sm:flex gap-4 md:gap-5 h-[300px] md:h-[440px]">
        {items.map((item, i) => {
          const isActive = i === active;
          return (
            <div
              key={item.title}
              onMouseEnter={() => setActive(i)}
              onClick={() => setActive(i)}
              className="relative rounded-[24px] overflow-hidden shadow-sm transition-[flex-grow] duration-500 ease-out cursor-pointer"
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

      {/* Mobile — swipeable slider, same expanded-card design for every slide */}
      <div className="sm:hidden">
        <div className="relative overflow-hidden rounded-[24px]">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={active}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.8}
              onDragEnd={(_, info) => {
                if (info.offset.x < -SWIPE_THRESHOLD && active < items.length - 1) {
                  setDirection(1);
                  setActive((a) => a + 1);
                } else if (info.offset.x > SWIPE_THRESHOLD && active > 0) {
                  setDirection(-1);
                  setActive((a) => a - 1);
                }
              }}
              className="flex flex-col rounded-[24px] overflow-hidden shadow-sm bg-white border border-platinum-200 cursor-grab active:cursor-grabbing"
            >
              <div className="relative w-full h-48">
                <Image
                  src={items[active].image}
                  alt={items[active].alt}
                  fill
                  className="object-cover pointer-events-none"
                  draggable={false}
                />
                <span className="absolute bottom-4 right-5 font-mono text-xs text-white/80 select-none">
                  0{active + 1}
                </span>
              </div>
              <div className="p-6 flex flex-col justify-center relative">
                <h3 className="text-xl text-ink-900 font-medium mb-3 font-display">
                  {items[active].title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-6">
                  {items[active].description}
                </p>
                <Link
                  href={items[active].ctaHref}
                  className="inline-flex items-center gap-2 self-start rounded-full bg-navy-950 text-platinum-50 text-xs font-mono uppercase tracking-wider px-5 py-3 hover:bg-gold-500 hover:text-navy-950 transition"
                >
                  <span aria-hidden>→</span>
                  {items[active].ctaLabel}
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2 mt-5">
          {items.map((item, i) => (
            <button
              key={item.title}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === active ? "w-6 bg-navy-950" : "w-2 bg-platinum-200"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}