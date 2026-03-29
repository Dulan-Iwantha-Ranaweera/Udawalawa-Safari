import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-safari-dark/90 backdrop-blur-sm border-b border-safari-gold/30">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="font-heading text-2xl text-safari-gold tracking-wide">
          🐘 Udawalawa Safari
        </Link>
        <div className="flex gap-8 font-body text-white/80">
          <Link to="/" className="hover:text-safari-gold transition-colors">Home</Link>
          <Link to="/gallery" className="hover:text-safari-gold transition-colors">Gallery</Link>
        </div>
      </div>
    </nav>
  );
}