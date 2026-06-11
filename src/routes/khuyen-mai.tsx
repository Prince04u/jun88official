import { createFileRoute } from "@tanstack/react-router";
import { PAGE_BY_SLUG } from "@/lib/site-content";
import { ArticlePage, articleHead } from "@/components/site/ArticlePage";

const page = PAGE_BY_SLUG["khuyen-mai"];

export const Route = createFileRoute("/khuyen-mai")({
  head: () => articleHead(page),
  component: () => <ArticlePage page={page} />,
});
