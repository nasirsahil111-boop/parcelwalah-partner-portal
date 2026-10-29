"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

const LINKS = [
  { href: "", label: "Dashboard" },
  { href: "/place-order", label: "Place Order" },
  { href: "/orders", label: "Order History" },
  { href: "/wallet", label: "Wallet" },
  { href: "/locations", label: "Saved Locations" },
  { href: "/rate-card", label: "Rate Card" },
  { href: "/settlements", label: "COD Settlements" },
];

export function PortalNav({
  base,
  mode,
  partnerName,
  walletBalance,
  onExit,
  children,
}: {
  base: string;
  mode: "demo" | "live";
  partnerName: string;
  walletBalance: number;
  onExit?: () => void;
  children: ReactNode;
}) {
  const pathname = usePathname();
  return (
    <div className="min-h-screen">
      {mode === "demo" ? (
        <div className="bg-amber-400 px-4 py-2 text-center text-sm font-bold text-amber-950">
          DEMO DATA — ye nakli data hai, asli Firebase me kuch save nahi ho
          raha.
        </div>
      ) : null}
      <div className="sticky top-3 z-50 px-3 pt-1">
        <header className="mx-auto flex max-w-5xl flex-wrap items-center gap-x-4 gap-y-2 rounded-full border border-white/70 bg-white/70 px-4 py-2.5 shadow-[0_10px_30px_-18px_rgba(0,0,0,0.18)] backdrop-blur-xl">
          <Link href={base} className="flex items-center gap-2.5">
            <img
              src="/logo-parcelwalah.png"
              alt="Parcelwalah"
              className="h-9 w-9 rounded-[10px] shadow-[0_8px_20px_-8px_rgba(255,106,26,0.6)]"
            />
            <span className="leading-tight">
              <span className="block text-[17px] font-bold text-ink">
                Parcel<span className="text-brand">walah</span>
              </span>
              <span className="block text-[11px] font-medium text-muted">
                Partner Portal
              </span>
            </span>
          </Link>
          <nav className="flex flex-wrap items-center gap-1">
            {LINKS.map((l) => {
              const href = `${base}${l.href}`;
              const active =
                pathname === href || (l.href === "" && pathname === base);
              return (
                <Link
                  key={l.label}
                  href={href}
                  className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
                    active
                      ? "bg-gradient-to-br from-brand to-brand-2 text-white shadow-glow"
                      : "text-dark hover:bg-white hover:shadow-sm"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>
          <div className="ml-auto flex items-center gap-3">
            <div className="text-right leading-tight">
              <p className="text-sm font-semibold text-ink">{partnerName}</p>
              <p className="text-xs text-muted">
                Wallet: ₹{walletBalance.toLocaleString("en-IN")}
              </p>
            </div>
            {onExit ? (
              <button
                onClick={onExit}
                className="rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-dark transition hover:-translate-y-0.5 hover:shadow-md"
              >
                Demo se bahar jao
              </button>
            ) : null}
          </div>
        </header>
      </div>
      <main className="mx-auto max-w-5xl space-y-5 px-4 py-6">{children}</main>
    </div>
  );
}
