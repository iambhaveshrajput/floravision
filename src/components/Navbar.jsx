import { useState } from 'react';
import { Search, ShoppingBag, Menu, X, Leaf } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-bg-primary/90 backdrop-blur-sm border-b border-green-border/20">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2">
              <div className="flex flex-col items-center">
                <Leaf size={18} className="text-green-400 -mb-1" />
                <div className="w-4 h-3 bg-yellow-600/70 rounded-sm mt-0" />
              </div>
              <span className="text-text-primary font-semibold text-lg tracking-wide">
                FloraVision<span className="text-yellow-accent">.</span>
              </span>
            </a>

            {/* Desktop nav */}
            <ul className="hidden md:flex items-center gap-8">
              {[
                { label: 'Home', href: '#home' },
                { label: "Plants Type ▾", href: '#trending' },
                { label: 'More', href: '#o2' },
                { label: 'Contact', href: '#footer' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-text-muted hover:text-text-primary text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Icons */}
            <div className="flex items-center gap-2">
              <button aria-label="Search" className="btn-icon hidden sm:flex">
                <Search size={16} />
              </button>
              <button aria-label="Cart" className="btn-icon hidden sm:flex">
                <ShoppingBag size={16} />
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Menu"
                className="btn-icon md:hidden"
              >
                {isOpen ? <X size={16} /> : <Menu size={16} />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <div
        className={`mobile-menu fixed top-0 right-0 h-full w-64 bg-bg-secondary z-50 md:hidden border-l border-green-border/30 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 pt-16">
          <ul className="flex flex-col gap-1">
            {['Home', "Plants Type", 'More', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  onClick={() => setIsOpen(false)}
                  className="block py-3 px-3 text-text-muted hover:text-text-primary hover:bg-white/5 rounded-lg text-sm transition-all"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
