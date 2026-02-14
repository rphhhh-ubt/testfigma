export function MonthSelect() {
  return (
    <button className="month-select" aria-label="Filter by month">
      <span>March</span>
      <span className="month-arrow" aria-hidden>
        <svg viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      </span>
    </button>
  );
}
