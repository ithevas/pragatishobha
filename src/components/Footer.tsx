import { Star, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Astrology by Pragati Shobha. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
