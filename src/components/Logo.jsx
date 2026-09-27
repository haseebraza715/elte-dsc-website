import { useId } from 'react'

// Three overlapping circles: the data science Venn diagram (maths, code, domain
// knowledge). Pairwise overlaps knock out to the page colour; the shared centre and
// outlines use the text colour, so the mark follows the theme.
const LOGO_CIRCLES = [
  { cx: 24, cy: 16.5, fill: '#FF5B3A' },
  { cx: 16.64, cy: 29.25, fill: '#8B73FF' },
  { cx: 31.36, cy: 29.25, fill: '#C6F03C' },
]
const LOGO_R = 13

export default function Logo({ className = '', size = 44 }) {
  const id = useId().replace(/:/g, '')
  const [a, b, c] = LOGO_CIRCLES
  const circle = (p, extra = {}) => <circle cx={p.cx} cy={p.cy} r={LOGO_R} {...extra} />

  return (
    <svg
      className={`logo-mark ${className}`}
      width={size}
      height={size}
      viewBox="0 0 48 48"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <clipPath id={`${id}-a`}>{circle(a)}</clipPath>
        <clipPath id={`${id}-b`}>{circle(b)}</clipPath>
        <clipPath id={`${id}-c`}>{circle(c)}</clipPath>
      </defs>
      <g className="logo-spin">
        {LOGO_CIRCLES.map((p) => circle(p, { key: p.fill, fill: p.fill }))}
        <g className="logo-lens">
          <g clipPath={`url(#${id}-a)`}>{circle(b)}{circle(c)}</g>
          <g clipPath={`url(#${id}-b)`}>{circle(c)}</g>
        </g>
        <g clipPath={`url(#${id}-a)`}>
          <g clipPath={`url(#${id}-b)`}>{circle(c, { fill: 'currentColor' })}</g>
        </g>
        <g fill="none" stroke="currentColor" strokeWidth="2.2">
          {LOGO_CIRCLES.map((p) => circle(p, { key: p.fill }))}
        </g>
      </g>
    </svg>
  )
}
