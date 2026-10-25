import { useState } from "react";
import {
  Plus,
  Minus,
  MessageCircle,
  Phone,
  Sparkles,
  HelpCircle,
  ArrowUpRight,
  Star,
} from "lucide-react";
import { person_name, phone_number, whatsapp_number } from "./secret";

const faqs = [
  {
    question: `Can We Meet Astrologer ${person_name}?`,
    answer:
      "Yes, personal meetings are available with prior appointment. You can contact us on WhatsApp to check availability and arrange a suitable time.",
    type: "appointment",
    category: "Appointments",
  },
  {
    question: "Is Telephonic Consultation Available?",
    answer:
      "Yes. Telephonic consultations are available, allowing you to connect from anywhere. You can call us directly to discuss consultation availability.",
    type: "phone",
    category: "Consultation",
  },
  {
    question: "What Kind Of Astrology Services Are Available?",
    answer:
      "We provide traditional guidance relating to Vastu, horoscope reading, career, marriage, relationships, family and business matters.",
    type: "service",
    category: "Services",
  },
  {
    question: "What Kind Of Products Are Available?",
    answer:
      "Depending on your requirements, astrological and spiritual products such as gemstones, yantras and related traditional items may be available.",
    type: "products",
    category: "Products",
  },
  {
    question: "Do You Offer Astrology Courses?",
    answer:
      "Yes. Astrology learning courses may be available for people interested in learning traditional astrology at different levels.",
    type: "course",
    category: "Learning",
  },
  {
    question: "What Is Covered In The Astrology Course?",
    answer:
      "Course topics can include horoscope reading, fundamentals of astrology, palmistry basics and traditional predictive methods.",
    type: "course",
    category: "Learning",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

const toggleFAQ = (index: number):void => { 
    setOpenIndex(openIndex===index ? 0 : index); 
  };


  return (
    <section className="relative isolate overflow-hidden bg-[#f8f5ef] px-4 py-20 sm:px-6 md:py-28">
      {/* Soft celestial background details */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.28] [background-image:radial-gradient(#c6a76a_0.7px,transparent_0.7px)] [background-size:22px_22px]" />
      <div className="pointer-events-none absolute -right-32 -top-32 -z-10 h-[28rem] w-[28rem] rounded-full bg-[#d6b56b]/20 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-36 -z-10 h-[30rem] w-[30rem] rounded-full bg-[#7e2528]/10 blur-[110px]" />

      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center md:mb-16">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#c5a15d]/35 bg-white/75 px-4 py-2 shadow-sm backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-[#a17b35]" />
            <span className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#8a682f] sm:text-xs">
              A little clarity
            </span>
            <Sparkles className="h-4 w-4 text-[#a17b35]" />
          </div>
          <h2 className="montserrat text-4xl font-extrabold leading-[1.08] tracking-tight text-[#291b15] sm:text-5xl md:text-6xl">
            Questions, answered
            <span className="mt-2 block font-semibold text-[#8b292c]">with care and clarity.</span>
          </h2>
          <div className="mx-auto my-6 flex w-40 items-center gap-3">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#c5a15d]" />
            <span className="h-2.5 w-2.5 rotate-45 border border-[#b78f45] bg-[#d9bd7c]" />
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#c5a15d]" />
          </div>
          <p className="open-sans mx-auto max-w-2xl text-sm leading-7 text-[#75675c] sm:text-base md:text-lg">
            Everything you may want to know about consultations, traditional astrology services, products and courses.
          </p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[0.78fr_1.45fr] lg:gap-12">
          {/* Contact card */}
          <aside className="relative lg:sticky lg:top-8">
            <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-[#d7bd7d]/60 via-transparent to-[#8b292c]/20 blur-sm" />
            <div className="relative overflow-hidden rounded-[1.8rem] bg-[#241711] p-7 text-white shadow-[0_24px_70px_rgba(48,29,19,0.2)] sm:p-8">
              <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full border border-[#d5b66e]/20" />
              <div className="absolute -right-3 -top-3 h-28 w-28 rounded-full border border-[#d5b66e]/15" />
              <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-[#d8b96f] to-transparent" />

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d7b96e]/35 bg-[#d7b96e]/10 shadow-inner">
                  <HelpCircle className="h-7 w-7 text-[#e6ca83]" strokeWidth={1.6} />
                </div>
                <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.24em] text-[#d9b96d]">Here to help</p>
                <h3 className="montserrat mt-2 text-2xl font-extrabold leading-snug sm:text-3xl">
                  Still have a question?
                </h3>
                <p className="open-sans mt-3 text-sm leading-7 text-[#d0c2b6]">
                  Talk to us directly and get details about consultation options and appointment availability.
                </p>

                <div className="mt-7 flex items-center gap-3 border-t border-white/10 pt-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
                    <Star className="h-4 w-4 fill-[#d7b96e] text-[#d7b96e]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#d7b96e]">Personal guidance</p>
                    <p className="montserrat mt-1 truncate text-base font-bold text-[#fff8e9]">{person_name}</p>
                  </div>
                </div>

                <div className="mt-7 grid gap-3">
                  <a
                    href={`tel:${phone_number}`}
                    className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#a73535] to-[#812327] px-4 py-3 text-sm font-bold text-white shadow-lg shadow-black/15 transition duration-300 hover:-translate-y-0.5 hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#e2c77d] focus:ring-offset-2 focus:ring-offset-[#241711]"
                  >
                    <Phone className="h-4 w-4" /> Call us
                    <ArrowUpRight className="ml-auto h-4 w-4 opacity-70 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <a
                    href={`https://wa.me/${whatsapp_number}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#d8b96f]/40 bg-white/[0.03] px-4 py-3 text-sm font-bold text-[#e8ce8d] transition duration-300 hover:-translate-y-0.5 hover:bg-[#d8b96f]/10 focus:outline-none focus:ring-2 focus:ring-[#e2c77d]"
                  >
                    <MessageCircle className="h-4 w-4" /> WhatsApp us
                    <ArrowUpRight className="ml-auto h-4 w-4 opacity-70 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
                <p className="mt-5 text-center text-[10px] tracking-wide text-white/40">Private enquiries · Appointment by request</p>
              </div>
            </div>
          </aside>

          {/* FAQ accordion */}
          <div className="space-y-3.5">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const answerId = `faq-answer-${index}`;
              return (
                <article
                  key={faq.question}
                  className={`group overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "border-[#c6a45e]/65 bg-white shadow-[0_16px_42px_rgba(53,35,22,0.09)]"
                      : "border-[#e8dfd2] bg-white/75 hover:border-[#c6a45e]/50 hover:bg-white hover:shadow-[0_8px_28px_rgba(53,35,22,0.05)]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    className="flex w-full items-center gap-4 px-4 py-5 text-left sm:px-6 sm:py-5"
                  >
                    <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-xs font-extrabold tracking-wide transition-colors ${isOpen ? "bg-[#8b292c] text-white" : "bg-[#f4ecdf] text-[#9b7636] group-hover:bg-[#efe1c8]"}`}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className={`mb-1 block text-[9px] font-bold uppercase tracking-[0.18em] ${isOpen ? "text-[#a27c39]" : "text-[#9b8b7c]"}`}>
                        {faq.category}
                      </span>
                      <span className={`montserrat block text-sm font-bold leading-6 sm:text-base ${isOpen ? "text-[#84272a]" : "text-[#30221a]"}`}>
                        {faq.question}
                      </span>
                    </span>
                    <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${isOpen ? "rotate-180 bg-[#f4e8d4] text-[#8b292c]" : "bg-[#f8f4ed] text-[#8b292c] group-hover:bg-[#f0e4cf]"}`}>
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>

                  <div
                    id={answerId}
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                    aria-hidden={!isOpen}
                  >
                    <div className="overflow-hidden">
                      <div className="ml-[4.25rem] mr-4 border-t border-[#eee5d9] pb-5 pt-4 sm:ml-[5.5rem] sm:mr-6 sm:pb-6">
                        <p className="open-sans text-sm leading-7 text-[#716256] sm:text-[15px]">{faq.answer}</p>
                        {faq.type === "appointment" && (
                          <a
                            href={`https://wa.me/${whatsapp_number}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-flex items-center gap-2 text-xs font-extrabold text-[#8b292c] transition-colors hover:text-[#a77c32] sm:text-sm"
                          >
                            <MessageCircle className="h-4 w-4" /> Ask about appointments <ArrowUpRight className="h-3.5 w-3.5" />
                          </a>
                        )}
                        {faq.type === "phone" && (
                          <a
                            href={`tel:${phone_number}`}
                            className="mt-4 inline-flex items-center gap-2 text-xs font-extrabold text-[#8b292c] transition-colors hover:text-[#a77c32] sm:text-sm"
                          >
                            <Phone className="h-4 w-4" /> Call for consultation <ArrowUpRight className="h-3.5 w-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
            <p className="px-2 pt-2 text-center text-xs leading-6 text-[#9a8b7c] sm:text-left">
              Have a question that isn’t listed? Use the contact options and we’ll help you find the right information.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
