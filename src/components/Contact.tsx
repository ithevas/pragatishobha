import { Phone, Mail, MapPin, Clock, Send, Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  { icon: Instagram, label: 'Instagram', value: '@pragaatishobha' },
  { icon: Youtube, label: 'YouTube', value: 'Pragati Shobha' },
  { icon: Mail, label: 'Email', value: 'cosmoswithpragati@gmail.com' },
  { icon: MapPin, label: 'Location', value: 'Noida, Uttar Pradesh, India' },
  { icon: Clock, label: 'Consultation Hours', value: '9:00 AM - 7:00 PM IST' },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message Sent!',
      description: 'We will contact you shortly for your consultation.',
    });
    setFormData({ name: '', phone: '', email: '', service: '', message: '' });
  };

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
                    <div className="text-foreground font-medium">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          {/* <div className="card-gradient rounded-2xl p-8 border border-border">
            <h3 className="font-display text-2xl font-semibold mb-6 text-foreground">
              Book Your Consultation
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none transition-colors text-foreground"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none transition-colors text-foreground"
                    placeholder="+91 XXXXX XXXXX"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-muted-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none transition-colors text-foreground"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-muted-foreground mb-2">
                  Service Required
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none transition-colors text-foreground"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="kundali-30">Kundali Analysis - 30 min (₹1,070)</option>
                  <option value="kundali-60">Kundali Analysis - 60 min (₹1,700)</option>
                  <option value="palm-kundali-30">Palm & Kundali Analysis - 30 min (₹1,151)</option>
                  <option value="palm-kundali-60">Palm & Kundali Analysis - 60 min (₹1,800)</option>
                  <option value="compatibility-30">Compatibility Milan - 30 min (₹1,610)</option>
                  <option value="compatibility-60">Compatibility Milan - 60 min (₹2,600)</option>
                  <option value="premium">Premium Package - 60 min (₹3,500)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-muted-foreground mb-2">
                  Your Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none transition-colors text-foreground resize-none"
                  placeholder="Tell us about your concerns..."
                />
              </div>

              <Button type="submit" variant="golden" size="lg" className="w-full">
                <Send className="w-5 h-5" />
                Send Message
              </Button>
            </form>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
