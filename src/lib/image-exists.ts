import fs from "node:fs";
import path from "node:path";

// Server-side check whether a path under /public/ resolves to a real file.
// Used by SeoImage so we can render a labeled placeholder when a photo
// hasn't been uploaded yet — never a broken image icon.
export function publicImageExists(publicPath: string): boolean {
  if (!publicPath) return false;
  const trimmed = publicPath.startsWith("/") ? publicPath.slice(1) : publicPath;
  const fullPath = path.join(process.cwd(), "public", trimmed);
  try {
    return fs.statSync(fullPath).isFile();
  } catch {
    return false;
  }
}
