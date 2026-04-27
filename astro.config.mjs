// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

const base = process.env.BASE_PATH || "/";
const basePrefix = base.replace(/\/$/, "");

function remarkBaseUrl() {
  return (tree) => {
    if (!basePrefix) return;
    const walk = (node) => {
      if (node && typeof node === "object") {
        if (node.type === "link" && typeof node.url === "string") {
          const u = node.url;
          if (
            u.startsWith("/") &&
            !u.startsWith("//") &&
            !u.startsWith(basePrefix + "/") &&
            u !== basePrefix
          ) {
            node.url = basePrefix + u;
          }
        }
        if (Array.isArray(node.children)) {
          node.children.forEach(walk);
        }
      }
    };
    walk(tree);
  };
}

export default defineConfig({
  site: "https://pythonhumanities.com",
  base,
  integrations: [mdx()],
  markdown: {
    remarkPlugins: [remarkBaseUrl],
    shikiConfig: {
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
      defaultColor: false,
      wrap: true,
    },
  },
});
