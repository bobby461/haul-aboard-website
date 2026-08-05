import Image, { type ImageProps } from "next/image";
import { publicImageExists } from "@/lib/image-exists";

// SeoImage wraps next/image and:
//   - enforces alt text (would TS-fail without it)
//   - falls back to a labeled gray placeholder if the file isn't in /public/ yet
// Use it for every photo on the site so the build never crashes on a
// missing image and so SEO audits always see a sized, alt-tagged image
// when the photo IS there.

type Props = Omit<ImageProps, "alt"> & {
  alt: string;
};

export function SeoImage({ src, alt, ...rest }: Props) {
  const stringSrc = typeof src === "string" ? src : "";
  if (stringSrc && !publicImageExists(stringSrc)) {
    return (
      <div className="photo-placeholder">
        <span>
          Replace with your photo:
          <br />
          {stringSrc}
        </span>
      </div>
    );
  }
  return <Image src={src} alt={alt} {...rest} />;
}
