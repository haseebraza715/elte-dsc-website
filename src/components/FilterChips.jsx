export default function FilterChips({ label, options, value, onChange }) {
  return (
    <div className="filters" role="group" aria-label={label}>
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          className="chip"
          aria-pressed={value === option.value}
          onClick={() => onChange(option.value)}
        >
          {option.label}
          {option.count !== undefined && <span className="chip-count">{option.count}</span>}
        </button>
      ))}
    </div>
  )
}
