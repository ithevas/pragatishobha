import { Button } from '@/components/ui/button';
import { Sparkles, Phone, Instagram, Youtube } from 'lucide-react';
import StarField from './StarField';
import heroImage from '@/assets/hero-cosmic.jpg';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Stars Overlay */}
      <StarField />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mt-8 rounded-full bg-secondary border border-primary/30 mb-8 animate-float">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              Vedic Astrology & Jyotish Shastra
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground">When You’re Ready for Answers,</span>
            <br />
            <span className="text-gradient-gold">Astrology Speaks</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Your Kundali is not random. It reflects your karma, strengths, and turning points. With accurate chart analysis, Palm Reading, and Numerology, gain clarity where life feels confusing.
            Receive personalized compatibility insights, meaningful remedies, and compassionate guidance.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="golden" size="xl" className="group" asChild>
              <a href="https://wa.me/917310479935" target="_blank" rel="noopener noreferrer">
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Book Your Consultation
              </a>
            </Button>
            <Button variant="cosmic" size="xl" asChild>
              <a href="https://www.instagram.com/pragaatishobha" target='_blank'>
                <Instagram className="w-5 h-5" />
                Instagram
              </a>
            </Button>
            <Button variant="cosmic" size="xl" asChild>
              <a href="https://www.youtube.com/@pragatishobha" target='_blank'>
                <Youtube className="w-5 h-5" />
                Youtube
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-muted-foreground">
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-primary">9+</div>
              <div className="text-sm">Years Experience</div>
            </div>
            <div className="w-px h-12 bg-border hidden sm:block" />
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-primary">3000+</div>
              <div className="text-sm">Readings Done</div>
            </div>
            <div className="w-px h-12 bg-border hidden sm:block" />
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-primary">2500+</div>
              <div className="text-sm">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
