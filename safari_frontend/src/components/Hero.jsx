export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-safari-dark via-safari-green/80 to-safari-dark" />
      <div className="absolute inset-0 opacity-20"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920')",
                 backgroundSize: 'cover', backgroundPosition: 'center' }} />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="font-body text-safari-gold uppercase tracking-[0.4em] text-sm mb-4">
          Sri Lanka's Wild Heart
        </p>
        <h1 className="font-heading text-6xl md:text-8xl text-white mb-6 leading-tight">
          Udawalawa<br/>
          <span className="text-safari-gold">Safari</span>
        </h1>
        <p className="font-body text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Experience the raw beauty of Sri Lanka's most iconic wildlife sanctuary.
          Home to over 400 wild elephants.
        </p>
        <a href="/gallery"
          className="inline-block bg-safari-gold text-safari-dark font-body font-bold
                     px-10 py-4 rounded-full text-lg hover:bg-white transition-all
                     duration-300 hover:scale-105 shadow-lg shadow-safari-gold/30">
          Explore Gallery
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-safari-gold/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-safari-gold rounded-full" />
        </div>
      </div>
    </section>
  );
}