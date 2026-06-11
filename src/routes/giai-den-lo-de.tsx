import { createFileRoute } from "@tanstack/react-router";
import { PAGE_BY_SLUG } from "@/lib/site-content";
import { ArticlePage, articleHead } from "@/components/site/ArticlePage";

const page = PAGE_BY_SLUG["giai-den-lo-de"];

export const Route = createFileRoute("/giai-den-lo-de")({
  head: () => articleHead(page),
  component: () => <ArticlePage page={page} />,
});
