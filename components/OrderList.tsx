import { Badge } from "./ui";
import { STATUS_LABEL, type Order } from "@/lib/types";

export function OrderList({ orders }: { orders: Order[] }) {
  if (orders.length === 0) {
    return <p className="text-sm text-muted">Abhi koi order nahi hai.</p>;
  }
  return (
    <ul className="space-y-3">
      {orders.map((o) => (
        <li
          key={o.id}
          className="rounded-2xl border border-line bg-brand-soft/50 p-3"
        >
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-sm font-bold text-ink">
              {o.id}
            </span>
            <Badge>{STATUS_LABEL[o.status]}</Badge>
            <Badge>{o.source === "Portal" ? "Portal order" : "App order"}</Badge>
            {o.codAmount > 0 ? <Badge>COD ₹{o.codAmount}</Badge> : null}
          </div>
          <p className="mt-2 text-sm text-dark">
            <span className="font-medium">Pickup:</span> {o.pickup}
          </p>
          <p className="text-sm text-dark">
            <span className="font-medium">Drop:</span> {o.drop}
          </p>
          <p className="mt-1 text-xs text-muted">
            {o.city} • {o.distanceKm} km • Fee ₹{o.fee} • {o.createdAt}
            {o.riderName ? ` • Captain: ${o.riderName}` : ""}
          </p>
        </li>
      ))}
    </ul>
  );
}
