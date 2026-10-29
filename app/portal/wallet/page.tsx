"use client";

import { usePortal } from "@/components/PortalContext";
import { Card, Stat } from "@/components/ui";

export default function PortalWallet() {
  const portal = usePortal();
  const m = portal.merchant!;

  return (
    <>
      <Stat
        label="Wallet Balance"
        value={`₹${m.walletBalance.toLocaleString("en-IN")}`}
        sub="Prepaid — order fee isi se kat-ti hai"
      />

      <Card title="Wallet Recharge (Top-up Request)">
        <p className="text-sm text-muted">
          v1 me: UPI se Parcelwalah ko payment karein aur admin ko batayein —
          admin verify karke wallet credit karega. Auto-recharge (payment
          gateway) v1 me nahi hai. Top-up request ka option agle update me
          aayega.
        </p>
      </Card>

      <Card title="Transactions">
        {portal.txns.length === 0 ? (
          <p className="text-sm text-muted">Koi transaction nahi hai.</p>
        ) : (
          <ul className="space-y-2">
            {portal.txns.map((t) => (
              <li
                key={t.id}
                className="flex items-center justify-between rounded-2xl border border-line bg-brand-soft/50 px-3 py-2"
              >
                <div>
                  <p className="text-sm text-dark">{t.note}</p>
                  <p className="text-xs text-muted">{t.at}</p>
                </div>
                <p
                  className={`text-sm font-bold ${t.type === "debit" ? "text-red-700" : "text-green-700"}`}
                >
                  {t.type === "debit" ? "−" : "+"}₹{t.amount}
                </p>
              </li>
            ))}
          </ul>
        )}
      </Card>
    </>
  );
}
