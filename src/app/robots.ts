export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://farhanahmed.vercel.app/sitemap.xml",
  };
}