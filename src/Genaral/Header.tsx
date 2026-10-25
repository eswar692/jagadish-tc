
import { useState } from "react";
import {
  Menu,
  X,
  Phone,
  Sparkles,
  ChevronRight,
  ArrowUpRight,
  Star,
} from "lucide-react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { business_name, person_name, phone_number } from "./secret";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Contact", path: "/contact" },
];

const services = [
  "Love & Relationship Guidance",
  "Marriage & Family Guidance",
  "Career & Business Consultation",
  "Horoscope Consultation",
  "Spiritual Guidance",
  "Traditional Astrology",
  "Ex-Love Relationship Guidance",
];

const logoUrl =
  "https://i.pinimg.com/736x/2d/27/c3/2d27c37a42b775a7e44d9e2af9672953.jpg";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#fbf8f1] text-[#271b14] shadow-[0_8px_35px_rgba(42,25,12,0.08)]">
      <TopBar />
      <MainHeader />
      <ScrollingMarquee />
    </header>
  );
};

export default Header;

/* -------------------------------------------------- */
/* PREMIUM TOP BAR */
/* -------------------------------------------------- */

const TopBar = () => (
  <div className="relative overflow-hidden bg-[#21150f] text-[#e9cd91]">
    <div className="mx-auto flex min-h-[38px] max-w-[1440px] items-center justify-between gap-3 px-4 py-2 sm:px-6 lg:px-10">
      <div className="flex min-w-0 items-center gap-2.5">
        <Sparkles className="h-4 w-4 shrink-0 text-[#d9b46a]" />

        <p className="truncate text-[11px] font-medium tracking-wide sm:text-xs">
          <span className="font-bold text-[#fff2d4]">{person_name}</span>
          <span className="hidden sm:inline">
            {" "}· Traditional Astrology & Spiritual Guidance Since 1956
          </span>
        </p>
      </div>

      <a
        href={`tel:${phone_number}`}
        className="group flex shrink-0 items-center gap-2 text-[11px] font-bold tracking-wide transition-colors hover:text-white sm:text-xs"
      >
        <Phone className="h-3.5 w-3.5 transition-transform group-hover:rotate-12" />
        <span className="hidden sm:inline">SPEAK TO GURUJI</span>
        <span className="sm:hidden">CALL NOW</span>
        <ArrowUpRight className="hidden h-3.5 w-3.5 sm:block" />
      </a>
    </div>
  </div>
);

/* -------------------------------------------------- */
/* MAIN HEADER */
/* -------------------------------------------------- */

const MainHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="border-b border-[#e9dfce] bg-[#fbf8f1]/95 backdrop-blur-xl">
        <div className="mx-auto flex min-h-[82px] max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-6 md:min-h-[100px] lg:px-10">
          {/* BRAND */}
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="group flex min-w-0 items-center gap-3 sm:gap-4"
            aria-label={`${business_name} home`}
          >
            <div className="relative shrink-0">
              <div className="absolute -inset-1 rounded-[20px] bg-[#d2aa59]/20 blur-md transition-all duration-300 group-hover:bg-[#d2aa59]/40" />

              <div className="relative rounded-[17px] border border-[#c7a45e] bg-[#21150f] p-1 shadow-[0_5px_18px_rgba(49,29,12,0.14)]">
                <img
                  src={logoUrl}
                  alt={`${business_name} logo`}
                  className="h-12 w-12 rounded-[12px] object-cover sm:h-[58px] sm:w-[58px]"
                />
              </div>
            </div>

            <div className="min-w-0">
              <h1 className="truncate font-serif text-[17px] font-bold leading-tight tracking-[-0.045em] text-[#2b1a11] transition-colors group-hover:text-[#986c29] sm:text-xl md:text-2xl lg:text-[29px]">
                {business_name}
              </h1>

              <div className="mt-1.5 flex items-center gap-2">
                <span className="h-px w-5 shrink-0 bg-[#c19a4e] sm:w-8" />

                <p className="truncate text-[8px] font-bold tracking-[0.12em] text-[#92703c] sm:text-[10px] sm:tracking-[0.2em] md:text-[11px]">
                  TRADITION · WISDOM · GUIDANCE
                </p>

                <span className="hidden h-px w-5 shrink-0 bg-[#c19a4e] md:block" />
              </div>

              <p className="mt-1 hidden text-[11px] tracking-wide text-[#82766a] sm:block md:text-xs">
                Trusted guidance for life's important decisions
              </p>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-1 xl:flex"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="rounded-full px-4 py-3 text-[13px] font-semibold text-[#58483a] transition-all duration-200 hover:bg-[#efe5d2] hover:text-[#91651f]"
              >
                {item.label}
              </Link>
            ))}

            <a
              href={`tel:${phone_number}`}
              className="group ml-3 flex items-center gap-3 rounded-full border border-[#c9a65e] bg-[#291a12] py-3 pl-5 pr-4 text-sm font-bold text-[#f7e4b7] shadow-[0_5px_16px_rgba(37,22,12,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#49301d] hover:shadow-[0_8px_22px_rgba(37,22,12,0.2)]"
            >
              <Phone className="h-4 w-4" />
              <span>Consult Now</span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#d4b16c] text-[#291a12] transition-transform group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>
          </nav>

          {/* MOBILE / TABLET MENU BUTTON */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={open}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#d9c9ab] bg-white text-[#39251a] shadow-sm transition-all hover:border-[#b99751] hover:bg-[#f4ead6] xl:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {open && <MobileNav setOpen={setOpen} />}
    </>
  );
};

