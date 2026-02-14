export function StatusBar() {
  return (
    <div className="status-bar" aria-hidden>
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
