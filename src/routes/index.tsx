import { createFileRoute, Link } from "@tanstack/react-router";
import { NAV_GROUPS, PAGE_BY_SLUG } from "@/lib/site-content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JUN888 — Cổng thông tin giải trí trực tuyến hàng đầu" },
      { name: "description", content: "JUN888 — Cổng thông tin casino, thể thao, xổ số và game bài. Hướng dẫn, mẹo, khuyến mãi cập nhật 2026." },
      { property: "og:title", content: "JUN888 — Cổng thông tin giải trí trực tuyến" },
      { property: "og:description", content: "Casino, thể thao, xổ số, poker — kiến thức và đánh giá đầy đủ tại JUN888." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const CATEGORIES = [
  { slug: "casino-jun88", label: "Casino", icon: "🎰", desc: "Sòng bài trực tuyến đẳng cấp" },
  { slug: "the-thao", label: "Thể thao", icon: "⚽", desc: "Cá cược thể thao toàn cầu" },
  { slug: "esport", label: "Esport", icon: "🎮", desc: "Giải đấu Esport hàng đầu" },
  { slug: "xo-so", label: "Xổ số", icon: "🎟️", desc: "Lô đề, xổ số 3 miền" },
  { slug: "no-hu", label: "Nổ hũ", icon: "💰", desc: "Jackpot tích lũy khổng lồ" },
  { slug: "poker-jun88", label: "Poker", icon: "♠️", desc: "Bài Texas Hold'em" },
  { slug: "baccarat-jun88", label: "Baccarat", icon: "🃏", desc: "Game bài Châu Á" },
  { slug: "tai-xiu-jun88", label: "Tài Xỉu", icon: "🎲", desc: "Cò quay 3 xúc xắc" },
];

const PROMOS = [
  { title: "Thưởng chào mừng 200%", desc: "Dành cho thành viên mới đăng ký lần đầu trong tháng.", tag: "MỚI" },
  { title: "Hoàn trả 1.5% mỗi ngày", desc: "Áp dụng cho tất cả sản phẩm casino và thể thao.", tag: "HOT" },
  { title: "Nạp lại 50% mỗi tuần", desc: "Ưu đãi đặc biệt dành cho thành viên VIP." , tag: "VIP" },
];

const GUIDES = [
  "rake-la-gi-trong-poker",
  "bao-lo-la-gi",
  "cach-tinh-diem-lo",
  "giai-den-lo-de",
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 py-20 md:py-28 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/15 text-gold text-xs font-bold uppercase tracking-widest mb-6">
            Cổng thông tin giải trí #1
          </span>
          <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight mb-6">
            Chào mừng đến với <span className="text-gold">JUN888</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Cẩm nang đầy đủ về casino, thể thao, xổ số, poker và mọi trò chơi giải trí trực tuyến — được cập nhật bởi đội ngũ chuyên gia.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to={"/dang-ky-jun88" as string} className="btn-gold text-base">🚀 Bắt đầu ngay</Link>
            <Link to={"/khuyen-mai" as string} className="btn-primary-hero text-base">Xem khuyến mãi</Link>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[
              { v: "10M+", l: "Người chơi" },
              { v: "200+", l: "Trò chơi" },
              { v: "24/7", l: "Hỗ trợ" },
            ].map((s) => (
              <div key={s.l} className="rounded-xl border border-border bg-card/40 backdrop-blur p-4">
                <div className="text-2xl md:text-3xl font-black text-gold">{s.v}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <SectionHeader title="Danh mục chính" sub="Khám phá các trò chơi và bộ môn cá cược phổ biến nhất" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {CATEGORIES.map((c) => (
            <Link
              key={c.slug}
              to={`/${c.slug}` as string}
              className="group rounded-2xl border border-border gradient-card p-6 card-hover"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{c.icon}</div>
              <div className="font-bold text-lg">{c.label}</div>
              <div className="text-sm text-muted-foreground mt-1">{c.desc}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Promotions */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <SectionHeader title="Khuyến mãi nổi bật" sub="Ưu đãi mới nhất dành cho thành viên" cta={{ to: "/khuyen-mai", label: "Tất cả khuyến mãi →" }} />
        <div className="grid md:grid-cols-3 gap-5">
          {PROMOS.map((p) => (
            <div key={p.title} className="rounded-2xl border border-border gradient-card p-6 relative overflow-hidden">
              <span className="absolute top-4 right-4 px-2 py-1 rounded-md bg-gold text-gold-foreground text-xs font-black">
                {p.tag}
              </span>
              <h3 className="text-xl font-bold mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
              <Link to={"/khuyen-mai" as string} className="text-sm font-semibold text-gold hover:underline">
                Nhận ngay →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Sports + Casino + Lottery groups */}
      <section className="mx-auto max-w-7xl px-4 py-16 space-y-12">
        {NAV_GROUPS.slice(0, 4).map((g) => (
          <div key={g.label}>
            <SectionHeader title={g.label} sub={`Khám phá đầy đủ chủ đề trong nhóm ${g.label.toLowerCase()}`} />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {g.items.slice(0, 8).map((it) => {
                const pg = PAGE_BY_SLUG[it.slug];
                return (
                  <Link
                    key={it.slug}
                    to={`/${it.slug}` as string}
                    className="rounded-xl border border-border bg-card/60 p-4 card-hover"
                  >
                    <div className="font-bold text-sm mb-1">{it.label}</div>
                    <div className="text-xs text-muted-foreground line-clamp-2">{pg?.description}</div>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </section>

      {/* News & Guides */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <SectionHeader title="Tin tức & Hướng dẫn" sub="Bài viết mới nhất từ ban biên tập" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {GUIDES.map((slug) => {
            const pg = PAGE_BY_SLUG[slug];
            if (!pg) return null;
            return (
              <Link key={slug} to={`/${slug}` as string} className="rounded-2xl border border-border gradient-card overflow-hidden card-hover">
                <div className="aspect-video gradient-hero relative">
                  <div className="absolute inset-0 grid place-items-center text-5xl opacity-30">📖</div>
                </div>
                <div className="p-5">
                  <div className="text-xs text-gold mb-2">{pg.category}</div>
                  <h3 className="font-bold leading-snug mb-2">{pg.h1}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{pg.description}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-16">
        <SectionHeader title="Câu hỏi thường gặp" sub="" />
        <div className="space-y-3">
          {[
            { q: "JUN888 có an toàn không?", a: "Chúng tôi cung cấp thông tin minh bạch, khuyến khích người chơi tìm hiểu kỹ trước khi tham gia bất kỳ nền tảng nào." },
            { q: "Tôi có thể chơi trên điện thoại không?", a: "Có. Tất cả nội dung đều được tối ưu cho thiết bị di động và máy tính bảng." },
            { q: "Có hỗ trợ tiếng Việt không?", a: "Toàn bộ trang được viết bằng tiếng Việt và đội ngũ hỗ trợ làm việc 24/7." },
            { q: "Tôi nên bắt đầu từ đâu?", a: "Đọc trang Đăng ký và Khuyến mãi để hiểu rõ quy trình và lựa chọn ưu đãi phù hợp." },
          ].map((f, i) => (
            <details key={i} className="group rounded-xl border border-border bg-card/60 p-5">
              <summary className="cursor-pointer font-semibold list-none flex justify-between items-center">
                <span>{f.q}</span>
                <span className="text-gold transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}

function SectionHeader({ title, sub, cta }: { title: string; sub?: string; cta?: { to: string; label: string } }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
      <div>
        <h2 className="text-3xl md:text-4xl font-black">{title}</h2>
        {sub && <p className="text-muted-foreground mt-2">{sub}</p>}
      </div>
      {cta && (
        <Link to={cta.to as string} className="text-sm font-semibold text-gold hover:underline">
          {cta.label}
        </Link>
      )}
    </div>
  );
}