/* -------------------------------------------------- */
/* MOBILE NAVIGATION */
/* -------------------------------------------------- */

const MobileNav = ({
  setOpen,
}: {
  setOpen: (open: boolean) => void;
}) => (
  <div
    className="fixed inset-0 z-[100] flex justify-end"
    role="dialog"
    aria-modal="true"
    aria-label="Navigation menu"
  >
    {/* Overlay */}
    <button
      type="button"
      aria-label="Close navigation menu"
      onClick={() => setOpen(false)}
      className="absolute inset-0 h-full w-full animate-in fade-in duration-200 bg-[#130c08]/65 backdrop-blur-[3px]"
    />

    {/* Drawer */}
    <div className="animate-in slide-in-from-right relative flex h-full w-full max-w-[430px] flex-col overflow-y-auto border-l border-[#c9a45d]/40 bg-[#fbf8f1] duration-300">
      {/* Drawer header */}
      <div className="flex items-center justify-between border-b border-[#e7dcc9] px-5 py-5 sm:px-7">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="flex min-w-0 items-center gap-3"
        >
          <img
            src={logoUrl}
            alt={`${business_name} logo`}
            className="h-12 w-12 shrink-0 rounded-2xl border border-[#c7a45e] object-cover"
          />

          <div className="min-w-0">
            <h2 className="truncate font-serif text-lg font-bold text-[#2b1a11]">
              {business_name}
            </h2>
            <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.17em] text-[#98753b]">
              Since 1956
            </p>
          </div>
        </Link>

        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
          className="ml-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#291a12] text-[#f3dca7] transition-colors hover:bg-[#684426]"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Intro */}
      <div className="px-6 pb-5 pt-8 sm:px-8">
        <div className="flex items-center gap-2 text-[#a37d3c]">
          <Sparkles className="h-4 w-4" />
          <span className="text-[10px] font-bold tracking-[0.24em]">
            DISCOVER YOUR PATH
          </span>
        </div>

        <h3 className="mt-3 font-serif text-3xl font-semibold leading-tight tracking-tight text-[#2b1a11]">
          Wisdom for your
          <br />
          <span className="italic text-[#a17b3b]">journey ahead.</span>
        </h3>
      </div>

      {/* Navigation */}
      <nav
        aria-label="Mobile navigation"
        className="px-5 sm:px-7"
      >
        {navItems.map((item, index) => (
          <Link
            key={item.path}
            to={item.path}
            onClick={() => setOpen(false)}
            className="group flex items-center justify-between border-b border-[#e9dfcf] py-4 transition-colors hover:border-[#c7a45e]"
          >
            <div className="flex items-center gap-4">
              <span className="font-serif text-sm italic text-[#b39867]">
                0{index + 1}
              </span>

              <span className="text-[17px] font-semibold tracking-tight text-[#39291e] transition-colors group-hover:text-[#a0762f]">
                {item.label}
              </span>
            </div>

            <ChevronRight className="h-5 w-5 text-[#bca980] transition-all group-hover:translate-x-1 group-hover:text-[#8c6427]" />
          </Link>
        ))}
      </nav>

      {/* Services preview */}
      <div className="px-6 py-6 sm:px-8">
        <p className="mb-4 text-[10px] font-bold tracking-[0.22em] text-[#9d7a40]">
          HOW WE CAN HELP
        </p>

        <div className="flex flex-wrap gap-2">
          {services.slice(0, 4).map((service) => (
            <span
              key={service}
              className="rounded-full border border-[#e4d6bd] bg-white px-3 py-2 text-[11px] font-medium text-[#66513a]"
            >
              {service}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-auto bg-[#24170f] px-6 pb-8 pt-6 text-[#f5e5c1] sm:px-8">
        <div className="mb-5 flex items-center gap-2">
          <Star className="h-4 w-4 fill-[#d6b46f] text-[#d6b46f]" />

          <p className="text-xs font-medium leading-5 text-[#e6d1a6]">
            Traditional wisdom. Personal guidance.
          </p>
        </div>

        <a
          href={`tel:${phone_number}`}
          className="group flex w-full items-center justify-between rounded-full border border-[#d0ae67] bg-[#d0ae67] px-5 py-4 text-sm font-bold text-[#281a11] transition-all hover:bg-[#e4c783]"
        >
          <span className="flex items-center gap-3">
            <Phone className="h-4 w-4" />
            Call for Consultation
          </span>

          <ArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-45" />
        </a>

        <p className="mt-4 text-center text-[10px] tracking-wide text-[#bca783]">
          Love · Marriage · Career · Family
        </p>
      </div>
    </div>
  </div>
);

/* -------------------------------------------------- */
/* PREMIUM SCROLLING MARQUEE */
/* -------------------------------------------------- */

const ScrollingMarquee = () => (
  <div className="relative overflow-hidden border-t border-[#5a3023] bg-[#762a23]">
    <Marquee
      speed={35}
      gradient={false}
      pauseOnHover
      autoFill
      className="py-3"
    >
      <div className="flex items-center whitespace-nowrap">
        {services.map((service) => (
          <span
            key={service}
            className="flex items-center gap-3 px-5 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#fff0d0] sm:gap-4 sm:px-7 sm:text-[11px] sm:tracking-[0.14em]"
          >
            <Sparkles className="h-3.5 w-3.5 shrink-0 text-[#e3c27c]" />
            {service}
            <span className="ml-1 text-[#d7b66e]">✦</span>
          </span>
        ))}
      </div>
    </Marquee>
  </div>
);
