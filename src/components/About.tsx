import { Award, BookOpen, Users, Star } from 'lucide-react';
import pragtiImage from '@/assets/pragti-shobha.jpeg';
import { Button } from '@/components/ui/button';

const achievements = [
  { icon: Award, label: 'Vedic Astrology', value: 'Expert' },
  { icon: BookOpen, label: 'Readings Done', value: '3000+' },
  { icon: Users, label: 'Happy Clients', value: '2500+' },
  { icon: Star, label: 'Years Experience', value: '9+' },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl glow-gold">
              <div className="aspect-[4/5] relative">
                <img 
                  src={pragtiImage} 
                  alt="Pragti Shobha - Vedic Astrologer" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-6">
                  <h3 className="font-display text-3xl font-bold text-foreground mb-2">
                    Pragti Shobha
                  </h3>
                  <p className="text-muted-foreground">
                    Kundali | Palm Reading | Numerology
                  </p>
                </div>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary/30 rounded-2xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-primary/30 rounded-2xl" />
          </div>

          {/* Content Side */}
          <div>
            <span className="text-primary font-medium tracking-wider uppercase text-sm">
              About the Astrologer
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
              A Journey of <span className="text-gradient-gold">Divine Discovery</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                I was sixteen when I first picked up a small booklet on palmistry, and that moment quietly changed everything. What began as curiosity soon turned into practice—reading the palms of my teachers and friends at school, testing what I learned, noticing how often it rang true.
              </p>
              <p>
                For my graduation, life took me to Banaras, where I found Shiva, or perhaps he found me, and spirituality stopped being an idea and became an experience. That is where I immersed myself fully in Vedic astrology, not casually, but with discipline and devotion.
              </p>
              <p>
                Over time, I understood something essential about myself: I am a natural empath. I don't just read charts—I feel people, their emotions, their unspoken questions, their inner conflicts. That sensitivity has guided me as much as any shastra or technique.
              </p>
              <p>
                Over this journey of nearly a decade, I've been fortunate to learn from traditional Vedic gurus, renowned astrologers, and modern astrology researchers. My work today reflects that journey—rooted in classical Vedic wisdom, informed by Western astrology, and expressed through logical spirituality and modern reasoning that speaks to real life.
              </p>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {achievements.map((item) => (
                <div
                  key={item.label}
                  className="p-4 rounded-xl bg-secondary/50 border border-border"
                >
                  <item.icon className="w-6 h-6 text-primary mb-2" />
                  <div className="text-lg font-semibold text-foreground">{item.value}</div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </div>

            <Button variant="golden" size="lg" asChild>
              <a href="https://wa.me/917310479935" target="_blank" rel="noopener noreferrer">
                Schedule a Personal Session
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
