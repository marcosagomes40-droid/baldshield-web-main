export default function SectionHeader({ label = "BALDSHIELD", title, subtitle }) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
      <p className="text-lg md:text-xl uppercase tracking-[0.7em] text-primary mb-10 font-semibold">
        {label}
      </p>

      {title && (
        <h2
          className="text-4xl md:text-5xl font-bold text-white mb-6"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          {title}
        </h2>
      )}

      {subtitle && (
        <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}