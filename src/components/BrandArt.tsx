// Hand-drawn vintage brand-element icons that echo the Haul Aboard brand
// board (anchor, hook, rope, plank, nail, trash can) plus a few service
// glyphs (couch, washer, box). Line-art, monochrome via currentColor, so
// they can be tinted navy or orange by their context. These stand in until
// the real illustrated brand marks are dropped in.
import type { SVGProps } from "react";

const base: SVGProps<SVGSVGElement> = {
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export function Anchor(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <circle cx="24" cy="8" r="3.2" />
      <line x1="24" y1="11" x2="24" y2="41" />
      <line x1="16" y1="18" x2="32" y2="18" />
      <path d="M9 29a15 15 0 0 0 30 0" />
      <path d="M9 29l-3-3M9 29l4-1M39 29l3-3M39 29l-4-1" />
    </svg>
  );
}

export function Hook(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <circle cx="24" cy="7" r="2.6" />
      <path d="M24 9.6V22a8.5 8.5 0 1 1-8.5 8.5" />
      <path d="M15.5 30.5l-2.5-3M15.5 30.5l3.2-1.2" />
    </svg>
  );
}

export function RopeKnot(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M11 31c6-15 20-15 26 0" />
      <path d="M11 17c6 15 20 15 26 0" />
      <circle cx="24" cy="24" r="2.4" />
    </svg>
  );
}

export function Plank(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <rect x="7" y="18" width="34" height="12" rx="2" />
      <path d="M7 24h34" opacity="0.5" />
      <circle cx="12" cy="24" r="1" />
      <circle cx="36" cy="24" r="1" />
    </svg>
  );
}

export function Nail(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M18 12h12l-2.5 5h-7z" fill="currentColor" />
      <line x1="24" y1="17" x2="24" y2="34" />
      <path d="M24 38l-1.8-4h3.6z" fill="currentColor" />
    </svg>
  );
}

export function TrashCan(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M15 16h18l-2 22H17z" />
      <line x1="12" y1="16" x2="36" y2="16" />
      <rect x="20" y="10" width="8" height="4" rx="1.2" />
      <path d="M21 21l1 12M27 21l-1 12M24 21v12" opacity="0.9" />
    </svg>
  );
}

export function Couch(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M9 27v-6a3 3 0 0 1 3-3h24a3 3 0 0 1 3 3v6" />
      <path d="M9 27a3 3 0 0 0-3 3v2h36v-2a3 3 0 0 0-3-3" />
      <path d="M9 27h30" />
      <line x1="11" y1="32" x2="11" y2="35" />
      <line x1="37" y1="32" x2="37" y2="35" />
    </svg>
  );
}

export function Washer(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <rect x="12" y="9" width="24" height="30" rx="2.5" />
      <line x1="12" y1="16" x2="36" y2="16" />
      <circle cx="24" cy="27" r="7.5" />
      <circle cx="24" cy="27" r="2.6" />
      <circle cx="17" cy="12.5" r="1" />
      <circle cx="21" cy="12.5" r="1" />
    </svg>
  );
}

export function Box(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M10 18l14-6 14 6-14 6z" />
      <path d="M10 18v14l14 6V24z" />
      <path d="M38 18v14l-14 6V24z" />
      <path d="M24 12v6" opacity="0.6" />
    </svg>
  );
}

// A small decorative divider strip of brand elements, like the brand board's
// "BRAND ELEMENTS" row. Renders navy line-art icons on cream.
export function BrandElementsStrip() {
  const Item = ({ children }: { children: React.ReactNode }) => (
    <span className="brand-el">{children}</span>
  );
  return (
    <div className="brand-elements" aria-hidden="true">
      <span className="brand-el-rule" />
      <Item><Anchor /></Item>
      <Item><Hook /></Item>
      <Item><RopeKnot /></Item>
      <Item><Plank /></Item>
      <Item><Nail /></Item>
      <Item><TrashCan /></Item>
      <span className="brand-el-script">We Haul It All!</span>
      <span className="brand-el-rule" />
    </div>
  );
}
