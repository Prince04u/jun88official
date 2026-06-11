import { createFileRoute } from "@tanstack/react-router";
import { PAGE_BY_SLUG } from "@/lib/site-content";
import { ArticlePage, articleHead } from "@/components/site/ArticlePage";

const page = PAGE_BY_SLUG["tuyen-dung"];

export const Route = createFileRoute("/tuyen-dung")({
  head: () => articleHead(page),
  component: () => <ArticlePage page={page} />,
});
