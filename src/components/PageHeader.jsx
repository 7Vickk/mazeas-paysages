function GrainOverlay() {
  return (
    <div
      className="absolute inset-0 grain-bg pointer-events-none mix-blend-overlay opacity-25"
      aria-hidden="true"
    />
  )
}

export default function PageHeader({ tag, title, subtitle }) {
  return (
    <div className="relative bg-forest-900 pt-32 pb-20 overflow-hidden">
      <GrainOverlay />
      <div
        className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"
        aria-hidden="true"
      />
      <div className="container relative z-10 text-center">
        <div className="tag mb-5">{tag}</div>
        <h1
          className="font-display font-bold text-cream leading-none mb-5"
          style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)' }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="font-dm text-cream/55 text-lg max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  )
}
