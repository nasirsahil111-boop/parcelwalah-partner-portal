import type { ReactNode } from "react";

export function Card({
  title,
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-card border border-line bg-white p-5 shadow-md">
      {title ? (
        <h2 className="mb-3 text-lg font-semibold text-ink">{title}</h2>
      ) : null}
      {children}
    </section>
  );
}

export function Stat({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub?: string;
}) {
  return (
    <div className="rounded-card border border-line bg-white p-4 shadow-md">
      <p className="text-xs font-semibold uppercase tracking-wide text-muted">
        {label}
      </p>
      <p className="mt-1 text-[26px] font-bold leading-tight text-ink">
        {value}
      </p>
      {sub ? <p className="mt-1 text-xs text-muted">{sub}</p> : null}
    </div>
  );
}

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block rounded-full bg-brand-soft px-2.5 py-0.5 text-xs font-semibold text-brand">
      {children}
    </span>
  );
}

export function Btn({
  children,
  onClick,
  disabled,
  variant = "primary",
  type = "button",
}: {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: "primary" | "ghost" | "danger";
  type?: "button" | "submit";
}) {
  const cls =
    variant === "primary"
      ? "bg-gradient-to-br from-brand to-brand-2 text-white shadow-glow hover:-translate-y-0.5 hover:shadow-lg"
      : variant === "danger"
        ? "bg-red-600 text-white shadow-md hover:-translate-y-0.5 hover:bg-red-700"
        : "border border-line bg-white text-dark hover:-translate-y-0.5 hover:shadow-md";
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-50 ${cls}`}
    >
      {children}
    </button>
  );
}

export function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[13.5px] font-semibold text-dark">
        {label}
      </span>
      {children}
    </label>
  );
}

export const inputCls =
  "w-full rounded-input border border-line bg-white px-3.5 py-3 text-[15px] text-ink outline-none transition placeholder:text-muted/60 focus:border-brand focus:ring-4 focus:ring-brand/15";
