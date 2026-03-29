export default function Footer() {
  return (
    <footer className="bg-safari-dark border-t border-safari-gold/20 py-12 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-heading text-3xl text-safari-gold mb-2">🐘 Udawalawa Safari</p>
        <p className="font-body text-white/40 text-sm">
          Udawalawa National Park, Southern Province, Sri Lanka
        </p>
        <p className="font-body text-white/20 text-xs mt-6">
          © {new Date().getFullYear()} Udawalawa Safari. All rights reserved.
        </p>
      </div>
    </footer>
  );
}