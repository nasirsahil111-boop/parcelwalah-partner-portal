"use client";

import Link from "next/link";
import { usePortal } from "@/components/PortalContext";
import { OrderList } from "@/components/OrderList";
import { Card, Stat } from "@/components/ui";

export default function PortalDashboard() {
  const portal = usePortal();
  const m = portal.merchant!;
  const active = portal.orders.filter(
    (o) => o.status === "placed" || o.status === "accepted" || o.status === "picked"
  ).length;
  const delivered = portal.orders.filter((o) => o.status === "delivered").length;

  return (
    <>
      <h1 className="text-xl font-bold text-ink">Namaste, {m.name}</h1>
      <p className="text-sm text-muted">
        {m.businessType} • {m.city}
      </p>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        <Stat
          label="Wallet Balance"
          value={`₹${m.walletBalance.toLocaleString("en-IN")}`}
          sub="Prepaid — bina balance order nahi"
        />
        <Stat label="Active Orders" value={String(active)} />
        <Stat label="Delivered" value={String(delivered)} />
        <Stat label="Saved Locations" value={String(portal.locations.length)} />
      </div>

      <Card title="Quick Actions">
        <div className="flex flex-wrap gap-2">
          <Link
            href="/portal/place-order"
            className="rounded-full bg-gradient-to-br from-brand to-brand-2 px-4 py-2.5 text-sm font-semibold text-white hover:shadow-glow"
          >
            + Place Order
          </Link>
          <Link
            href="/portal/wallet"
            className="rounded-full border border-line bg-white px-4 py-2.5 text-sm font-semibold text-dark hover:bg-brand-soft/50"
          >
            Wallet Recharge
          </Link>
          <Link
            href="/portal/orders"
            className="rounded-full border border-line bg-white px-4 py-2.5 text-sm font-semibold text-dark hover:bg-brand-soft/50"
          >
            Order History
          </Link>
        </div>
      </Card>

      <Card title="Recent Orders">
        <OrderList orders={portal.orders.slice(0, 4)} />
      </Card>
    </>
  );
}
