import { createFileRoute } from "@tanstack/react-router";
import { PAGE_BY_SLUG } from "@/lib/site-content";
import { ArticlePage, articleHead } from "@/components/site/ArticlePage";

const page = PAGE_BY_SLUG["gioi-thieu"];

export const Route = createFileRoute("/gioi-thieu")({
  head: () => articleHead(page),
  component: () => <ArticlePage page={page} />,
});
