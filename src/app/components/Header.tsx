import { Link, useNavigate, useLocation } from 'react-router';
import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { LanguageToggle } from './LanguageToggle';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const handleLogoClick = (e: React.MouseEvent) => {
    if (location.pathname !== '/') {
      e.preventDefault();
      navigate('/');
    }
  };

  const serviceItems = [
    { name: 'Property Management', path: '/property-management' },
    { name: 'Workspace Leasing', path: '/workspace-leasing' },
    { name: 'Business Consulting', path: '/business-consulting' },
    { name: 'Concierge Services', path: '/concierge' },
    { name: 'Industrial & Logistics', path: '/industrial-logistics' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-[0_1px_12px_rgba(0,0,0,0.08)]' : 'bg-[#F8F6F1]'
      }`}
      style={{ borderBottom: '1px solid rgba(0,0,0,0.12)' }}
    >
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-center h-[72px] relative">
          {/* Left nav */}
          <nav className="hidden lg:flex items-center gap-1 absolute left-0">
            <div
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <Link
                to="/services"
                className="text-[11px] font-medium uppercase tracking-[0.12em] hover:text-[#A88F5C] transition-colors"
              >
                Services
              </Link>
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    className="absolute top-full left-0 pt-4"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                  >
                    <div className="bg-[#F5F0E8] min-w-[320px] shadow-[0_8px_40px_rgba(0,0,0,0.12)]">
                      {/* Header label */}
                      <div className="px-6 py-3 border-b border-[#A88F5C]/20">
                        <span className="text-[9px] uppercase tracking-[0.3em] text-[#A88F5C]">Our Services</span>
                      </div>
                      {/* Items */}
                      {serviceItems.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="group flex items-center justify-between px-6 py-[18px] text-[12px] uppercase tracking-[0.12em] transition-all duration-150 border-l-[3px] border-transparent hover:border-[#A88F5C]"
                        >
                          <span>{item.name}</span>
                          <ArrowRight
                            size={14}
                            className="text-[#A88F5C] opacity-0 group-hover:opacity-100 transition-opacity duration-150"
                          />
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <span className="text-[11px] px-2">·</span>
            <Link
              to="/about"
              className="text-[11px] font-medium uppercase tracking-[0.12em] hover:text-[#A88F5C] transition-colors"
            >
              About
            </Link>
            <span className="text-[11px] px-2">·</span>
            <Link
              to="/news"
              className="text-[11px] font-medium uppercase tracking-[0.12em] hover:text-[#A88F5C] transition-colors"
            >
              News
            </Link>
          </nav>

          {/* Logo */}
          <Link to="/" onClick={handleLogoClick} className="serif text-2xl tracking-tight">
            HILINK
          </Link>

          {/* Right nav */}
          <nav className="hidden lg:flex items-center gap-1 absolute right-0">
            <LanguageToggle />
            <span className="text-[11px] px-2">·</span>
            <Link
              to="/contact"
              className="text-[11px] font-medium uppercase tracking-[0.12em] hover:text-[#A88F5C] transition-colors"
            >
              Contact
            </Link>
            <span className="text-[11px] px-2">·</span>
            <Link
              to="/contact"
              className="px-[28px] py-[12px] bg-[#0a0a0a] text-white text-[11px] font-medium uppercase tracking-[0.15em] hover:bg-[#A88F5C] transition-colors"
            >
              Book Consultation
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 absolute right-0"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Scroll progress bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-[#A88F5C] origin-left"
        style={{ scaleX, width: '100%' }}
      />

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="lg:hidden border-t border-[#0F0F0F]/10 bg-[#F8F6F1]"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <nav className="px-6 py-6 space-y-4">
              <div className="pb-4 border-b border-[#0F0F0F]/10">
                <LanguageToggle />
              </div>
              {[
                { to: '/services', label: 'Services' },
                { to: '/about', label: 'About' },
                { to: '/news', label: 'News' },
                { to: '/workspace-leasing', label: 'Workspace' },
                { to: '/property-management', label: 'Property' },
                { to: '/concierge', label: 'Concierge' },
                { to: '/contact', label: 'Contact' },
              ].map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="block text-sm uppercase tracking-wider hover:text-[#A88F5C] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block w-full px-8 py-3 bg-[#0F0F0F] text-white text-sm uppercase tracking-wider text-center hover:bg-[#A88F5C] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Book a Consultation
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
