import Link from "next/link";
import { business, homepage } from "@/lib/content";

// Big orange "Ready when you are." CTA block at the bottom of every
// page. Defaults to the homepage copy from content.ts but accepts
// overrides so service / location pages can customize the pre-line
// without duplicating the layout.
export function BigCta({
  pre,
  huge,
  primaryLabel,
  secondaryLabel,
}: {
  pre?: string;
  huge?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
}) {
  const c = homepage.bigCta;
  const _pre = pre ?? c.pre;
  const _huge = huge ?? c.huge;
  const _primary = primaryLabel ?? c.primaryLabel;
  const _secondary = secondaryLabel ?? c.secondaryLabel;

  return (
    <section className="cta-block" id="book">
      <div className="pre">{_pre}</div>
      <div className="huge">
        {_huge.split("\n").map((line, i, arr) => (
          <span key={i}>
            {line}
            {i < arr.length - 1 && <br />}
          </span>
        ))}
      </div>
      <div className="button-row">
        <Link href="/contact" className="btn-dark" data-cta="estimate-bottom">
          {_primary}
        </Link>
        <a
          href={`tel:${business.phoneRaw}`}
          className="btn-outline"
          data-cta="phone-bottom"
        >
          {_secondary}
        </a>
      </div>
    </section>
  );
}
