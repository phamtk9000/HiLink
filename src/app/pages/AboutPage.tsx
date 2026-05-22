import { Link } from 'react-router';
import { ArrowRight, X, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

// ── Team data ────────────────────────────────────────────────────────────────
const team = [
  {
    name: 'Nguyen Thanh Linh',
    role: 'Chief Executive Officer',
    nationality: 'Vietnamese',
    languages: 'Vietnamese · English · French',
    bio: 'With over 18 years in Vietnam\'s real estate sector, Linh founded HiLink with a vision to bridge international capital with local expertise. Previously Head of Residential at CBRE Vietnam, she has personally overseen transactions exceeding $500M across Southeast Asia.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80',
    expertise: ['Portfolio Strategy', 'International Clients', 'Asset Optimisation'],
  },
  {
    name: 'Michael Tran',
    role: 'Head of Property Management',
    nationality: 'Vietnamese-Australian',
    languages: 'Vietnamese · English',
    bio: 'Michael leads HiLink\'s property management division, overseeing a portfolio of 150+ residential and commercial assets. His background in Australian property law and deep roots in Hanoi\'s expat community make him uniquely positioned to serve international landlords.',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80',
    expertise: ['Asset Management', 'Tenant Relations', 'Legal Compliance'],
  },
  {
    name: 'Sophie Chen',
    role: 'Director of Workspace Leasing',
    nationality: 'Singaporean',
    languages: 'Mandarin · English · Vietnamese',
    bio: 'Sophie brings 12 years of commercial real estate experience across Singapore, Hong Kong, and Vietnam. She spearheaded HiLink\'s workspace expansion, growing the portfolio from 2 to 6 premium locations in under three years.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80',
    expertise: ['Commercial Leasing', 'Workspace Design', 'Business Development'],
  },
  {
    name: 'David Zhang',
    role: 'Head of Business Advisory',
    nationality: 'Chinese-British',
    languages: 'Mandarin · English · Vietnamese',
    bio: 'David advises international companies on market entry, business registration, and investment structuring in Vietnam. A former Deloitte consultant with an MBA from London Business School, he has guided over 80 foreign enterprises into the Vietnamese market.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80',
    expertise: ['Market Entry', 'Investment Structuring', 'Corporate Advisory'],
  },
  {
    name: 'Anna Pham',
    role: 'Head of Concierge Services',
    nationality: 'Vietnamese',
    languages: 'Vietnamese · English · Japanese',
    bio: 'Anna built HiLink\'s concierge offering from the ground up, drawing on her background in luxury hospitality at Park Hyatt and Rosewood Hanoi. She ensures every international client receives personalised, five-star support from arrival to long-term residency.',
    image: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80',
    expertise: ['Relocation', 'Lifestyle Management', 'VIP Client Relations'],
  },
  {
    name: 'Thomas Le',
    role: 'Chief Financial Officer',
    nationality: 'Vietnamese-French',
    languages: 'Vietnamese · French · English',
    bio: 'Thomas oversees HiLink\'s financial operations and client reporting infrastructure. A chartered accountant with Big Four experience across Paris and Hanoi, he designed the firm\'s GDPR-compliant, real-time owner portal system.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80',
    expertise: ['Financial Reporting', 'GDPR Compliance', 'Owner Portals'],
  },
];

// ── Partner logos (text-based — replace with real logo images when available) ─
const partners = [
  'CBRE', 'Savills', 'JLL', 'Knight Frank', 'Colliers',
  'Deloitte', 'PwC', 'KPMG', 'Baker McKenzie', 'Indochina Capital',
];

// ── Member modal ─────────────────────────────────────────────────────────────
function MemberModal({ member, onClose }: {
  member: typeof team[0];
  onClose: () => void;
}) {
  return (
    <motion.div
      className="fixed inset-0 z-[500] flex items-center justify-center p-4 lg:p-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#0F0F0F]/80 backdrop-blur-sm" />

      {/* Panel */}
      <motion.div
        className="relative z-10 bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 16 }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-2 hover:text-[#A88F5C] transition-colors"
        >
          <X size={20} />
        </button>

        <div className="grid lg:grid-cols-[280px_1fr]">
          {/* Photo */}
          <div className="relative aspect-[3/4] lg:aspect-auto overflow-hidden bg-[#EAE3D2]">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Info */}
          <div className="p-8 lg:p-10">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#A88F5C] mb-4">{member.role}</p>
            <h2 className="serif text-3xl mb-1">{member.name}</h2>
            <p className="text-[13px] text-[#707070] mb-6">{member.nationality} · {member.languages}</p>

            <div className="w-8 h-px bg-[#A88F5C]/40 mb-6" />

            <p className="text-[15px] text-[#444] leading-[1.85] mb-8">{member.bio}</p>

            {/* Expertise tags */}
            <div className="mb-8">
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#707070] mb-3">Areas of Expertise</p>
              <div className="flex flex-wrap gap-2">
                {member.expertise.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 border border-[#A88F5C]/30 text-[11px] uppercase tracking-wider text-[#555]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <Link
              to="/contact"
              onClick={onClose}
              className="inline-flex items-center gap-3 group"
            >
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#0F0F0F] relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#A88F5C] group-hover:after:w-full after:transition-all after:duration-300">
                Get in Touch
              </span>
              <ArrowRight size={14} className="text-[#A88F5C] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────
export function AboutPage() {
  const [selectedMember, setSelectedMember] = useState<typeof team[0] | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen bg-[#0F0F0F] flex flex-col">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1651666176094-2bef8442db12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzU2NTQyMTF8MA&ixlib=rb-4.1.0&q=80&w=1920"
            alt="HiLink office"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative flex-1 flex flex-col items-center justify-center text-center px-6 lg:px-12">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#A88F5C] mb-8">
            Est. 2014 · Hanoi, Vietnam
          </p>
          <h1
            className="serif text-white max-w-5xl leading-[1.05]"
            style={{ fontSize: 'clamp(4rem, 8vw, 8rem)', fontWeight: 300 }}
          >
            Building Bridges Between Vision and Reality
          </h1>
        </div>
        <div className="relative pb-12 flex flex-col items-center gap-4">
          <div className="w-px h-12 bg-white/20" />
          <p className="text-[10px] uppercase tracking-[0.25em] text-white/40">Scroll to discover</p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            {/* Left — image + pull-quote */}
            <div className="lg:w-[35%]">
              <div className="lg:sticky lg:top-32 space-y-8">
                {/* Portrait image */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1651666176094-2bef8442db12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzU2NTQyMTF8MA&ixlib=rb-4.1.0&q=80&w=800"
                    alt="HiLink office"
                    className="w-full h-full object-cover"
                  />
                  {/* Gold accent bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#A88F5C]" />
                </div>
                {/* Pull-quote below image */}
                <div>
                  <blockquote
                    className="serif italic text-[#A88F5C] leading-snug"
                    style={{ fontSize: 'clamp(1.3rem, 2vw, 1.7rem)' }}
                  >
                    "We bridge local depth with global standards."
                  </blockquote>
                  <div className="mt-6 w-8 h-px bg-[#A88F5C]/40" />
                </div>
              </div>
            </div>
            <div className="lg:w-[65%]">
              <div className="space-y-7 text-[17px] text-[#444] leading-[1.85] mb-16">
                <p>
                  HiLink Vietnam was founded with a clear mission: to provide world-class real estate services that meet the exacting standards of international clients operating in Southeast Asia. Since 2014, we have been the trusted partner for those seeking excellence in Vietnam's real estate market.
                </p>
                <p>
                  Over the past decade, we've grown from a boutique property management firm into a comprehensive ecosystem of services — spanning asset management, workspace solutions, and business advisory. What sets us apart is our deep understanding of both Vietnamese market dynamics and international business culture.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-x-10 gap-y-8">
                {[
                  { value: '2014', label: 'Year Founded' },
                  { value: 'Hanoi', label: 'Headquarters' },
                  { value: '8 Countries', label: 'Markets Served' },
                  { value: '40+ Professionals', label: 'Team Size' },
                ].map(({ value, label }) => (
                  <div key={label} className="border-t pt-5" style={{ borderColor: 'rgba(168,143,92,0.3)' }}>
                    <div className="serif text-2xl text-[#8B6914] mb-2">{value}</div>
                    <div className="text-[11px] uppercase tracking-wider text-[#707070]">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#F8F6F1] py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#A88F5C] mb-16">What We Stand For</p>
          <div className="divide-y divide-[#0F0F0F]/10">
            {[
              { num: '01', title: 'Transparency', desc: 'Clear reporting, honest communication, and full visibility into every aspect of your asset management.' },
              { num: '02', title: 'Excellence', desc: 'We set the highest standards in client service, property management, and business advisory — without exception.' },
              { num: '03', title: 'Partnership', desc: 'Your success is our success. We work alongside you as a trusted long-term partner, not just a service provider.' },
              { num: '04', title: 'Discretion', desc: 'International clients trust us with their most sensitive assets. We treat that trust with the utmost care and confidentiality.' },
            ].map(({ num, title, desc }) => (
              <div key={num} className="flex items-start gap-8 py-10">
                <span className="serif font-light text-[#0F0F0F]/[0.07] leading-none select-none shrink-0 hidden lg:block" style={{ fontSize: '80px' }}>
                  {num}
                </span>
                <div className="flex-1 lg:pt-4">
                  <h3 className="serif text-3xl mb-3">{title}</h3>
                  <p className="text-[#707070] text-[16px] leading-relaxed max-w-2xl">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#A88F5C] mb-4">The People Behind HiLink</p>
              <h2 className="serif text-4xl lg:text-5xl">Meet Our Team</h2>
            </div>
            <p className="text-[15px] text-[#707070] max-w-sm">
              A bilingual team of specialists united by a shared commitment to excellence in every client engagement.
            </p>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#0F0F0F]/10">
            {team.map((member) => (
              <button
                key={member.name}
                onClick={() => setSelectedMember(member)}
                className="group relative bg-white text-left overflow-hidden"
              >
                {/* Photo */}
                <div className="relative aspect-[3/4] overflow-hidden bg-[#EAE3D2]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#0F0F0F]/0 group-hover:bg-[#0F0F0F]/40 transition-colors duration-400 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-[10px] uppercase tracking-[0.25em] border border-white/50 px-5 py-2.5">
                      View Profile
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6 border-t border-[#0F0F0F]/08">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#A88F5C] mb-2">{member.role}</p>
                  <h3 className="serif text-xl mb-1">{member.name}</h3>
                  <p className="text-[12px] text-[#707070]">{member.languages}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Partners ticker */}
      <section className="bg-[#F8F6F1] py-16 overflow-hidden border-t border-b border-[#0F0F0F]/08">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-10">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#A88F5C] text-center">
            Trusted Partners &amp; Affiliates
          </p>
        </div>
        {/* Seamless ticker: single animated row containing two copies */}
        <div className="overflow-hidden">
          <div className="flex w-max" style={{ animation: 'ticker 32s linear infinite' }}>
            {[...partners, ...partners].map((name, i) => (
              <span
                key={i}
                className="serif text-[22px] font-light text-[#0F0F0F]/30 whitespace-nowrap hover:text-[#A88F5C] transition-colors cursor-default select-none px-10"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
        <style>{`
          @keyframes ticker {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}</style>
      </section>

      {/* CTA */}
      <section className="bg-[#0F0F0F] py-28 text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div>
            <h2 className="serif text-4xl lg:text-5xl mb-4">Let's Work Together</h2>
            <p className="text-[#EAE3D2] text-lg">Discover how we can support your business in Vietnam.</p>
          </div>
          <Link to="/contact" className="shrink-0 inline-flex items-center gap-3 group">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#A88F5C] relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#A88F5C] group-hover:after:w-full after:transition-all after:duration-300">
              Get in Touch
            </span>
            <ArrowRight size={14} className="text-[#A88F5C] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Member modal */}
      <AnimatePresence>
        {selectedMember && (
          <MemberModal
            member={selectedMember}
            onClose={() => setSelectedMember(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
