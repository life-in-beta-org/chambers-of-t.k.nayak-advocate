import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, "../dist");
const indexPath = path.join(distDir, "index.html");

if (!fs.existsSync(indexPath)) {
  console.error("dist/index.html not found. Run vite build first.");
  process.exit(1);
}

const indexContent = fs.readFileSync(indexPath, "utf8");

// Universal 404 fallback for GitHub Pages
fs.writeFileSync(path.join(distDir, "404.html"), indexContent);
console.log("Created dist/404.html");

// Known client-side routes
const routes = [
  "about",
  "people",
  "our-team",
  "practice-areas",
  "achievements",
  "awards",
  "media",
  "offices",
  "office",
  "contact",
  "disclaimer",
  "privacy-policy",
  "policy",
  "legal-updates",
];

for (const route of routes) {
  const routeDir = path.join(distDir, route);
  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }
  fs.writeFileSync(path.join(routeDir, "index.html"), indexContent);
  fs.writeFileSync(path.join(distDir, `${route}.html`), indexContent);
}

console.log(`Generated route static files for ${routes.length} routes.`);
