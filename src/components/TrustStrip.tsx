import {
  ShieldCheck,
  Shield,
  Clock,
  BadgeDollarSign,
  Home,
  CalendarCheck,
  type LucideIcon,
} from "lucide-react";
import { homepage } from "@/lib/content";

// Map content.ts icon keys → real Lucide React components.
// Stroke-only orange icons (the brief is explicit: stroke style, never
// filled). The CSS in globals.css enforces the orange stroke + 2px width.
const iconMap: Record<string, LucideIcon> = {
  "shield-check": ShieldCheck,
  shield: Shield,
  clock: Clock,
  "badge-dollar": BadgeDollarSign,
  home: Home,
  "calendar-check": CalendarCheck,
};

function TrustItem({
  icon,
  big,
  small,
}: {
  icon: string;
  big: string;
  small: string;
}) {
  const Icon = iconMap[icon] ?? Shield;
  return (
    <div className="trust-item">
      <div className="trust-icon">
        <Icon aria-hidden="true" />
      </div>
      <div className="trust-text">
        <div className="lg">{big}</div>
        <div className="sm">{small}</div>
      </div>
    </div>
  );
}

export function TrustStrip() {
  // Marquee needs the items duplicated so the loop seamlessly cycles
  // (track translates from 0 → -50%). Component owns the duplication —
  // content.ts only lists items once.
  const items = homepage.trustStrip;

  return (
    <section className="trust-strip" aria-label="Trust signals">
      <div className="trust-track">
        {[...items, ...items].map((it, i) => (
          <span
            key={`${it.icon}-${i}`}
            style={{ display: "inline-flex", alignItems: "center", gap: 16 }}
          >
            <TrustItem icon={it.icon} big={it.big} small={it.small} />
            <span className="trust-divider" aria-hidden="true" />
          </span>
        ))}
      </div>
    </section>
  );
}
