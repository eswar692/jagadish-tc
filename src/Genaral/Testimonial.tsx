import { Quote, Star, MapPin, Sparkles, MessageCircle } from "lucide-react";
import { person_name, whatsapp_number } from "./secret";

const testimonials = [
  {
    name: "Arjun Verma",
    location: "Mumbai",
    image: "https://astrologerdeepaksharma.in/images/client-2.png",
    text: `${person_name} Ji gave me advice on business-related issues. I sought his advice when I was in the midst of a significant loss; his remedies are effective and yield results quickly.`,
  },
  {
    name: "Mala Kapoor",
    location: "Goa",
    image: "https://astrologerdeepaksharma.in/images/client-1.png",
    text: `I'm appreciative of Pandith ${person_name}. For me, his prophecies come true. The fact that he is constantly there to lead me makes me feel lucky. It was great for me.`,
  },
  {
    name: "Pratha Kumari",
    location: "Delhi",
    image: "https://astrologerdeepaksharma.in/images/client-2.png",
    text: "My kids abruptly stopped paying attention to me. I sought his advice when I started to feel concerned. He offered solutions that improved my kids’ behavior and brought peace at home.",
  },
  {
    name: "Ravi Singh",
    location: "Bangalore",
    image:
      "https://i.pinimg.com/736x/a7/99/d0/a799d0592bae082bbd34c3ce9476491b.jpg",
    text: "I was having relationship issues with my spouse. I sought his advice, and he provided me with remedies that helped me resolve my issues and brought harmony to my relationship.",
  },
  {
    name: "Sneha Nair",
    location: "Kochi",
    image:
      "https://i.pinimg.com/736x/19/c8/c7/19c8c789aec27508fee721babf82597e.jpg",
    text: `I was struggling with career growth. ${person_name} Ji gave me clear guidance and after following his remedies, I found new opportunities at work.`,
  },
  {
    name: "Karan Mehta",
    location: "Ahmedabad",
    image:
      "https://i.pinimg.com/736x/7e/46/c6/7e46c6d2798eff446b365c5246f4c9ca.jpg",
    text: `I faced unexpected financial hurdles. With ${person_name} Ji's guidance, my situation turned around and I regained stability.`,
  },
  {
    name: "Divya Sharma",
    location: "Jaipur",
    image:
      "https://i.pinimg.com/736x/ad/14/bf/ad14bf9ce76a0751060657d57e177ca4.jpg",
    text: "I felt mentally low and anxious. His positive energy and remedies gave me peace of mind and restored my confidence.",
  },
  {
    name: "Vikram Chauhan",
    location: "Chandigarh",
    image:
      "https://i.pinimg.com/1200x/0e/1b/49/0e1b4984c22ff810051677b8c7a29e7d.jpg",
    text: `Family disputes were creating stress at home. ${person_name} Ji gave me practical solutions and now harmony has returned to my family life.`,
  },
  {
    name: "Neha Reddy",
    location: "Hyderabad",
    image:
      "https://i.pinimg.com/736x/50/90/f6/5090f6123b7570102d14d6dbac939756.jpg",
    text: "My marriage was being delayed. With his remedies and pujas, within months my marriage got fixed happily.",
  },
  {
    name: "Rahul Bansal",
    location: "Lucknow",
    image:
      "https://i.pinimg.com/736x/c4/d8/f8/c4d8f8f64e1f00a5ca02253f5ecc27d0.jpg",
    text: `I had constant health issues. Following ${person_name} Ji’s guidance, my health improved steadily and I feel much stronger now.`,
  },
  {
    name: "Pooja Iyer",
    location: "Chennai",
    image:
      "https://i.pinimg.com/736x/56/2e/eb/562eeb2796c005cfb01a6cfd79094dc9.jpg",
    text: `I was worried about my job abroad visa getting rejected. ${person_name} Ji guided me with remedies, and finally my visa got approved without obstacles.`,
  },
  {
    name: "Siddharth Joshi",
    location: "Pune",
    image:
      "https://i.pinimg.com/736x/28/6b/03/286b03b2ad1c09bf52cbcc99a4dabba4.jpg",
    text: `I had constant misunderstandings with my partner. With ${person_name} Ji's support, our bond became stronger and filled with love again.`,
  },
];

