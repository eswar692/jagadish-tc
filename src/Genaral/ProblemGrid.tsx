import { useMemo, useState } from "react";
import {
  ArrowRight,
  Search,
  MessageCircle,
  Phone,
  Sparkles,
 
  X,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  business_name,
  person_name,
  phone_number,
  whatsapp_number,
} from "./secret";

const items = [
  {
    title: "Relationship Guidance",
    category: "Relationships",
    img: "https://i.pinimg.com/736x/64/f2/c0/64f2c022c60b2138e37148c32b859ad7.jpg",
    desc: "Thoughtful guidance for relationship concerns, communication and harmony.",
  },
  {
    title: "Partner Harmony",
    category: "Relationships",
    img: "https://i.pinimg.com/736x/66/5b/59/665b598c7bc1684e8b421ff67a0dabd3.jpg",
    desc: "Guidance focused on understanding, trust and emotional connection.",
  },
  {
    title: "Couple Harmony",
    category: "Relationships",
    img: "https://i.pinimg.com/1200x/7d/28/3e/7d283e6401a3df9c6d268263a7a960b0.jpg",
    desc: "Traditional guidance for closeness, communication and mutual understanding.",
  },
  {
    title: "Love Guidance",
    category: "Relationships",
    img: "https://i.pinimg.com/736x/78/da/83/78da83ed7841917877d35e668c66b864.jpg",
    desc: "Personalized guidance for love, communication and relationship concerns.",
  },
  {
    title: "Marriage Guidance",
    category: "Marriage & Family",
    img: "https://i.pinimg.com/736x/5d/a3/5c/5da35c351423d9b066f03c47aab8c74b.jpg",
    desc: "Traditional guidance for marriage, communication and family harmony.",
  },
  {
    title: "Vastu Guidance",
    category: "Spiritual",
    img: "https://i.pinimg.com/736x/50/11/6a/50116aec7d278f787dae6de669d39e6b.jpg",
    desc: "Traditional Vastu guidance for balanced homes and workspaces.",
  },
  {
    title: "Career Guidance",
    category: "Career & Life",
    img: "https://i.pinimg.com/736x/35/47/48/354748471cbad482eccf036d1db1a86c.jpg",
    desc: "Guidance for career decisions, confidence and personal growth.",
  },
  {
    title: "Family Harmony",
    category: "Marriage & Family",
    img: "https://i.pinimg.com/736x/9a/ab/ac/9aabac56c514a27cbcc112b5fc220642.jpg",
    desc: "Supportive guidance for family relationships and misunderstandings.",
  },
  {
    title: "Breakup Support",
    category: "Relationships",
    img: "https://i.pinimg.com/736x/f9/83/a2/f983a2bb11d4e8058f3d65aa178c13d4.jpg",
    desc: "Compassionate guidance for separation and difficult relationship periods.",
  },
  {
    title: "Positive Energy",
    category: "Spiritual",
    img: "https://i0.wp.com/www.royalperspectives.com/wp-content/uploads/2023/08/what-do-your-enemies-hate-about-you-the-most-2-354-1574696841-0_dblbig.jpg?fit=1200%2C797&ssl=1",
    desc: "Traditional practices focused on positivity, peace and personal wellbeing.",
  },
  {
    title: "Couples Guidance",
    category: "Relationships",
    img: "https://i.pinimg.com/736x/52/08/b9/5208b9f29d6163bb20c66768a3e03969.jpg",
    desc: "Guidance for couples seeking understanding, harmony and family wellbeing.",
  },
  {
    title: "Puja & Mantras",
    category: "Spiritual",
    img: "https://i.pinimg.com/736x/43/8a/12/438a12dde5f045a8a6a4a25b1b1cccce.jpg",
    desc: "Traditional pujas, mantras and spiritual practices for personal guidance.",
  },
  {
    title: "Black Magic Removal",
    category: "Spiritual",
    img: "https://i.pinimg.com/1200x/35/67/5f/35675f87b2525d2f62d41bcabc9830d5.jpg",
    desc: "Traditional spiritual guidance and puja practices for people seeking peace, positivity and relief from spiritual concerns.",
  },
  {
    title: "Ex Love Back",
    category: "Relationships",
    img: "https://i.pinimg.com/736x/24/e0/2f/24e02fb2fe0229a05a12409e1bd6d6e9.jpg",
    desc: "Supportive guidance for people dealing with separation, unresolved emotions and relationship concerns.",
  },
  {
    title: "Career Problems",
    category: "Career & Life",
    img: "https://i.pinimg.com/736x/0b/5c/6b/0b5c6bf6e6d5dee9459a72e06c90ac7e.jpg",
    desc: "Personalized guidance for career uncertainty, workplace challenges, professional decisions and future opportunities.",
  },
  {
    title: "Kids Problems",
    category: "Marriage & Family",
    img: "https://i.pinimg.com/736x/7a/4f/23/7a4f235908e34cba5b1340af7fae18be.jpg",
    desc: "Supportive guidance for parents dealing with communication, education, behaviour and family-related concerns.",
  },
  {
    title: "Divorce & Marriage Guidance",
    category: "Marriage & Family",
    img: "https://i.pinimg.com/736x/e1/ee/1d/e1ee1db8fe6292204a6e01d7a06b65c0.jpg",
    desc: "Traditional guidance for couples facing serious marital disagreements, communication difficulties and separation concerns.",
  },
];

