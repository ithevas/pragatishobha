import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Vijayshankar S.',
    text: "I came for a career reading and honestly didn't expect much. But the way Pragati connected timelines, patterns, and my current confusion… it was scary accurate. I finally made a switch I was delaying for 2 years. Things are calmer now. Thank you for being practical, not dramatic.",
    rating: 5,
  },
  {
    name: 'Mohona B.',
    text: "I felt SEEN. Not judged, not scared, not pushed. Pragati ma'am explained my chart like a story, not a lecture. I've stopped blaming myself so much after that session. That alone is priceless 💛",
    rating: 5,
  },
  {
    name: 'Sonakshi J.',
    text: "Clear. Sharp. No fluff. Pragati's reading helped me understand why my business cycles were unstable and what I was doing wrong energetically. The remedies were doable, not extreme. Revenue picked up within 3 months. Will definitely come back.",
    rating: 5,
  },
  {
    name: 'Madhuri Y.',
    text: "Some readings predict events. Pragati's session explained me. Why I feel the way I feel, why certain patterns repeat, and what I'm here to learn. It felt less like astrology and more like remembering something I already knew.",
    rating: 5,
  },
  {
    name: 'Jitender S.',
    text: "I consulted Pragati ma'am regarding family issues and constant mental restlessness. She didn't scare me with 'doshas' or exaggerate problems. She explained causes patiently and suggested simple changes. The house feels lighter now. That matters to me.",
    rating: 5,
  },
  {
    name: 'Amy R.',
    text: "Booked the session at 2am cause I was spiralling lol. Didn't expect Pragati to be this grounding. She didn't promise miracles, but she gave clarity. And weirdly… that fixed a lot. 🙏",
    rating: 5,
  },
  {
    name: 'Pranav M.',
    text: "I was stuck between logic and feelings in my love life. Pragati ma'am's reading helped me understand timing instead of forcing outcomes. I walked away from something unhealthy without guilt. That's growth.",
    rating: 5,
  },
  {
    name: 'Puneet S.',
    text: "Accurate, kind, and very real. No sugarcoating, no fear tactics. Just honest astrology. ⭐ Highly recommend.",
    rating: 5,
  },
  {
    name: 'Deepika K.',
    text: "Main bahut time se confused thi, khud par doubt karti rehti thi. Pragati ma'am se baat karke laga jaise koi cheez andar settle ho gayi ho. Aapne sirf future nahi bataya, mujhe samjhaya. Bahut shukriya 🌸",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-cosmic relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-wider uppercase text-sm">
            Testimonials
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Stories of <span className="text-gradient-gold">Transformation</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from those whose lives have been touched by divine guidance
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="card-gradient rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-500 relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/20" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-semibold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
