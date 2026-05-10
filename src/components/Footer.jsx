import { Leaf } from 'lucide-react';

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
  };

  return (
    <footer id="footer" className="bg-bg-darker border-t border-green-border/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="flex flex-col items-center">
                <Leaf size={16} className="text-green-400 -mb-1" />
                <div className="w-3.5 h-2.5 bg-yellow-600/70 rounded-sm" />
              </div>
              <span className="text-text-primary font-semibold text-base">
                FloraVision<span className="text-yellow-accent">.</span>
              </span>
            </div>
            <p className="text-text-muted text-xs leading-relaxed max-w-xs mb-6">
              "From lush indoor greens to vibrant outdoor blooms, our plants are crafted to thrive and elevate your living environment."
            </p>
            {/* Social links - matching Figma: FB TW LI */}
            <div className="flex items-center gap-4">
              {['FB', 'TW', 'LI'].map((social) => (
                <a
                  key={social}
                  href="#"
                  aria-label={social}
                  className="text-text-muted hover:text-text-primary text-xs font-semibold transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-text-primary font-semibold text-sm mb-4 underline underline-offset-4">
              Quick Link's
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'Home', href: '#home' },
                { label: "Type's Of plant's", href: '#trending' },
                { label: 'Contact', href: '#footer' },
                { label: 'Privacy', href: '#' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-text-muted hover:text-text-primary text-xs transition-colors underline underline-offset-2 decoration-text-dim/50"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-text-primary font-semibold text-sm mb-4">
              For Every Update.
            </h3>
            <form onSubmit={handleSubmit} className="flex items-center gap-0">
              <label htmlFor="footer-email" className="sr-only">Email address</label>
              <input
                id="footer-email"
                type="email"
                placeholder="Enter Email"
                required
                className="flex-1 bg-bg-card border border-green-border/40 border-r-0 rounded-l-lg px-3 py-2 text-xs text-text-primary placeholder:text-text-dim focus:outline-none focus:border-green-border"
              />
              <button
                type="submit"
                className="bg-text-primary text-bg-primary text-xs font-semibold px-4 py-2 rounded-r-lg hover:bg-text-muted transition-colors whitespace-nowrap"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-green-border/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div /> {/* spacer */}
          <p className="text-text-dim text-xs">FloraVision © all right reserve</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
