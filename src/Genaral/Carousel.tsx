
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  ChevronLeft,
  ChevronRight,
  Phone,
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";
import { business_name, person_name, phone_number } from "./secret";

const slides = [
  {
    id: 1,
    img: "https://i.pinimg.com/736x/9e/1f/9e/9e1f9ee154cdc86962a0747c081cb109.jpg",
    title: business_name,
    subtitle: "Traditional Astrology & Spiritual Guidance",
    description:
      "Traditional guidance for relationships, marriage, career, family and important life decisions.",
  }
];

export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,  
    align: "start",
    skipSnaps: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi]
  );

  /* ACTIVE SLIDE */

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  /* AUTOPLAY */

  useEffect(() => {
    if (!emblaApi || isPaused) return;

    const timer = window.setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => window.clearInterval(timer);
  }, [emblaApi, isPaused]);

  return (
    <section
      aria-label="Astrology consultation and services"
      className="relative isolate overflow-hidden bg-[#21150f]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setIsPaused(false);
        }
      }}
    >
      {/* CAROUSEL TRACK */}

      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {slides.map((slide) => (
            <article
              key={slide.id}
              className="relative min-w-0 flex-[0_0_100%] overflow-hidden
              h-[620px] sm:h-[680px] lg:h-[min(790px,calc(100svh-145px))]
              min-h-[580px] max-h-[790px] bg-[#21150f]"
            >
              {/* BACKGROUND IMAGE */}

              <img
                src={slide.img}
                alt={`${slide.title} — ${business_name}`}
                className="absolute inset-0 h-full w-full object-cover object-center"
                fetchPriority={slide.id === 1 ? "high" : "auto"}
                loading={slide.id === 1 ? "eager" : "lazy"}
                decoding="async"
                draggable={false}
              />

              {/* CINEMATIC OVERLAYS */}

              <div className="absolute inset-0 bg-black/35" />

              <div className="absolute inset-0 bg-gradient-to-r
                from-[#170c07]/95 via-[#21150f]/75
                to-[#21150f]/15 sm:via-[#21150f]/60"
              />

              <div className="absolute inset-0 bg-gradient-to-t
                from-[#170c07]/90 via-transparent to-[#170c07]/30"
              />

              {/* GOLD AMBIENT LIGHT */}

              <div className="pointer-events-none absolute -left-32 top-1/4
                h-96 w-96 rounded-full bg-[#d0a54d]/10 blur-[100px]"
              />

              <div className="pointer-events-none absolute -right-32 bottom-0
                h-80 w-80 rounded-full bg-[#a57a32]/10 blur-[90px]"
              />

              {/* SLIDE CONTENT */}

              <div className="relative z-10 mx-auto flex h-full max-w-[1440px]
                items-center px-6 pb-24 pt-12 sm:px-10 md:pb-28 lg:px-16"
              >
                <div className="w-full max-w-4xl">

                  {/* EYEBROW */}

                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center
                      justify-center rounded-full border border-[#d4b16c]/50
                      bg-[#21150f]/60 shadow-lg backdrop-blur-md"
                    >
                      <Sparkles className="h-4 w-4 text-[#e2c37c]" />
                    </div>

                    <div>
                      <p className="text-[10px] font-bold uppercase
                        tracking-[0.22em] text-[#e2c37c] sm:text-xs"
                      >
                        Traditional Astrology
                      </p>

                      <p className="mt-1 text-[10px] tracking-[0.12em]
                        text-white/65 sm:text-xs"
                      >
                        WISDOM · TRADITION · GUIDANCE
                      </p>
                    </div>
                  </div>

                  {/* TITLE */}

                  <h1
                    className={`max-w-4xl font-serif font-bold
                    leading-[1.12] tracking-tight text-[#fff7e8]
                    [text-shadow:0_4px_28px_rgba(0,0,0,0.35)]
                    ${
                      slide.id === 1
                        ? "text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
                        : "text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                    }`}
                  >
                    {slide.title}
                  </h1>

                  {/* GOLD DIVIDER */}

                  <div className="my-6 flex items-center gap-3">
                    <span className="h-[2px] w-16 bg-[#d4b16c] sm:w-24" />
                    <span className="h-2 w-2 rotate-45 bg-[#d4b16c]" />
                    <span className="h-px w-10 bg-[#d4b16c]/40" />
                  </div>

                  {/* GURUJI NAME */}

                  <p className="mb-4 font-serif text-xl font-semibold
                    text-[#f0d69a] sm:text-2xl md:text-3xl"
                  >
                    <span className="text-white/85">Pandit</span>{" "}
                    {person_name}
                  </p>

                  {/* DESCRIPTION */}

                  <p className="max-w-2xl text-sm leading-7 text-[#f2e7d8]
                    sm:text-base sm:leading-8 md:text-lg"
                  >
                    {slide.description}
                  </p>

                  {/* CONSULTATION CTA */}

                  <div className="mt-8 flex max-w-xl flex-col gap-3
                    sm:flex-row sm:flex-wrap"
                  >
                    <a
                      href={`tel:${phone_number}`}
                      className="group inline-flex min-h-[52px] items-center
                        justify-center gap-3 rounded-full border
                        border-[#d8b76f] bg-[#d0ae67] px-6 py-3
                        text-sm font-bold text-[#291a12]
                        shadow-[0_8px_28px_rgba(0,0,0,0.2)]
                        transition-all duration-300 hover:-translate-y-1
                        hover:bg-[#e5c987] hover:shadow-xl"
                    >
                      <Phone className="h-4 w-4" />
                      Call for Consultation
                      <ArrowUpRight className="h-4 w-4 transition-transform
                        group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>

                    <Link
                      to="/services"
                      className="group inline-flex min-h-[52px] items-center
                        justify-center gap-3 rounded-full border
                        border-[#e4c981]/50 bg-white/[0.07] px-6 py-3
                        text-sm font-semibold text-[#fff0cd]
                        backdrop-blur-md transition-all duration-300
                        hover:border-[#e4c981] hover:bg-white/[0.14]"
                    >
                      Explore Services
                      <ArrowRight className="h-4 w-4 transition-transform
                        group-hover:translate-x-1"
                      />
                    </Link>
                  </div>

                  {/* TRUST DETAIL */}

                  <div className="mt-8 flex flex-wrap items-center gap-x-5
                    gap-y-3 text-[10px] font-medium tracking-wide
                    text-[#ead9b7] sm:text-xs"
                  >
                    <span className="flex items-center gap-2">
                      <Star className="h-3.5 w-3.5 fill-[#d4b16c]
                        text-[#d4b16c]"
                      />
                      Traditional wisdom
                    </span>

                    <span className="hidden h-4 w-px bg-white/25 sm:block" />

                    <span className="flex items-center gap-2">
                      <Sparkles className="h-3.5 w-3.5 text-[#d4b16c]" />
                      Personal consultation
                    </span>
                  </div>
                </div>
              </div>

              {/* SINCE 1956 BADGE */}

              <div className="absolute right-10 top-10 z-20 hidden
                h-28 w-28 items-center justify-center rounded-full
                border border-[#d4b16c]/60 bg-[#21150f]/50 text-center
                shadow-[0_10px_35px_rgba(0,0,0,0.2)] backdrop-blur-xl
                lg:flex"
              >
                <div className="absolute inset-1.5 rounded-full
                  border border-[#d4b16c]/20"
                />

                <div>
                  <Sparkles className="mx-auto mb-1 h-3.5 w-3.5
                    text-[#d4b16c]"
                  />

                  <p className="text-[9px] font-semibold uppercase
                    tracking-[0.2em] text-[#d4b16c]"
                  >
                    Tradition
                  </p>

                  <p className="my-0.5 font-serif text-2xl font-bold
                    text-[#f4d99c]"
                  >
                    1956
                  </p>

                  <p className="text-[9px] tracking-[0.15em] text-white/65">
                    ONWARDS
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* PREVIOUS SLIDE */}

      <button
        type="button"
        onClick={scrollPrev}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 z-30 flex h-10 w-10
          -translate-y-1/2 items-center justify-center rounded-full
          border border-[#d4b16c]/40 bg-[#21150f]/60 text-[#f0d69a]
          shadow-xl backdrop-blur-md transition-all hover:border-[#d4b16c]
          hover:bg-[#d0ae67] hover:text-[#291a12]
          sm:left-6 sm:h-12 sm:w-12"
      >
        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      {/* NEXT SLIDE */}

      <button
        type="button"
        onClick={scrollNext}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 z-30 flex h-10 w-10
          -translate-y-1/2 items-center justify-center rounded-full
          border border-[#d4b16c]/40 bg-[#21150f]/60 text-[#f0d69a]
          shadow-xl backdrop-blur-md transition-all hover:border-[#d4b16c]
          hover:bg-[#d0ae67] hover:text-[#291a12]
          sm:right-6 sm:h-12 sm:w-12"
      >
        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      {/* SLIDE INDICATORS */}

      <div className="absolute bottom-6 left-1/2 z-30 flex
        -translate-x-1/2 items-center gap-2"
      >
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}: ${slide.title}`}
            aria-current={selectedIndex === index ? "true" : undefined}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              selectedIndex === index
                ? "w-9 bg-[#e1bf69]"
                : "w-2 bg-white/45 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      {/* SLIDE COUNTER */}

      <div className="absolute bottom-5 right-5 z-30 hidden
        items-center gap-3 font-medium sm:flex md:right-10"
      >
        <span className="font-serif text-lg text-[#f1d58b]">
          {String(selectedIndex + 1).padStart(2, "0")}
        </span>

        <span className="h-px w-8 bg-[#d4b16c]/50" />

        <span className="text-xs text-white/60">
          {String(slides.length).padStart(2, "0")}
        </span>
      </div>
    </section>
  );
}
