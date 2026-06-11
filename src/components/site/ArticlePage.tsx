import { Link } from "@tanstack/react-router";
import type { PageDef, Section } from "@/lib/site-content";
import { PAGE_BY_SLUG, LAST_UPDATED } from "@/lib/site-content";

interface Props {
  page: PageDef;
}

function SectionBlock({ s }: { s: Section }) {
  return (
    <>
      {s.paragraphs.map((para, i) => (
        <p key={i} className="text-base leading-relaxed text-foreground/90 mb-4">
          {para}
        </p>
      ))}

      {s.lists?.map((list, li) => (
        <div key={li} className="my-5 rounded-xl border border-border bg-card/40 p-5">
          {list.title && <h4 className="font-bold text-gold mb-3">{list.title}</h4>}
          <ul className="space-y-2">
            {list.items.map((it, i) => (
              <li key={i} className="flex gap-3 text-foreground/90">
                <span className="text-gold mt-1 shrink-0">▸</span>
                <span>{it}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {s.table && (
        <div className="my-6 overflow-x-auto rounded-xl border border-border">
          {s.table.title && (
            <div className="bg-card px-4 py-3 border-b border-border font-bold text-gold text-sm uppercase tracking-wide">
              {s.table.title}
            </div>
          )}
          <table className="w-full text-sm">
            <thead className="bg-secondary/60">
              <tr>
                {s.table.headers.map((h, i) => (
                  <th key={i} className="px-4 py-3 text-left font-bold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {s.table.rows.map((row, ri) => (
                <tr key={ri} className="border-t border-border hover:bg-accent/30">
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-4 py-3 text-foreground/90">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {s.prosCons && (
        <div className="my-6 grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-5">
            <h4 className="font-bold text-emerald-400 mb-3 flex items-center gap-2">
              <span>✓</span> Ưu điểm
            </h4>
            <ul className="space-y-2 text-sm">
              {s.prosCons.pros.map((it, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-emerald-400 mt-0.5">+</span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-5">
            <h4 className="font-bold text-destructive mb-3 flex items-center gap-2">
              <span>✕</span> Hạn chế
            </h4>
            <ul className="space-y-2 text-sm">
              {s.prosCons.cons.map((it, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-destructive mt-0.5">−</span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {s.quote && (
        <blockquote className="my-6 border-l-4 border-gold pl-5 py-2 italic text-lg text-foreground/80">
          {s.quote}
        </blockquote>
      )}
    </>
  );
}

export function ArticlePage({ page }: Props) {
  return (
    <article className="mx-auto max-w-4xl px-4 py-10">
      <nav className="text-xs text-muted-foreground mb-6 flex gap-2 items-center flex-wrap">
        <Link to="/" className="hover:text-gold">Trang chủ</Link>
        <span>/</span>
        <span className="text-gold">{page.category}</span>
        <span>/</span>
        <span className="text-foreground/80 truncate">{page.h1}</span>
      </nav>

      <header className="mb-8">
        <span className="inline-block px-3 py-1 rounded-full bg-primary/15 text-primary text-xs font-bold uppercase tracking-wider mb-4">
          {page.category}
        </span>
        <h1 className="text-4xl md:text-5xl font-black leading-tight mb-4">{page.h1}</h1>
        {page.intro.map((para, i) => (
          <p key={i} className={`text-lg leading-relaxed ${i === 0 ? "text-foreground/90" : "text-muted-foreground mt-3"}`}>
            {para}
          </p>
        ))}
        <div className="mt-5 text-xs text-muted-foreground flex flex-wrap gap-3 items-center">
          <span>✍️ Biên tập JUN888</span>
          <span>•</span>
          <span>📅 Cập nhật: {LAST_UPDATED}</span>
          <span>•</span>
          <span>⏱ {Math.max(8, page.sections.length * 3)} phút đọc</span>
          <span>•</span>
          <span>👁 Đã xem 12.4k</span>
        </div>
      </header>

      {/* Highlights */}
      {page.highlights.length > 0 && (
        <div className="mb-10 rounded-2xl border border-gold/30 gradient-card p-6">
          <h3 className="text-sm font-bold text-gold mb-4 uppercase tracking-wider">⭐ Điểm chính của bài viết</h3>
          <ul className="grid sm:grid-cols-2 gap-2">
            {page.highlights.map((h, i) => (
              <li key={i} className="flex gap-2 text-sm">
                <span className="text-gold">✓</span>
                <span className="text-foreground/90">{h}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* TOC */}
      {page.sections.length > 0 && (
        <div className="rounded-xl border border-border gradient-card p-5 mb-10">
          <h3 className="text-sm font-bold text-gold mb-3 uppercase tracking-wider">📋 Mục lục bài viết</h3>
          <ol className="space-y-1.5 text-sm">
            {page.sections.map((s, i) => (
              <li key={i}>
                <a href={`#sec-${i}`} className="text-muted-foreground hover:text-gold transition-colors">
                  {i + 1}. {s.heading}
                </a>
              </li>
            ))}
            {page.faqs.length > 0 && (
              <li>
                <a href="#faq" className="text-muted-foreground hover:text-gold transition-colors">
                  {page.sections.length + 1}. Câu hỏi thường gặp
                </a>
              </li>
            )}
          </ol>
        </div>
      )}

      <div className="space-y-12">
        {page.sections.map((s, i) => (
          <section key={i} id={`sec-${i}`} className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold mb-5 text-gold">{s.heading}</h2>
            <SectionBlock s={s} />
          </section>
        ))}
      </div>

      {/* CTA */}
      <div className="my-14 rounded-2xl gradient-hero border border-gold/30 p-8 text-center shadow-glow">
        <h3 className="text-2xl md:text-3xl font-bold mb-2">Sẵn sàng bắt đầu trải nghiệm?</h3>
        <p className="text-muted-foreground mb-5 max-w-xl mx-auto">
          Tham khảo hướng dẫn đăng ký và nhận ưu đãi chào mừng độc quyền dành cho thành viên mới năm 2026.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link to={"/dang-ky-jun88" as string} className="btn-gold">Đăng ký ngay →</Link>
          <Link to={"/khuyen-mai" as string} className="btn-primary-hero">Xem khuyến mãi</Link>
        </div>
      </div>

      {/* FAQ */}
      {page.faqs.length > 0 && (
        <section id="faq" className="my-14 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gold">Câu hỏi thường gặp</h2>
          <p className="text-muted-foreground mb-6">Giải đáp những thắc mắc phổ biến nhất về chủ đề này.</p>
          <div className="space-y-3">
            {page.faqs.map((f, i) => (
              <details key={i} className="group rounded-xl border border-border bg-card/60 p-5">
                <summary className="cursor-pointer font-semibold list-none flex justify-between items-center gap-4">
                  <span>{f.q}</span>
                  <span className="text-gold transition-transform group-open:rotate-45 text-xl shrink-0">+</span>
                </summary>
                <p className="mt-3 text-muted-foreground leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      {/* Related */}
      {page.related.length > 0 && (
        <section className="my-14">
          <h2 className="text-2xl font-bold mb-5">📚 Bài viết liên quan</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {page.related.map((slug) => {
              const r = PAGE_BY_SLUG[slug];
              if (!r) return null;
              return (
                <Link
                  key={slug}
                  to={`/${slug}` as string}
                  className="block rounded-xl border border-border gradient-card p-5 card-hover"
                >
                  <div className="text-xs text-gold mb-1">{r.category}</div>
                  <div className="font-bold mb-1">{r.h1}</div>
                  <p className="text-sm text-muted-foreground line-clamp-2">{r.description}</p>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* Author box */}
      <div className="my-12 rounded-2xl border border-border bg-card/60 p-6 flex gap-4 items-start">
        <div className="h-14 w-14 rounded-full gradient-gold grid place-items-center text-2xl font-black text-gold-foreground shrink-0">
          J
        </div>
        <div>
          <div className="font-bold">Ban biên tập JUN888</div>
          <div className="text-xs text-gold mt-0.5">Chuyên gia giải trí trực tuyến • 10+ năm kinh nghiệm</div>
          <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
            Đội ngũ chuyên gia của JUN888 gồm các nhà phân tích, biên tập viên và cựu người chơi chuyên nghiệp.
            Mọi nội dung đều được kiểm chứng đa chiều, đối chiếu với nhiều nguồn quốc tế và cập nhật định kỳ
            để phục vụ tốt nhất cộng đồng người chơi Việt Nam.
          </p>
        </div>
      </div>

      {/* JSON-LD: Article, FAQ, Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: page.h1,
            description: page.description,
            keywords: page.keywords.join(", "),
            author: { "@type": "Organization", name: "JUN888" },
            publisher: { "@type": "Organization", name: "JUN888" },
            dateModified: "2026-06-10",
            datePublished: "2026-01-15",
            mainEntityOfPage: `/${page.slug}`,
            inLanguage: "vi-VN",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Trang chủ", item: "/" },
              { "@type": "ListItem", position: 2, name: page.category, item: `/${page.slug}` },
              { "@type": "ListItem", position: 3, name: page.h1, item: `/${page.slug}` },
            ],
          }),
        }}
      />
      {page.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: page.faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }}
        />
      )}
    </article>
  );
}

export function articleHead(page: PageDef) {
  return {
    meta: [
      { title: page.title },
      { name: "description", content: page.description },
      { name: "keywords", content: page.keywords.join(", ") },
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large" },
      { property: "og:title", content: page.title },
      { property: "og:description", content: page.description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `/${page.slug}` },
      { property: "og:locale", content: "vi_VN" },
      { property: "article:section", content: page.category },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: page.title },
      { name: "twitter:description", content: page.description },
    ],
    links: [{ rel: "canonical", href: `/${page.slug}` }],
  };
}
