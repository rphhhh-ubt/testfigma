interface MonthSelectProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

export function MonthSelect({ options, value, onChange }: MonthSelectProps) {
  return (
    <label className="month-select" aria-label="Filter by month">
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <span className="month-arrow" aria-hidden>
        <svg viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      </span>
    </label>
  );
}
