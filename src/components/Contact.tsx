import { Mail, MapPin, Clock, Instagram, Youtube } from 'lucide-react';

const contactInfo = [
  { icon: Instagram, label: 'Instagram', value: '@pragaatishobha', href: 'https://www.instagram.com/pragaatishobha' },
  { icon: Youtube, label: 'YouTube', value: 'Pragati Shobha', href: 'https://www.youtube.com/@pragatishobha' },
  { icon: Mail, label: 'Email', value: 'cosmoswithpragati@gmail.com', href: 'mailto:cosmoswithpragati@gmail.com' },
  { icon: MapPin, label: 'Location', value: 'Noida, Uttar Pradesh, India' },
  { icon: Clock, label: 'Consultation Hours', value: '9:00 AM - 7:00 PM IST' },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <span className="text-primary font-medium tracking-wider uppercase text-sm">
              Get in Touch
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
              Begin Your <span className="text-gradient-gold">Cosmic Journey</span>
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Ready to unlock the secrets of your destiny? Reach out for a personal
              consultation and take the first step towards a brighter future.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('mailto:') ? undefined : '_blank'}
                        rel="noopener noreferrer"
                        className="text-foreground font-medium hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-foreground font-medium">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
