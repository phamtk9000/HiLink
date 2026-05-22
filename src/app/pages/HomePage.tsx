import { Link } from 'react-router';
import { ArrowRight, Building2, Briefcase, Bell, TrendingUp, Warehouse } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { AnimatedCounter } from '../components/AnimatedCounter';

export function HomePage() {
  const [imgLoaded, setImgLoaded] = useState<Record<string, boolean>>({});

  const onImgLoad = (key: string) => setImgLoaded((prev) => ({ ...prev, [key]: true }));

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center bg-[#0F0F0F] text-white overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="https://images.unsplash.com/photo-1640109390671-edce15340659?w=1920&q=60&fm=jpg"
            className="w-full h-full object-cover opacity-40"
          >
            <source
              src="https://cdn.coverr.co/videos/coverr-modern-office-building-exterior-7359/1080p.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0F0F0F]/30 to-[#0F0F0F]/80" />
        </div>

        <div className="relative max-w-[1600px] mx-auto px-6 lg:px-12 py-24 w-full">
          <motion.div
            className="max-w-4xl"
          >
            <motion.h1
              className="serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-8 leading-none"
            >
              Your Assets.<br />Managed.<br />Optimised.
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-[#EAE3D2] mb-12 max-w-2xl leading-relaxed"
            >
              Bespoke property management, workspace leasing, and business advisory for international clients in Vietnam.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#A88F5C] text-white text-sm uppercase tracking-wider hover:bg-[#EAE3D2] hover:text-[#0F0F0F] transition-all"
              >
                Book a Consultation
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-10 py-4 border border-white text-white text-sm uppercase tracking-wider hover:bg-white hover:text-[#0F0F0F] transition-colors"
              >
                Explore Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About — editorial three-column */}
      <section className="w-full bg-[#F8F6F1]">
        <div className="grid lg:grid-cols-[30%_1fr_28%] min-h-[680px]">

          {/* Left — tall portrait image */}
          <div className="relative overflow-hidden min-h-[400px] lg:min-h-0">
            <img
              src="https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRlYW18ZW58MXx8fHwxNzc1NjgxOTMxfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="HiLink team"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Middle — text content */}
          <div className="px-12 lg:px-16 py-16 lg:py-20 flex flex-col justify-center">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#A88F5C] mb-10">About the Company</p>
            <h2
              className="serif text-[#8B6914] mb-6 leading-none"
              style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', fontWeight: 400, letterSpacing: '0.08em' }}
            >
              HILINK
            </h2>
            <p className="text-[18px] uppercase tracking-[0.08em] text-[#1a1a1a] font-normal mb-6">
              Vietnam Real Estate Excellence
            </p>
            <div className="w-full h-px mb-6" style={{ backgroundColor: 'rgba(168,143,92,0.3)' }} />
            <p className="text-[15px] leading-[1.85] text-[#444] max-w-[520px] mb-12">
              We understand the complexities of cross-border investment and the unique needs of international clients. Our bilingual team provides transparent, GDPR-compliant services with a personalized concierge approach across property management, workspace solutions, and business advisory throughout Vietnam.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-3 group w-fit"
            >
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#0F0F0F] relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#A88F5C] group-hover:after:w-full after:transition-all after:duration-300">
                Learn More About Us
              </span>
              <ArrowRight size={14} className="text-[#A88F5C] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right — stats column + image panel */}
          <div className="flex flex-col">
            {/* Stats */}
            <div className="bg-[#F0EDE6] px-10 py-10 flex flex-col justify-center gap-8 flex-1">
              {[
                { end: 150, suffix: '+', label: 'Properties Managed', duration: 2 },
                { end: 12, suffix: '+', label: 'Years Experience', duration: 1.8 },
                { end: 98, suffix: '%', label: 'Client Satisfaction', duration: 2.2 },
              ].map((stat) => (
                <div key={stat.label} className="border-t border-[#A88F5C]/30 pt-5">
                  <div className="serif text-[40px] font-light text-[#8B6914] leading-none mb-2">
                    <AnimatedCounter end={stat.end} suffix={stat.suffix} duration={stat.duration} />
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-[#555]">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Image panel with countries overlay */}
            <div className="relative overflow-hidden min-h-[200px] lg:min-h-[260px]">
              <img
                src="https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRlYW18ZW58MXx8fHwxNzc1NjgxOTMxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Countries served"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center" style={{ backgroundColor: 'rgba(15,15,15,0.55)' }}>
                <div className="serif text-white text-[72px] font-light leading-none">
                  <AnimatedCounter end={8} duration={1.5} />
                </div>
                <div className="text-white uppercase tracking-[0.2em] text-[11px] mt-3">Countries Served</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Services */}
      <section className="py-24 lg:py-32 bg-[#F8F6F1]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <motion.div
            className="grid lg:grid-cols-12 gap-12 lg:gap-24 mb-20"
          >
            <motion.div className="lg:col-span-4">
              <h2 className="serif text-5xl lg:text-6xl mb-6">What We Do</h2>
            </motion.div>
            <motion.div className="lg:col-span-8">
              <p className="text-xl text-[#707070] leading-relaxed">
                End-to-end solutions for property owners, businesses, and international clients seeking excellence in Vietnam's dynamic market.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#0F0F0F]"
          >
            <ServiceCard
              icon={<TrendingUp size={32} />}
              title="Assets Management and Optimisation"
              description="Strategic oversight and performance maximisation for your real estate portfolio."
              link="/property-management"
            />
            <ServiceCard
              icon={<Briefcase size={32} />}
              title="Workspace Leasing"
              description="Premium office and coworking solutions tailored to your business needs."
              link="/workspace-leasing"
            />
            <ServiceCard
              icon={<Building2 size={32} />}
              title="Business Solutions and Consulting"
              description="Expert advisory services for market entry and business development."
              link="/business-consulting"
            />
            <ServiceCard
              icon={<Bell size={32} />}
              title="Concierge Services"
              description="Personalised support for all your property and business requirements."
              link="/concierge"
            />
            <ServiceCard
              icon={<Warehouse size={32} />}
              title="Industrial and Logistics"
              description="Specialised warehousing, factory leasing, and supply chain solutions across Vietnam."
              link="/industrial-logistics"
            />
            {/* 6th cell — CTA fills the empty slot */}
            <div className="bg-[#A88F5C] p-8 lg:p-12 flex flex-col justify-between">
              <div className="text-white/60 text-[10px] uppercase tracking-[0.3em] mb-auto">All Services</div>
              <div>
                <p className="serif text-white text-2xl lg:text-3xl mb-6 leading-snug">
                  Explore the full HiLink ecosystem
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-white text-[11px] uppercase tracking-[0.2em] border-b border-white/40 pb-1 hover:border-white transition-colors group"
                >
                  View All Services
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <motion.div
            className="text-center mb-16"
          >
            <h2 className="serif text-4xl lg:text-5xl mb-6">Featured Properties</h2>
            <p className="text-xl text-[#707070] max-w-3xl mx-auto">
              Explore our premium managed properties across Vietnam
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
          >
            <PropertyCard
              imgKey="metro"
              image="https://images.unsplash.com/photo-1641998148499-cb6b55a3c0d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBvZmZpY2UlMjBpbnRlcmlvciUyMHNwYWNlfGVufDF8fHx8MTc3NTgxMDM4NXww&ixlib=rb-4.1.0&q=80&w=1080"
              name="The Metropolitan"
              location="Ba Dinh, Hanoi"
              type="Premium Office"
              loaded={!!imgLoaded['metro']}
              onLoad={() => onImgLoad('metro')}
            />
            <PropertyCard
              imgKey="skyline"
              image="https://images.unsplash.com/photo-1768223933860-6d62bc5b2ff3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwcm9wZXJ0eSUyMGV4dGVyaW9yJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3NTgxMDM4NXww&ixlib=rb-4.1.0&q=80&w=1080"
              name="Skyline Tower"
              location="District 1, HCMC"
              type="Mixed-Use Development"
              loaded={!!imgLoaded['skyline']}
              onLoad={() => onImgLoad('skyline')}
            />
            <PropertyCard
              imgKey="vista"
              image="https://images.unsplash.com/photo-1761538367870-3a16b25f9bd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtJTIwY2l0eXNjYXBlJTIwc2t5bGluZXxlbnwxfHx8fDE3NzU4MTAzODV8MA&ixlib=rb-4.1.0&q=80&w=1080"
              name="Vista Residences"
              location="Tay Ho, Hanoi"
              type="Residential Complex"
              loaded={!!imgLoaded['vista']}
              onLoad={() => onImgLoad('vista')}
            />
          </motion.div>
        </div>
      </section>

      {/* Trust section */}
      <section className="py-24 lg:py-32 bg-[#F8F6F1]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <motion.div
            className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center"
          >
            <motion.div>
              <h2 className="serif text-4xl lg:text-5xl mb-8">
                Trusted by International Clients Across Asia
              </h2>
              <p className="text-lg text-[#707070] mb-8 leading-relaxed">
                We understand the complexities of cross-border investment and the unique needs of international clients. Our bilingual team provides transparent, GDPR-compliant services with a personalized concierge approach.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-[#A88F5C] uppercase text-sm tracking-wider group hover:gap-4 transition-all"
              >
                Learn About Us{' '}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            <motion.div
              className="relative aspect-[4/3] overflow-hidden"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src="https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRlYW18ZW58MXx8fHwxNzc1NjgxOTMxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Professional team"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-[#0F0F0F] text-white">
        <motion.div
          className="max-w-[1600px] mx-auto px-6 lg:px-12 text-center"
        >
          <h2 className="serif text-4xl lg:text-5xl mb-8">Ready to Start?</h2>
          <p className="text-xl text-[#EAE3D2] mb-12 max-w-2xl mx-auto">
            Tell us about your needs. We respond within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-block px-12 py-4 bg-[#A88F5C] text-white text-sm uppercase tracking-wider hover:bg-[#EAE3D2] hover:text-[#0F0F0F] transition-colors"
          >
            Book a Consultation
          </Link>
        </motion.div>
      </section>
    </>
  );
}

function ServiceCard({
  icon,
  title,
  description,
  link,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}) {
  return (
    <motion.div>
      <Link
        to={link}
        className="group bg-[#F8F6F1] p-8 lg:p-12 hover:bg-[#EAE3D2] transition-all block h-full"
      >
        <motion.div
          className="text-[#A88F5C] mb-6"
          whileHover={{ x: 4 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          {icon}
        </motion.div>
        <h3 className="serif text-2xl lg:text-3xl mb-4">{title}</h3>
        <p className="text-[#707070] mb-6 leading-relaxed">{description}</p>
        <div className="inline-flex items-center gap-2 text-[#0F0F0F] text-sm uppercase tracking-wider group-hover:gap-4 transition-all">
          Learn More <ArrowRight size={16} />
        </div>
      </Link>
    </motion.div>
  );
}

function PropertyCard({
  imgKey,
  image,
  name,
  location,
  type,
  loaded,
  onLoad,
}: {
  imgKey: string;
  image: string;
  name: string;
  location: string;
  type: string;
  loaded: boolean;
  onLoad: () => void;
}) {
  return (
    <motion.div
      className="group bg-white overflow-hidden"
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[#EAE3D2]">
        <motion.img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          loading="lazy"
          onLoad={onLoad}
          animate={{ opacity: loaded ? 1 : 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.06 }}
          style={{ transitionDuration: '0.6s' }}
        />
        {/* Always-visible gradient + text */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F]/75 via-[#0F0F0F]/10 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6 text-white">
          <div className="text-xs uppercase tracking-wider text-[#A88F5C] mb-1">{type}</div>
          <h3 className="serif text-xl mb-0.5">{name}</h3>
          <p className="text-sm text-white/70">{location}</p>
        </div>
      </div>
    </motion.div>
  );
}
