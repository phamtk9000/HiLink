import { Link } from 'react-router';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F0F0F] text-white">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">
          <div className="md:col-span-4">
            <h3 className="serif text-3xl mb-6">HILINK</h3>
            <p className="text-[#EAE3D2] text-base leading-relaxed mb-8">
              Premium real estate solutions for international clients seeking excellence in Vietnam.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 bg-[#A88F5C] text-white text-sm uppercase tracking-wider hover:bg-[#EAE3D2] hover:text-[#0F0F0F] transition-colors"
            >
              Book a Consultation
            </Link>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-sm uppercase tracking-wider mb-6">Services</h4>
            <nav className="space-y-3">
              {[
                { to: '/property-management', label: 'Property Management' },
                { to: '/workspace-leasing', label: 'Workspace Leasing' },
                { to: '/concierge', label: 'Concierge Services' },
                { to: '/business-consulting', label: 'Business Advisory' },
                { to: '/industrial-logistics', label: 'Industrial & Logistics' },
              ].map(({ to, label }) => (
                <Link key={to} to={to} className="block text-[#EAE3D2] hover:text-white transition-colors">
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-sm uppercase tracking-wider mb-6">Company</h4>
            <nav className="space-y-3">
              {[
                { to: '/about', label: 'About Us' },
                { to: '/news', label: 'News' },
                { to: '/services', label: 'All Services' },
                { to: '/contact', label: 'Contact' },
              ].map(({ to, label }) => (
                <Link key={to} to={to} className="block text-[#EAE3D2] hover:text-white transition-colors">
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-sm uppercase tracking-wider mb-6">Contact</h4>
            <address className="not-italic space-y-3 text-[#EAE3D2]">
              <p>
                <a href="mailto:contact@hilink.vn" className="hover:text-white transition-colors">
                  contact@hilink.vn
                </a>
              </p>
              <p>
                <a href="tel:+842422029000" className="hover:text-white transition-colors">
                  (+84) 24 2202 9000
                </a>
              </p>
              <p>Tầng 15 số 4 Tôn Thất Tùng,<br />Đống Đa, Hà Nội, Việt Nam</p>
            </address>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#EAE3D2] text-sm">
            © {currentYear} HiLink Vietnam. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm">
            <Link to="/contact" className="text-[#EAE3D2] hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/contact" className="text-[#EAE3D2] hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
