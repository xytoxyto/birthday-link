"use client";
"use client";
import React, { useState, useRef } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
  tier?: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, tier }) => {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => setOpen((prev) => !prev);
  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleToggle();
    }
  };

  return (
    <div className="rounded-lg bg-white/5 text-white border border-white/10">
      <button
        className="w-full flex items-center justify-between font-semibold text-lg px-5 py-4 focus:outline-none focus:ring-2 focus:ring-accent/60 transition group"
        aria-expanded={open}
        aria-controls={`faq-content-${question.replace(/\s+/g, "-")}`}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
      >
        <span className="flex items-center">
          {question}
          {tier && (
            <span className="ml-2 px-2 py-0.5 rounded bg-blue-700 text-xs font-bold uppercase tracking-wide">
              {tier}
            </span>
          )}
        </span>
        <span
          className={`ml-4 transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"}`}
          aria-hidden="true"
        >
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6"/></svg>
        </span>
      </button>
      <div
        id={`faq-content-${question.replace(/\s+/g, "-")}`}
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 px-5"
        style={{
          maxHeight: open ? contentRef.current?.scrollHeight : 0,
          opacity: open ? 1 : 0,
        }}
        aria-hidden={!open}
      >
        <p className="text-white/80 text-base pb-4 pt-1">{answer}</p>
      </div>
    </div>
  );
};

export default FAQItem;
