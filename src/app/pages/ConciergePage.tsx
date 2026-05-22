import { Link } from 'react-router';
import { Plane, UtensilsCrossed, Calendar, Key, Briefcase, Sparkles, Mail, Lock } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

const services = [
  {
    icon: <Plane size={32} />,
    title: 'Travel & Aviation',
    description: 'Private jet charters, first-class bookings, luxury hotel reservations, bespoke itineraries',
    image: 'https://images.unsplash.com/photo-1768346564233-d71f37bd19b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwcml2YXRlJTIwamV0JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzc1NzIzMjY1fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    icon: <UtensilsCrossed size={32} />,
    title: 'Dining & Entertainment',
    description: 'Private chef services, restaurant reservations at Michelin-starred venues, exclusive event access',
    image: 'https://images.unsplash.com/photo-1513772457252-c0417654a2a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5lJTIwZGluaW5nJTIwcmVzdGF1cmFudCUyMGVsZWdhbnR8ZW58MXx8fHwxNzc1NzY4MDM0fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    icon: <Calendar size={32} />,
    title: 'Events & Experiences',
    description: 'VIP access to cultural events, private tours, yacht charters, curated experiences',
    image: 'https://images.unsplash.com/photo-1652486392838-bee694e9c931?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB5YWNodCUyMG9jZWFuJTIwc3Vuc2V0fGVufDF8fHx8MTc3NTgxMTE4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    icon: <Key size={32} />,
    title: 'Lifestyle Management',
    description: 'Personal shopping, home services, relocation support, wellness and spa bookings',
    image: 'https://images.unsplash.com/photo-1774685110718-c5b4fe026144?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXNpZGVudGlhbCUyMGJ1aWxkaW5nJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzc1ODEwOTEyfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    icon: <Briefcase size={32} />,
    title: 'Business Support',
    description: 'Executive assistance, meeting coordination, translation services, corporate gifting',
    image: 'https://images.unsplash.com/photo-1698047681820-f26b00b6c639?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBoYW5kc2hha2V8ZW58MXx8fHwxNzc1NzA2MzkyfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    icon: <Sparkles size={32} />,
    title: 'Bespoke Requests',
    description: 'Whatever you need, whenever you need it. Your dedicated concierge makes it happen',
    image: 'https://images.unsplash.com/photo-1772214559608-37fdb1ff9f55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGNsdXNpdmUlMjB2aXAlMjBldmVudCUyMHBhcnR5fGVufDF8fHx8MTc3NTgxMTE4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function ConciergePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <>
      {/* Hero Section with Atmospheric Video */}
      <section className="relative min-h-screen flex items-center bg-[#0F0F0F] text-white overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-20"
          >
            <source src="https://cdn.coverr.co/videos/coverr-luxury-hotel-lobby-6142/1080p.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F0F]/80 via-[#0F0F0F]/60 to-[#0F0F0F]" />
        </div>

        <div className="relative max-w-[1600px] mx-auto px-6 lg:px-12 py-24 w-full">
          <motion.div 
            className="max-w-4xl"
          >
            <motion.div 
              className="flex items-center gap-3 mb-8"
            >
              <Sparkles size={24} className="text-[#D4AF37]" />
              <p className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
                Concierge Services
              </p>
            </motion.div>
            <motion.h1 
              className="serif text-6xl lg:text-8xl mb-8 leading-none text-white"
            >
              Your Life.<br />Perfected.
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-[#EAE3D2] mb-12 leading-relaxed max-w-2xl"
            >
              A dedicated concierge team at your service, 24/7. From the extraordinary to the everyday, we make the impossible, effortless.
            </motion.p>
            <motion.div>
              <a
                href="#enquire"
                className="inline-flex items-center gap-3 px-12 py-5 bg-[#D4AF37] text-[#0F0F0F] text-sm uppercase tracking-[0.2em] hover:bg-white transition-all"
              >
                <Lock size={18} />
                Request Membership
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[#D4AF37] animate-bounce">
          <div className="w-px h-16 bg-gradient-to-b from-[#D4AF37] to-transparent" />
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-32 bg-[#1A1A1A] text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="serif text-4xl lg:text-6xl mb-8 leading-tight">
              Time is Your Most Valuable Asset
            </h2>
            <p className="text-xl text-[#D4D4D4] leading-relaxed mb-8">
              Your dedicated concierge manages the details, so you can focus on what truly matters. From securing impossible reservations to orchestrating seamless travel, we anticipate your needs before you voice them.
            </p>
            <div className="w-24 h-px bg-[#D4AF37] mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* What We Arrange */}
      <section className="py-32 bg-[#0F0F0F] text-white">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <motion.div 
            className="text-center mb-20"
          >
            <h2 className="serif text-5xl lg:text-6xl mb-6">What We Can Arrange</h2>
            <p className="text-xl text-[#D4D4D4]">
              A selection of our most requested services
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#D4AF37]/20"
          >
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* The Difference */}
      <section className="py-32 bg-[#1A1A1A] text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div 
            className="grid lg:grid-cols-2 gap-20 items-center"
          >
            <motion.div>
              <h2 className="serif text-5xl lg:text-6xl mb-8">The HiLink Difference</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="serif text-2xl mb-3 text-[#D4AF37]">Personal. Not Automated.</h3>
                  <p className="text-[#D4D4D4] leading-relaxed">
                    You work with a dedicated concierge team who knows your preferences, anticipates your needs, and operates with complete discretion.
                  </p>
                </div>
                <div>
                  <h3 className="serif text-2xl mb-3 text-[#D4AF37]">Connected. Not Limited.</h3>
                  <p className="text-[#D4D4D4] leading-relaxed">
                    Our network spans Vietnam and beyond—exclusive access to private clubs, VIP events, and experiences unavailable to the public.
                  </p>
                </div>
                <div>
                  <h3 className="serif text-2xl mb-3 text-[#D4AF37]">Proactive. Not Reactive.</h3>
                  <p className="text-[#D4D4D4] leading-relaxed">
                    We don't wait for requests. We know your calendar, understand your preferences, and have everything arranged before you need it.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="relative aspect-[3/4] overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1768346564233-d71f37bd19b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwcml2YXRlJTIwamV0JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzc1NzIzMjY1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Luxury service"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Membership Enquiry */}
      <section id="enquire" className="py-32 bg-[#0F0F0F] text-white">
        <div className="max-w-[800px] mx-auto px-6 lg:px-12">
          <motion.div 
            className="text-center mb-16"
          >
            <Lock size={48} className="mx-auto mb-8 text-[#D4AF37]" />
            <h2 className="serif text-5xl lg:text-6xl mb-6">Membership Enquiry</h2>
            <p className="text-xl text-[#D4D4D4]">
              Concierge services are available exclusively to HiLink property clients and select members.
            </p>
          </motion.div>

          <motion.form 
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <motion.div>
              <input
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-8 py-5 bg-[#1A1A1A] border border-[#D4AF37]/30 text-white placeholder-[#707070] focus:outline-none focus:border-[#D4AF37] transition-colors"
                required
              />
            </motion.div>
            <motion.div>
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-8 py-5 bg-[#1A1A1A] border border-[#D4AF37]/30 text-white placeholder-[#707070] focus:outline-none focus:border-[#D4AF37] transition-colors"
                required
              />
            </motion.div>
            <motion.div>
              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-8 py-5 bg-[#1A1A1A] border border-[#D4AF37]/30 text-white placeholder-[#707070] focus:outline-none focus:border-[#D4AF37] transition-colors"
                required
              />
            </motion.div>
            <motion.div>
              <textarea
                placeholder="Tell us about your needs and how we can assist you..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={6}
                className="w-full px-8 py-5 bg-[#1A1A1A] border border-[#D4AF37]/30 text-white placeholder-[#707070] focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
                required
              />
            </motion.div>
            <motion.div>
              <button
                type="submit"
                className="w-full px-12 py-5 bg-[#D4AF37] text-[#0F0F0F] text-sm uppercase tracking-[0.2em] hover:bg-white transition-all"
              >
                Submit Enquiry
              </button>
            </motion.div>
            <motion.p 
              className="text-sm text-[#707070] text-center"
            >
              Your enquiry is handled with complete confidentiality. A member of our team will contact you within 24 hours.
            </motion.p>
          </motion.form>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-[#1A1A1A] text-white border-t border-[#D4AF37]/20">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[#D4AF37] mb-2">Questions?</p>
              <p className="text-xl">Our concierge team is available 24/7</p>
            </div>
            <div className="flex items-center gap-8">
              <a 
                href="mailto:concierge@hilink.vn" 
                className="flex items-center gap-3 text-[#D4D4D4] hover:text-[#D4AF37] transition-colors"
              >
                <Mail size={20} />
                <span>concierge@hilink.vn</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ServiceCard({ icon, title, description, image }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
}) {
  return (
    <motion.div 
      className="group relative bg-[#1A1A1A] overflow-hidden aspect-square"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4 }}
    >
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/80 to-transparent" />
      </div>
      <div className="relative h-full p-8 lg:p-10 flex flex-col justify-end">
        <div className="text-[#D4AF37] mb-4 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="serif text-2xl lg:text-3xl mb-4 text-white">{title}</h3>
        <p className="text-[#D4D4D4] text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
