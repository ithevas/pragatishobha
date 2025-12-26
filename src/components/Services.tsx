import { ScrollText, Heart, Home, Compass, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: ScrollText,
    title: 'Kundali Analysis',
    description: 'Comprehensive birth chart reading with detailed planetary positions and life predictions.',
    price30: '₹1,070',
    price60: '₹1,700',
  },
  {
    icon: Heart,
    title: 'Palm & Kundali Analysis',
    description: 'Combined palm reading and birth chart analysis for deeper insights into your destiny.',
    price30: '₹1,151',
    price60: '₹1,800',
  },
  {
    icon: Home,
    title: 'Compatibility Milan',
    description: 'Guna Milan and comprehensive compatibility analysis for prospective life partners.',
    price30: '₹1,610',
    price60: '₹2,600',
  },
];

const premiumPackage = {
  icon: Compass,
  title: 'Premium Package',
  description: 'Complete 60-minute session including Numerology, Palm and Kundali Analysis with personalized Remedies and Life Advices.',
  price: '₹3,500',
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-cosmic relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cosmic-purple/30 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-wider uppercase text-sm">
            Our Services
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Ancient Wisdom for <span className="text-gradient-gold">Modern Life</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience transformative guidance through time-tested Vedic astrology practices
          </p>
        </div>

        {/* Duration Badge */}
        <div className="flex justify-center mb-10">
          <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary font-medium">
            <Sparkles className="w-4 h-4" />
            30 min | 60 min Sessions
            <Sparkles className="w-4 h-4" />
          </span>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group card-gradient rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-display text-2xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Price */}
              <div className="flex items-center gap-4 mb-6">
                <div className="text-center">
                  <span className="block text-xs text-muted-foreground mb-1">30 min</span>
                  <span className="text-xl font-display font-bold text-primary">{service.price30}</span>
                </div>
                <div className="h-8 w-px bg-border" />
                <div className="text-center">
                  <span className="block text-xs text-muted-foreground mb-1">60 min</span>
                  <span className="text-xl font-display font-bold text-primary">{service.price60}</span>
                </div>
              </div>

              <Button variant="cosmic" size="sm" className="w-full" asChild>
                <a href="https://wa.me/917310479935" target="_blank" rel="noopener noreferrer">
                  Book Now
                </a>
              </Button>
            </div>
          ))}
        </div>

        {/* Premium Package */}
        <div className="max-w-3xl mx-auto">
          <div className="relative group card-gradient rounded-2xl p-10 border-2 border-primary/50 hover:border-primary transition-all duration-500 hover:shadow-xl hover:shadow-primary/20">
            {/* Premium Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm">
                <Sparkles className="w-4 h-4" />
                Premium Package
                <Sparkles className="w-4 h-4" />
              </span>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8 mt-4">
              {/* Icon */}
              <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/30 transition-colors">
                <premiumPackage.icon className="w-10 h-10 text-primary" />
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-display text-2xl font-semibold mb-2 text-foreground">
                  {premiumPackage.title} - 60 mins
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {premiumPackage.description}
                </p>
              </div>

              {/* Price & CTA */}
              <div className="flex flex-col items-center gap-3 shrink-0">
                <span className="text-3xl font-display font-bold text-primary">
                  {premiumPackage.price}
                </span>
                <Button variant="cosmic" asChild>
                  <a href="https://wa.me/917310479935" target="_blank" rel="noopener noreferrer">
                    Book Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