export default function Testimonials() {
  return (
    <section className="relative isolate overflow-hidden bg-[#160f0c] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      {/* Ambient light + subtle celestial texture */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-[#9d6b2f]/15 blur-[120px]" />
        <div className="absolute -right-32 top-1/3 h-[28rem] w-[28rem] rounded-full bg-[#7d2525]/20 blur-[130px]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(#e8c77c_0.7px,transparent_0.7px)] [background-size:22px_22px]" />
        <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#d9b66b]/50 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-[1320px]">
        {/* Section introduction */}
        <header className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#d9b66b]/25 bg-white/[0.035] px-4 py-2 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-[#e6c77f]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#e6c77f] sm:text-xs">Stories of trust</span>
            <Sparkles className="h-4 w-4 text-[#e6c77f]" />
          </div>
          <h2 className="montserrat text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-[#fff8ec] sm:text-5xl md:text-6xl">
            Real words. <span className="block bg-gradient-to-r from-[#f4dfaa] via-[#c99b4d] to-[#f0d99b] bg-clip-text text-transparent">Personal journeys.</span>
          </h2>
          <div className="mx-auto my-7 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#c9a45b] sm:w-20" />
            <span className="h-2 w-2 rotate-45 border border-[#e3c477] bg-[#c9a45b]/40" />
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#c9a45b] sm:w-20" />
          </div>
          <p className="open-sans mx-auto max-w-2xl text-sm leading-7 text-[#c7b9a8] sm:text-base sm:leading-8">
            Explore experiences from people who came seeking clarity, perspective and spiritual guidance through life’s important moments.
          </p>
        </header>

        {/* Testimonial collection */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <article
              key={`${testimonial.name}-${index}`}
              className={`group relative flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-white/[0.09] bg-gradient-to-br from-[#fffaf0] to-[#f1e8d8] p-6 shadow-[0_16px_50px_rgba(0,0,0,0.16)] transition duration-500 hover:-translate-y-1.5 hover:border-[#d2ae62]/70 hover:shadow-[0_24px_65px_rgba(0,0,0,0.3)] sm:p-7 ${index === 0 ? "sm:col-span-2 xl:col-span-2" : ""}`}
            >
              <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[#c6a052] to-transparent opacity-80" />
              <div className="absolute -right-5 -top-7 h-28 w-28 rounded-full border border-[#a77e36]/10 transition duration-500 group-hover:scale-110" />
              <div className="absolute right-6 top-5 text-[#c8a75d]/30 transition-colors duration-300 group-hover:text-[#b58a3d]/55">
                <Quote className="h-10 w-10 sm:h-12 sm:w-12" strokeWidth={1.4} />
              </div>

              <div className="relative flex items-center gap-3.5 pr-9">
                <div className="relative shrink-0 rounded-2xl bg-gradient-to-br from-[#e5c879] via-[#b98c3d] to-[#785221] p-[2px] shadow-md">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    loading="lazy"
                    className="h-[3.65rem] w-[3.65rem] rounded-[0.85rem] bg-[#e8dfcf] object-cover sm:h-16 sm:w-16"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="montserrat truncate text-sm font-bold tracking-[-0.01em] text-[#281a12] sm:text-base">{testimonial.name}</h3>
                  <div className="mt-1.5 flex items-center gap-1.5 text-xs text-[#796b5b]">
                    <MapPin className="h-3.5 w-3.5 text-[#a77c31]" />
                    <span>{testimonial.location}</span>
                  </div>
                </div>
              </div>

              <div className="relative mt-5 flex items-center gap-1" aria-label="5 out of 5 stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-3.5 w-3.5 fill-[#bd913c] text-[#bd913c]" />
                ))}
                <span className="ml-2 text-[9px] font-bold uppercase tracking-[0.18em] text-[#8d6b2e]">Client reflection</span>
              </div>

              <p className={`relative mt-4 flex-1 font-serif text-[15px] leading-7 text-[#514338] sm:text-base sm:leading-8 ${index === 0 ? "xl:text-[17px]" : ""}`}>
                “{testimonial.text}”
              </p>

              <div className="relative mt-6 flex items-center justify-between border-t border-[#d9cbb4] pt-4">
                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#8b6a31]">A shared experience</span>
                <span className="h-px w-9 bg-gradient-to-r from-[#c8a154] to-transparent transition-all duration-300 group-hover:w-14" />
              </div>
            </article>
          ))}
        </div>

        {/* Contact panel */}
        <div className="relative mt-12 overflow-hidden rounded-[1.75rem] border border-[#d6b66b]/25 bg-gradient-to-br from-[#302018] via-[#241711] to-[#19110d] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.25)] sm:mt-16 sm:p-8 lg:p-10">
          <div aria-hidden="true" className="absolute -right-12 -top-24 h-64 w-64 rounded-full border border-[#d6b66b]/10 sm:h-80 sm:w-80" />
          <div aria-hidden="true" className="absolute -right-2 -top-14 h-52 w-52 rounded-full border border-[#d6b66b]/10 sm:h-64 sm:w-64" />
          <div className="relative flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
            <div className="max-w-xl">
              <span className="mb-3 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#dfbf77]">
                <Sparkles className="h-3.5 w-3.5" /> Your next step starts here
              </span>
              <h3 className="montserrat text-2xl font-semibold tracking-[-0.03em] text-[#fff7e9] sm:text-3xl">Looking for personal guidance?</h3>
              <p className="mt-2 text-sm leading-6 text-[#c8b7a5]">Start a private conversation and share what’s on your mind.</p>
            </div>
            <a
              href={`https://wa.me/${whatsapp_number}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-[#d8b765] to-[#b98b3b] px-6 py-3 text-sm font-bold text-[#24170e] shadow-[0_8px_24px_rgba(190,147,62,0.18)] transition duration-300 hover:-translate-y-0.5 hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#f1d998] focus:ring-offset-2 focus:ring-offset-[#241711]"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
