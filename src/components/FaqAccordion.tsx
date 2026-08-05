"use client";

import { useState } from "react";

type FaqItem = { q: string; a: string };

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0); // first item open by default

  return (
    <div className="faq-list">
      {items.map((item, i) => {
        const open = i === openIdx;
        return (
          <div className={`faq-item ${open ? "open" : ""}`} key={i}>
            <button
              className="faq-question"
              aria-expanded={open}
              aria-controls={`faq-answer-${i}`}
              onClick={() => setOpenIdx(open ? null : i)}
            >
              {item.q}
              <span className="faq-toggle" aria-hidden="true">
                +
              </span>
            </button>
            <div
              className="faq-answer"
              id={`faq-answer-${i}`}
              role="region"
            >
              {item.a}
            </div>
          </div>
        );
      })}
    </div>
  );
}
