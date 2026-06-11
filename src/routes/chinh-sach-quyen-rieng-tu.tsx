import { createFileRoute } from "@tanstack/react-router";
import { PAGE_BY_SLUG } from "@/lib/site-content";
import { ArticlePage, articleHead } from "@/components/site/ArticlePage";

const page = PAGE_BY_SLUG["chinh-sach-quyen-rieng-tu"];

export const Route = createFileRoute("/chinh-sach-quyen-rieng-tu")({
  head: () => articleHead(page),
  component: () => <ArticlePage page={page} />,
});
