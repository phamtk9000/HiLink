import { Link } from 'react-router';
import { Building2, Users, Wifi, Coffee, Shield, Calendar, MapPin, ArrowRight, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

const locations = [
  {
    id: 'hanoi-ba-dinh',
    name: 'HiLink Ba Dinh',
    address: 'Kim Ma Street, Ba Dinh District',
    city: 'Hanoi',
    type: 'Premium Office Building',
    capacity: '50-200 desks',
    available: true,
    image: 'https://images.unsplash.com/photo-1626187777040-ffb7cb2c5450?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb3dvcmtpbmclMjBvZmZpY2UlMjBzcGFjZXxlbnwxfHx8fDE3NzU4MTA5OTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'hcmc-district-1',
    name: 'HiLink District 1',
    address: 'Nguyen Hue Boulevard, District 1',
    city: 'Ho Chi Minh City',
    type: 'Mixed-Use Tower',
    capacity: '100-500 desks',
    available: true,
    image: 'https://images.unsplash.com/photo-1636125659769-0803b11bee67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBtZWV0aW5nJTIwcm9vbSUyMGdsYXNzfGVufDF8fHx8MTc3NTgxMDk5OXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'hanoi-tay-ho',
    name: 'HiLink Tay Ho',
    address: 'Xuan Dieu Street, Tay Ho District',
    city: 'Hanoi',
    type: 'Boutique Workspace',
    capacity: '20-80 desks',
    available: true,
    image: 'https://images.unsplash.com/photo-1765366417044-9e84ce8ec942?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBsb3VuZ2UlMjBhcmVhJTIwbW9kZXJufGVufDF8fHx8MTc3NTgxMTAwMHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'hcmc-binh-thanh',
    name: 'HiLink Binh Thanh',
    address: 'Dien Bien Phu, Binh Thanh District',
    city: 'Ho Chi Minh City',
    type: 'Corporate Campus',
    capacity: '150-600 desks',
    available: false,
    image: 'https://images.unsplash.com/photo-1716703435698-031227389c1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcml2YXRlJTIwb2ZmaWNlJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3NTcwNTY0OHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

const membershipPlans = [
  {
    name: 'Hot Desk',
    price: '$250',
    period: '/month',
    description: 'Flexible coworking access',
    features: [
      'Access during business hours',
      'Shared workspace seating',
      'High-speed WiFi',
      'Coffee & refreshments',
      'Community events',
      'Meeting room credits: 2hrs/month',
    ],
  },
  {
    name: 'Dedicated Desk',
    price: '$450',
    period: '/month',
    description: 'Your own desk, every day',
    features: [
      '24/7 building access',
      'Assigned desk with storage',
      'High-speed WiFi',
      'Unlimited coffee & refreshments',
      'Professional address',
      'Meeting room credits: 8hrs/month',
    ],
    popular: true,
  },
  {
    name: 'Private Office',
    price: 'From $1,200',
    period: '/month',
    description: 'Fully private, fully yours',
    features: [
      '24/7 building access',
      'Lockable private office',
      'Custom furniture options',
      'Dedicated phone line',
      'Professional address & mail handling',
      'Meeting room credits: 20hrs/month',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Tailored for teams of 10+',
    features: [
      'Dedicated floor or building',
      'Custom build-out & branding',
      'IT & security customization',
      'Dedicated account manager',
      'Flexible lease terms',
      'Unlimited meeting rooms',
    ],
  },
];

const amenities = [
  { icon: <Wifi size={24} />, name: 'Fiber Internet', description: '1Gbps symmetric' },
  { icon: <Coffee size={24} />, name: 'Premium Coffee', description: 'Barista-quality espresso' },
  { icon: <Users size={24} />, name: 'Meeting Rooms', description: '2-20 person capacity' },
  { icon: <Shield size={24} />, name: '24/7 Security', description: 'Access control & CCTV' },
  { icon: <Building2 size={24} />, name: 'Event Space', description: 'Community & networking' },
  { icon: <Calendar size={24} />, name: 'Flexible Terms', description: 'Month-to-month available' },
];

const clientLogos = [
  'Tech Startup A',
  'Consulting Firm B',
  'Design Agency C',
  'Law Firm D',
  'Marketing Co E',
  'Finance Group F',
];

export function WorkspacePage() {
  const [showCTA, setShowCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowCTA(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Sticky CTA */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: showCTA ? 0 : 100, opacity: showCTA ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <Link
          to="/contact"
          className="flex items-center gap-2 px-8 py-4 bg-[#A88F5C] text-white text-sm uppercase tracking-wider hover:bg-[#0F0F0F] transition-colors shadow-2xl"
        >
          <Calendar size={18} />
          Book a Tour
        </Link>
      </motion.div>

      {/* Hero Section with Video */}
      <section className="relative min-h-[80vh] flex items-center bg-[#0F0F0F] text-white overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-30"
          >
            <source src="https://cdn.coverr.co/videos/coverr-people-working-in-a-modern-office-9110/1080p.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F0F]/60 to-[#0F0F0F]/90" />
        </div>

        <div className="relative max-w-[1600px] mx-auto px-6 lg:px-12 py-24 w-full">
          <motion.div 
            className="max-w-4xl"
          >
            <motion.p 
              className="text-sm uppercase tracking-wider text-[#A88F5C] mb-8"
            >
              Workspace Leasing
            </motion.p>
            <motion.h1 
              className="serif text-5xl lg:text-7xl mb-8 leading-tight"
            >
              Work Where You Thrive
            </motion.h1>
            <motion.p 
              className="text-xl text-[#EAE3D2] mb-12 leading-relaxed"
            >
              Premium flexible workspaces designed for modern businesses. From hot desks to entire floors, find your ideal environment in Vietnam's top business districts.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#A88F5C] text-white text-sm uppercase tracking-wider hover:bg-[#EAE3D2] hover:text-[#0F0F0F] transition-colors group"
              >
                <Calendar size={18} />
                Book a Tour
              </Link>
              <a
                href="#locations"
                className="inline-flex items-center justify-center px-10 py-4 border border-white text-white text-sm uppercase tracking-wider hover:bg-white hover:text-[#0F0F0F] transition-colors"
              >
                View Locations
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why HiLink Workspaces */}
      <section className="py-24 lg:py-32 bg-[#F8F6F1]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <motion.div 
            className="text-center mb-16"
          >
            <h2 className="serif text-4xl lg:text-5xl mb-6">Why Choose HiLink</h2>
            <p className="text-xl text-[#707070] max-w-3xl mx-auto">
              More than just a desk—a complete business ecosystem
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 lg:grid-cols-6 gap-8"
          >
            {amenities.map((amenity) => (
              <motion.div 
                key={amenity.name}
                className="text-center"
                whileHover={{ y: -5 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full text-[#A88F5C] mb-4">
                  {amenity.icon}
                </div>
                <h3 className="serif text-lg mb-2">{amenity.name}</h3>
                <p className="text-sm text-[#707070]">{amenity.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <motion.div 
            className="text-center mb-16"
          >
            <h2 className="serif text-4xl lg:text-5xl mb-6">Flexible Membership Options</h2>
            <p className="text-xl text-[#707070] max-w-3xl mx-auto">
              Choose the workspace solution that fits your business
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {membershipPlans.map((plan) => (
              <PlanCard key={plan.name} {...plan} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Locations */}
      <section id="locations" className="py-24 lg:py-32 bg-[#F8F6F1]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <motion.div 
            className="text-center mb-16"
          >
            <h2 className="serif text-4xl lg:text-5xl mb-6">Our Locations</h2>
            <p className="text-xl text-[#707070] max-w-3xl mx-auto">
              Premium workspaces in Vietnam's most sought-after business districts
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-8"
          >
            {locations.map((location) => (
              <LocationCard key={location.id} {...location} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 bg-white border-y border-[#0F0F0F]/10">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <p className="text-center text-sm uppercase tracking-wider text-[#707070] mb-12">
            Trusted by Leading Companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {clientLogos.map((logo) => (
              <div key={logo} className="text-[#0F0F0F]/40 text-lg uppercase tracking-wider">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-[#0F0F0F] text-white">
        <motion.div 
          className="max-w-[1600px] mx-auto px-6 lg:px-12 text-center"
        >
          <h2 className="serif text-4xl lg:text-5xl mb-8">
            Ready to Find Your Perfect Workspace?
          </h2>
          <p className="text-xl text-[#EAE3D2] mb-12 max-w-2xl mx-auto">
            Book a tour of any of our locations. Our team will help you find the ideal solution for your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-12 py-4 bg-[#A88F5C] text-white text-sm uppercase tracking-wider hover:bg-[#EAE3D2] hover:text-[#0F0F0F] transition-colors"
          >
            <Calendar size={18} />
            Schedule a Tour
          </Link>
        </motion.div>
      </section>
    </>
  );
}

function PlanCard({ name, price, period, description, features, popular }: {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
}) {
  return (
    <motion.div 
      className={`bg-white p-8 relative ${popular ? 'ring-2 ring-[#A88F5C]' : 'border border-[#0F0F0F]/10'}`}
      whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#A88F5C] text-white text-xs uppercase tracking-wider">
          Popular
        </div>
      )}
      <h3 className="serif text-2xl mb-2">{name}</h3>
      <p className="text-sm text-[#707070] mb-6">{description}</p>
      <div className="mb-8">
        <span className="serif text-4xl">{price}</span>
        <span className="text-[#707070]">{period}</span>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 text-sm">
            <Check size={16} className="text-[#A88F5C] flex-shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Link
        to="/contact"
        className="block w-full text-center px-6 py-3 bg-[#0F0F0F] text-white text-sm uppercase tracking-wider hover:bg-[#A88F5C] transition-colors"
      >
        Get Started
      </Link>
    </motion.div>
  );
}

function LocationCard({ id, name, address, city, type, capacity, available, image }: {
  id: string;
  name: string;
  address: string;
  city: string;
  type: string;
  capacity: string;
  available: boolean;
  image: string;
}) {
  return (
    <motion.div 
      className="group bg-white overflow-hidden"
      whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}
    >
      <Link to={`/workspace/${id}`}>
        <div className="relative aspect-[16/10] overflow-hidden">
          <motion.img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
          />
          <div className="absolute top-6 right-6">
            <div className={`px-4 py-2 text-xs uppercase tracking-wider ${
              available ? 'bg-[#A88F5C] text-white' : 'bg-[#707070] text-white'
            }`}>
              {available ? 'Now Available' : 'Coming Soon'}
            </div>
          </div>
        </div>
        <div className="p-8">
          <div className="text-sm uppercase tracking-wider text-[#A88F5C] mb-3">{city}</div>
          <h3 className="serif text-3xl mb-4">{name}</h3>
          <div className="flex items-start gap-2 text-[#707070] mb-4">
            <MapPin size={16} className="flex-shrink-0 mt-1" />
            <span className="text-sm">{address}</span>
          </div>
          <div className="flex items-center justify-between pt-6 border-t border-[#0F0F0F]/10">
            <div>
              <div className="text-xs text-[#707070] mb-1">Type</div>
              <div className="text-sm">{type}</div>
            </div>
            <div>
              <div className="text-xs text-[#707070] mb-1">Capacity</div>
              <div className="text-sm">{capacity}</div>
            </div>
          </div>
          <div className="mt-6">
            <div className="inline-flex items-center gap-2 text-sm uppercase tracking-wider text-[#0F0F0F] group-hover:text-[#A88F5C] group-hover:gap-4 transition-all">
              View Details <ArrowRight size={16} />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
