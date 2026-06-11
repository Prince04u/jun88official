import { Link } from "@tanstack/react-router";
import { NAV_GROUPS } from "@/lib/site-content";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {NAV_GROUPS.slice(0, 7).map((g) => (
            <div key={g.label}>
              <h4 className="text-sm font-bold text-gold mb-3">{g.label}</h4>
              <ul className="space-y-2">
                {g.items.slice(0, 6).map((it) => (
                  <li key={it.slug}>
                    <Link
                      to={`/${it.slug}` as string}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {it.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-lg gradient-gold font-black text-gold-foreground text-sm">J</span>
            <span className="text-sm font-bold">JUN<span className="text-gold">888</span></span>
          </div>
          <p className="text-xs text-muted-foreground text-center">
            © 2026 JUN888. Trang thông tin tham khảo. Chơi có trách nhiệm — 18+.
          </p>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <Link to={"/dieu-khoan-dich-vu" as string} className="hover:text-gold">Điều khoản</Link>
            <Link to={"/chinh-sach-quyen-rieng-tu" as string} className="hover:text-gold">Quyền riêng tư</Link>
            <Link to={"/lien-he-jun88" as string} className="hover:text-gold">Liên hệ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
