/* Inter (Latin) for @vercel/og / next/og */
const JS = "https://cdn.jsdelivr.net/npm/@fontsource/inter@5.0.16/files/";

export type InterLatinWoff =
  | "inter-latin-300-normal.woff"
  | "inter-latin-400-normal.woff"
  | "inter-latin-600-normal.woff"
  | "inter-latin-700-normal.woff";

export async function getInterWoff(file: InterLatinWoff): Promise<ArrayBuffer> {
  const res = await fetch(new URL(file, JS));
  if (!res.ok) {
    throw new Error(`Failed to load font ${file}: ${res.status}`);
  }
  return res.arrayBuffer();
}
