const tickerItems = [
  "Exhibitions",
  "Performances",
  "Public talks",
  "Workshops",
  "Open calls",
  "Night sessions",
];

export function TickerTape() {
  const track = tickerItems.join(" / ");

  return (
    <section className="ticker" aria-label="Program highlights">
      <div className="ticker-track">
        <span>{track}</span>
        <span>{track}</span>
      </div>
    </section>
  );
}
