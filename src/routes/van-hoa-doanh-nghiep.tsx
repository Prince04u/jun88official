import { createFileRoute } from "@tanstack/react-router";
import { PAGE_BY_SLUG } from "@/lib/site-content";
import { ArticlePage, articleHead } from "@/components/site/ArticlePage";

const page = PAGE_BY_SLUG["van-hoa-doanh-nghiep"];

export const Route = createFileRoute("/van-hoa-doanh-nghiep")({
  head: () => articleHead(page),
  component: () => <ArticlePage page={page} />,
});
