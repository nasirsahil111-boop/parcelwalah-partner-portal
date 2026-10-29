"use client";

import { usePortal } from "@/components/PortalContext";
import { Badge, Card } from "@/components/ui";
import { COD_STAGE_LABEL } from "@/lib/types";

export default function PortalSettlements() {
  const portal = usePortal();
  return (
    <>
      <Card title="COD Ledger — kaise kaam karta hai">
        <p className="text-sm text-dark">
          Captain customer se COD collect karta hai, apni earning rakh kar
          baaki Parcelwalah ko deta hai. Example: COD ₹200 collect → captain
          earning ₹20 → wallet me <span className="font-bold">−₹180</span>.
          Deposit <b>online-only</b> hai — koi cash collection nahi.
        </p>
        <p className="mt-2 text-sm text-dark">
          Partner settlement T+1 hota hai — order-wise breakup + UTR ke saath
          partner ko manual transfer.
        </p>
      </Card>

      <Card title="COD Settlements">
        {portal.settlements.length === 0 ? (
          <p className="text-sm text-muted">Koi settlement nahi hai.</p>
        ) : (
          <ul className="space-y-3">
            {portal.settlements.map((s) => (
              <li
                key={s.id}
                className="rounded-2xl border border-line bg-brand-soft/50 p-3"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-sm font-bold text-ink">
                    Order {s.orderId}
                  </span>
                  <Badge>{COD_STAGE_LABEL[s.stage]}</Badge>
                </div>
                <p className="mt-2 text-sm text-dark">
                  COD collected: ₹{s.codCollected} • Captain earning: ₹
                  {s.captainEarning} •{" "}
                  <span className="font-semibold text-red-700">
                    Wallet −₹{s.owed}
                  </span>
                </p>
                {s.utr ? (
                  <p className="text-xs text-muted">UTR: {s.utr}</p>
                ) : null}
                <p className="text-xs text-muted">{s.at}</p>
              </li>
            ))}
          </ul>
        )}
      </Card>
    </>
  );
}
