#!/usr/bin/env node
/**
 * Generate OG social preview images by capturing screenshots from the social-export page.
 * Usage: Start the dev server first, then run: node scripts/generate-og-images.mjs
 */
import { chromium } from 'playwright-core';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputDir = path.join(__dirname, '..', 'public');

const BASE_URL = process.env.BASE_URL || 'http://localhost:4321';

const images = [
  { id: 'og-1', filename: 'og-1-minimal.png' },
  { id: 'og-2', filename: 'og-2-tagline.png' },
  { id: 'og-3', filename: 'og-3-features.png' },
  { id: 'og-4', filename: 'og-4-bold.png' },
];

async function main() {
  const browser = await chromium.launch({
    executablePath: '/root/.cache/ms-playwright/chromium-1194/chrome-linux/chrome',
  });
  const page = await browser.newPage();
  // Use a taller viewport to prevent Astro dev toolbar from overlapping
  page.setViewportSize({ width: 1200, height: 800 });

  for (const img of images) {
    const url = `${BASE_URL}/social-export#${img.id}`;
    console.log(`Capturing ${img.id} from ${url}...`);
    await page.goto(url, { waitUntil: 'networkidle' });

    // Wait for fonts to load
    await page.evaluate(() => document.fonts.ready);

    // Hide Astro dev toolbar if present
    await page.evaluate(() => {
      const toolbar = document.querySelector('astro-dev-toolbar');
      if (toolbar) toolbar.style.display = 'none';
    });

    const element = await page.locator(`#${img.id}`);
    await element.screenshot({
      path: path.join(outputDir, img.filename),
      type: 'png',
    });
    console.log(`  -> saved ${img.filename}`);
  }

  await browser.close();
  console.log('Done! All OG images generated.');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
