import { createFileRoute } from "@tanstack/react-router";
import { PAGE_BY_SLUG } from "@/lib/site-content";
import { ArticlePage, articleHead } from "@/components/site/ArticlePage";

const page = PAGE_BY_SLUG["nap-tien-jun88"];

export const Route = createFileRoute("/nap-tien-jun88")({
  head: () => articleHead(page),
  component: () => <ArticlePage page={page} />,
});
