export default function PageHero({ eyebrow, title, lede, tone = 0, children }) {
  return (
    <header className={`page-hero tone-${tone}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="page-title">{title}</h1>
      {lede && <p className="lede">{lede}</p>}
      {children}
    </header>
  )
}
