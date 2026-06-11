import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { NAV_GROUPS } from "@/lib/site-content";

export function Header() {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-lg gradient-gold font-black text-gold-foreground">J</span>
          <span className="text-xl font-black tracking-tight">
            JUN<span className="text-gold">888</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_GROUPS.map((g) => (
            <div
              key={g.label}
              className="relative"
              onMouseEnter={() => setActiveMenu(g.label)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-gold transition-colors">
                {g.label}
              </button>
              {activeMenu === g.label && (
                <div className="absolute left-0 top-full min-w-56 rounded-xl border border-border bg-popover p-2 shadow-glow">
                  {g.items.map((it) => (
                    <Link
                      key={it.slug}
                      to={`/${it.slug}` as string}
                      className="block rounded-md px-3 py-2 text-sm text-popover-foreground hover:bg-accent hover:text-gold"
                    >
                      {it.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Link to={"/dang-nhap-jun88" as string} className="px-4 py-2 text-sm font-medium hover:text-gold">
            Đăng nhập
          </Link>
          <Link to={"/dang-ky-jun88" as string} className="btn-gold text-sm">
            Đăng ký
          </Link>
        </div>

        <button
          aria-label="Mở menu"
          className="lg:hidden grid h-10 w-10 place-items-center rounded-md border border-border"
          onClick={() => setOpen(!open)}
        >
          <span className="i">≡</span>
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 max-h-[70vh] overflow-y-auto">
          <div className="px-4 py-3 space-y-4">
            {NAV_GROUPS.map((g) => (
              <div key={g.label}>
                <div className="text-xs uppercase tracking-wider text-gold font-bold mb-2">{g.label}</div>
                <div className="grid grid-cols-2 gap-1">
                  {g.items.map((it) => (
                    <Link
                      key={it.slug}
                      to={`/${it.slug}` as string}
                      onClick={() => setOpen(false)}
                      className="rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:text-gold"
                    >
                      {it.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <div className="flex gap-2 pt-2">
              <Link to={"/dang-nhap-jun88" as string} onClick={() => setOpen(false)} className="flex-1 text-center rounded-md border border-border py-2 text-sm">Đăng nhập</Link>
              <Link to={"/dang-ky-jun88" as string} onClick={() => setOpen(false)} className="flex-1 text-center btn-gold justify-center">Đăng ký</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
