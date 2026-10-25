import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronRight,
  MessageCircle,
  Phone,
  Sparkles,
  ShieldCheck,
  Compass,
} from "lucide-react";
import useInViewOnce from "./InView";
import {
  business_name,
  person_name,
  phone_number,
  whatsapp_number,
} from "./secret";

export default function Footer() {
  const [ref, inView] = useInViewOnce(0.12);

  const services = [
    "Personal Spiritual Guidance",
    "Relationship Guidance",
    "Astrology Consultation",
    "Love & Relationship Guidance",
    "Love Marriage Guidance",
    "Marriage Compatibility Guidance",
  ];

  const values = [
    "Traditional astrology guidance",
    "Personalized consultations",
    "Online consultation options",
    "Private and respectful conversations",
  ];

  return (
    <footer className="relative isolate overflow-hidden bg-[#17100d] text-[#f8f1e5]">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:radial-gradient(#d9b66d_0.7px,transparent_0.7px)] [background-size:22px_22px]" />
      <div className="pointer-events-none absolute -left-36 top-20 h-[28rem] w-[28rem] rounded-full bg-[#9b6d2b]/15 blur-[100px]" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-[30rem] w-[30rem] rounded-full bg-[#8b292b]/20 blur-[110px]" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 mx-auto max-w-[1440px] px-5 pb-8 pt-12 sm:px-8 md:pt-16 lg:px-12"
      >
        {/* Statement / contact panel */}
        <section className="relative overflow-hidden rounded-[2rem] border border-[#d6b76b]/30 bg-gradient-to-br from-[#352117] via-[#261811] to-[#1d120e] p-6 shadow-[0_25px_80px_rgba(0,0,0,0.25)] sm:p-9 md:p-12">
          <div className="pointer-events-none absolute -right-12 -top-20 h-72 w-72 rounded-full border border-[#d8b66b]/15" />
          <div className="pointer-events-none absolute -right-1 top-[-3.2rem] h-56 w-56 rounded-full border border-[#d8b66b]/10" />
          <div className="pointer-events-none absolute -bottom-24 left-[40%] h-56 w-56 rounded-full bg-[#b58a3d]/10 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d9b96f]/35 bg-black/15 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.24em] text-[#e7c978] sm:text-xs">
                <Sparkles className="h-4 w-4" />
                Your next step starts with a conversation
              </div>
              <h2 className="font-serif text-3xl font-medium leading-[1.1] tracking-tight text-[#fff8eb] sm:text-4xl md:text-5xl">
                Looking for a little more
                <span className="block italic text-[#e2bf70]">clarity and direction?</span>
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#d2c1b0] sm:text-base">
                Connect with {person_name} for a personal conversation about
                relationships, marriage, career and life decisions.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <a
                href={`tel:${phone_number}`}
                className="group inline-flex min-w-[150px] items-center justify-center gap-2 rounded-full bg-[#8b292b] px-6 py-3.5 text-sm font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#a73537]"
              >
                <Phone className="h-4 w-4" />
                Call now
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={`https://wa.me/91${whatsapp_number}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-w-[150px] items-center justify-center gap-2 rounded-full border border-[#d9b96f]/50 bg-black/10 px-6 py-3.5 text-sm font-bold text-[#f1d58e] transition duration-300 hover:-translate-y-1 hover:bg-[#d9b96f]/10"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </section>

        {/* Main footer content */}
        <div className="grid gap-11 py-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10 lg:py-16">
          {/* Brand block */}
          <div className="lg:col-span-5">
            <a href="/" className="group inline-flex items-center gap-4">
              <span className="relative flex h-[4.25rem] w-[4.25rem] shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-[#d8b66b]/50 bg-gradient-to-br from-[#5b3b21] to-[#25150e] shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
                <span className="absolute inset-1 rounded-xl border border-[#d8b66b]/20" />
                <Compass className="h-8 w-8 text-[#e5c576] transition-transform duration-700 group-hover:rotate-45" />
              </span>
              <span className="min-w-0">
                <span className="block break-words font-serif text-2xl font-semibold text-[#fff7e8] sm:text-3xl">
                  {business_name}
                </span>
                <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.25em] text-[#c9a45b]">
                  Traditional wisdom · Personal guidance
                </span>
              </span>
            </a>

            <p className="mt-6 max-w-lg text-sm leading-7 text-[#bfb0a1] sm:text-base">
              Guided by {person_name}, we offer traditional astrology
              consultations with a personal, thoughtful and respectful approach
              to life’s important questions.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2.5 text-xs text-[#d8c6af]">
              <ShieldCheck className="h-4 w-4 text-[#d7b661]" />
              Personal · Respectful · Confidential
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="mb-5 flex items-center gap-3 font-serif text-xl text-[#f4d78f]">
              Explore
              <span className="h-px flex-1 bg-gradient-to-r from-[#c9a45b]/50 to-transparent" />
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="/services"
                    className="group flex items-start gap-2.5 text-sm leading-6 text-[#bfb0a1] transition-colors hover:text-[#f3d88e]"
                  >
                    <ChevronRight className="mt-1 h-3.5 w-3.5 shrink-0 text-[#b58a3d] transition-transform group-hover:translate-x-1" />
                    <span>{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Approach + contact */}
          <div className="lg:col-span-4">
            <h3 className="mb-5 flex items-center gap-3 font-serif text-xl text-[#f4d78f]">
              Our approach
              <span className="h-px flex-1 bg-gradient-to-r from-[#c9a45b]/50 to-transparent" />
            </h3>
            <ul className="space-y-3">
              {values.map((value) => (
                <li key={value} className="flex items-start gap-3 text-sm leading-6 text-[#bfb0a1]">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#c9a45b]/30 bg-[#c9a45b]/10">
                    <Sparkles className="h-3 w-3 text-[#d8b66a]" />
                  </span>
                  {value}
                </li>
              ))}
            </ul>

            <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <a
                href={`tel:${phone_number}`}
                className="group rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition-all hover:border-[#c9a45b]/40 hover:bg-white/[0.06]"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#8b292b]/25 text-[#e5c576]">
                  <Phone className="h-4 w-4" />
                </span>
                <span className="mt-3 block text-[10px] font-bold uppercase tracking-[0.18em] text-[#8f7d6c]">
                  Call us
                </span>
                <span className="mt-1 block break-words text-sm font-semibold text-[#f5e8d3]">
                  {phone_number}
                </span>
              </a>

              <a
                href={`https://wa.me/91${whatsapp_number}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition-all hover:border-[#c9a45b]/40 hover:bg-white/[0.06]"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#7a8f45]/20 text-[#d8c878]">
                  <MessageCircle className="h-4 w-4" />
                </span>
                <span className="mt-3 block text-[10px] font-bold uppercase tracking-[0.18em] text-[#8f7d6c]">
                  WhatsApp
                </span>
                <span className="mt-1 block break-words text-sm font-semibold text-[#f5e8d3]">
                  +91 {whatsapp_number}
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom navigation / legal */}
        <div className="flex flex-col gap-5 border-t border-[#d9b96f]/15 py-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs sm:text-sm md:justify-start">
            <a href="/privacy-policy" className="text-[#9f9082] transition hover:text-[#f1d17c]">
              Privacy policy
            </a>
            <a href="/terms" className="text-[#9f9082] transition hover:text-[#f1d17c]">
              Terms of service
            </a>
            <a href="/services" className="text-[#9f9082] transition hover:text-[#f1d17c]">
              All services
            </a>
          </div>

          <p className="text-center text-xs leading-5 text-[#817368] md:text-right">
            © {new Date().getFullYear()} {business_name}. All rights reserved.
          </p>
        </div>
      </motion.div>

      {/* Developer signature strip */}
      <div className="relative z-10 border-t border-white/[0.06] bg-[#100a08]">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-2 px-5 py-4 sm:flex-row sm:px-8 lg:px-12">
          <p className="text-center text-xs text-[#76685d] sm:text-left">
            Crafted with care by{" "}
            <a
              href="https://wa.me/918886921826?text=Hello%20Pro%20Daddy%20Agency"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#d8b568] transition hover:text-[#f3d98b]"
            >
              Eswar
            </a>
          </p>
          <a
            href="https://www.astrologercenter.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-xs text-[#76685d] transition hover:text-[#d8b568]"
          >
            astrologercenter.in
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