const categories = [
  "All Guidance",
  "Relationships",
  "Marriage & Family",
  "Career & Life",
  "Spiritual",
];

const traditionTags = [
  "Hindu Tradition",
  "Muslim Tradition",
  "Christian Tradition",
  "All Individuals Welcome",
];

export default function ProblemGrid() {
  const [activeCategory, setActiveCategory] = useState("All Guidance");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    return items.filter((item) => {
      const matchesCategory =
        activeCategory === "All Guidance" || item.category === activeCategory;
      const matchesSearch =
        !term ||
        item.title.toLowerCase().includes(term) ||
        item.desc.toLowerCase().includes(term) ||
        item.category.toLowerCase().includes(term);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  return (
    <section className="relative isolate overflow-hidden bg-[#f8f4ec] px-4 py-16 sm:px-6 md:py-24">
      {/* Ambient decoration */}
      <div className="pointer-events-none absolute -right-32 -top-28 h-96 w-96 rounded-full bg-[#c9a45b]/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#7e2526]/10 blur-3xl" />
      <div className="pointer-events-none absolute left-[7%] top-40 hidden h-24 w-24 rounded-full border border-[#c9a45b]/25 lg:block" />
      <div className="pointer-events-none absolute right-[8%] top-[46%] hidden h-16 w-16 rotate-45 border border-[#c9a45b]/25 lg:block" />

      <div className="relative mx-auto max-w-[1440px]">
        {/* Section intro */}
        <div className="grid gap-8 border-b border-[#dfd2bf] pb-10 md:grid-cols-[1.15fr_.85fr] md:items-end md:pb-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d6bd82] bg-white/75 px-4 py-2 shadow-sm">
              <Sparkles className="h-4 w-4 text-[#a67a2c]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#866323] sm:text-xs">
                Areas of guidance
              </span>
            </div>

            <h2 className="max-w-3xl font-serif text-4xl font-medium leading-[1.08] tracking-tight text-[#2b1a12] sm:text-5xl md:text-6xl">
              Clarity for life.
              <span className="mt-1 block italic text-[#8b292b]">
                Guidance for your journey.
              </span>
            </h2>
          </motion.div>

          <motion.div
            className="md:pl-8"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <p className="max-w-xl text-sm leading-7 text-[#716256] sm:text-base">
              {person_name} offers traditional astrology and spiritual guidance
              for relationships, marriage, family, career and other important
              areas of life—with personal attention and a respectful approach.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {traditionTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#dfd2bf] bg-white/70 px-3 py-1.5 text-[11px] font-semibold text-[#695548] sm:text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Search and category filters */}
        <div className="flex flex-col gap-5 py-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {categories.map((category) => {
              const active = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`shrink-0 rounded-full px-4 py-2.5 text-xs font-bold transition-all duration-200 sm:text-sm ${
                    active
                      ? "bg-[#2b1a12] text-[#f8e7b5] shadow-md"
                      : "border border-[#dfd2bf] bg-white/70 text-[#695548] hover:border-[#c9a45b] hover:bg-white"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <label className="flex w-full items-center gap-3 rounded-full border border-[#dfd2bf] bg-white/80 px-4 py-3 transition focus-within:border-[#b58b42] focus-within:ring-2 focus-within:ring-[#c9a45b]/20 lg:max-w-xs">
            <Search className="h-4 w-4 shrink-0 text-[#9b7a43]" />
            <input
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Find a type of guidance..."
              className="w-full bg-transparent text-sm text-[#2b1a12] outline-none placeholder:text-[#a19386]"
              aria-label="Search guidance services"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm("")}
                aria-label="Clear search"
                className="rounded-full p-1 text-[#85766a] hover:bg-[#f1e8da]"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </label>
        </div>

        {/* Service cards */}
        {filteredItems.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {filteredItems.map((item, index) => (
              <motion.article
                layout
                key={item.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.08 }}
                transition={{ duration: 0.4, delay: Math.min(index * 0.035, 0.2) }}
                className="group relative overflow-hidden rounded-[1.35rem] border border-[#e6dac7] bg-[#fffdf9] shadow-[0_8px_28px_rgba(52,35,22,0.055)] transition-all duration-300 hover:-translate-y-1 hover:border-[#c9a45b]/70 hover:shadow-[0_18px_42px_rgba(52,35,22,0.13)]"
              >
                <div className="relative h-56 overflow-hidden sm:h-60">
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1d100c]/85 via-[#1d100c]/10 to-transparent" />
                  <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-[#f2d994]/50 bg-[#24150f]/70 text-xs font-bold tracking-wide text-[#f4d991] backdrop-blur-md">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="mb-2 inline-flex rounded-full border border-white/25 bg-black/25 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#f6dfaa] backdrop-blur-sm">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-2xl font-medium leading-tight text-white drop-shadow sm:text-[1.7rem]">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <p className="min-h-[4.5rem] text-sm leading-6 text-[#75675c]">
                    {item.desc}
                  </p>
                  <div className="mt-5 border-t border-[#eee4d6] pt-4">
                    <Link
                      to="/services"
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#842729] transition-colors hover:text-[#ad8033]"
                    >
                      Explore guidance
                      <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#dfc99d] transition-all group-hover:translate-x-1 group-hover:bg-[#f7edda]">
                        <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        ) : (
          <div className="rounded-3xl border border-dashed border-[#d8c6a9] bg-white/60 px-6 py-16 text-center">
            <Search className="mx-auto h-8 w-8 text-[#a67a2c]" />
            <h3 className="mt-4 font-serif text-2xl text-[#2b1a12]">
              No matching guidance found
            </h3>
            <p className="mt-2 text-sm text-[#75675c]">
              Try another keyword or choose a different category.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchTerm("");
                setActiveCategory("All Guidance");
              }}
              className="mt-5 rounded-full bg-[#2b1a12] px-5 py-2.5 text-sm font-bold text-[#f8e7b5] transition hover:bg-[#482c1e]"
            >
              Show all guidance
            </button>
          </div>
        )}

        {/* Consultation CTA */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="relative mt-14 overflow-hidden rounded-[1.75rem] bg-[#24150f] px-6 py-9 sm:px-9 md:mt-20 md:px-12 md:py-11"
        >
          <div className="pointer-events-none absolute -right-12 -top-24 h-72 w-72 rounded-full border border-[#d2ad61]/20" />
          <div className="pointer-events-none absolute -right-1 top-0 h-56 w-56 rounded-full bg-[#c9a45b]/10 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-1/3 h-px w-1/3 bg-gradient-to-r from-transparent via-[#c9a45b]/60 to-transparent" />

          <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-[#e0bd70]">
                <Sparkles className="h-4 w-4" />
                Personal consultation
              </div>
              <h3 className="font-serif text-3xl font-medium leading-tight text-[#fff7e8] sm:text-4xl">
                Every question deserves a thoughtful conversation.
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-6 text-[#d2c2b2] sm:text-base">
                Speak directly with {person_name} to discuss your situation
                privately and explore the guidance that feels right for you.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <a
                href={`tel:${phone_number}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#8b292b] px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-[#a33436]"
              >
                <Phone className="h-4 w-4" />
                Call now
              </a>
              <a
                href={`https://wa.me/91${whatsapp_number}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d2ad61]/50 px-6 py-3.5 text-sm font-bold text-[#f1d58e] transition-all hover:-translate-y-0.5 hover:bg-[#c9a45b]/10"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.div>

        <div className="mt-8 flex items-center justify-center gap-3 text-center">
          <span className="h-px w-8 bg-[#c9a45b]/60" />
          <p className="text-xs text-[#85766a] sm:text-sm">
            Traditional guidance · Personal attention · {business_name}
          </p>
          <span className="h-px w-8 bg-[#c9a45b]/60" />
        </div>
      </div>
    </section>
  );
}
