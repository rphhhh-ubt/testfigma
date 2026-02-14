interface StatusBarProps {
  tone?: "dark" | "light";
}

export function StatusBar({ tone = "dark" }: StatusBarProps) {
  return (
    <div className={`status-bar ${tone === "light" ? "is-light" : ""}`} aria-hidden>
      <span className="status-time">9:41</span>
      <span className="status-island" />
      <span className="status-icons">
        <span className="status-signal" />
        <span className="status-wifi" />
        <span className="status-battery" />
      </span>
    </div>
  );
}
