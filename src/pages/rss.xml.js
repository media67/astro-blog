import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get() {
  return rss({
    title: "Sam's Blog",
    description: 'My journey learning web and mobile dev',
    site: 'https://thunderous-youtiao-abfca1.netlify.app',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>en-us</language>`,
  });
}