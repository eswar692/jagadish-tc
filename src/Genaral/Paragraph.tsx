
import {
  ArrowRight,
  Phone,
  Sparkles,
  Star,
  Compass,
  Hand,
  Heart,
} from "lucide-react";

import {
  person_name,
  phone_number,
} from "../Genaral/secret";

const problems = [
  "ಸ್ತ್ರೀ-ಪುರುಷ ವಶೀಕರಣ",
  "ಮದುವೆ ವಿಳಂಬ",
  "ಸಂತಾನದೋಷ",
  "ಡೈವೋರ್ಸ್ ಸಮಸ್ಯೆ",
  "ಕೋರ್ಟ್ ಕೇಸ್",
  "ಆರ್ಥಿಕ ಸಮಸ್ಯೆ",
  "ಗಂಡ-ಹೆಂಡತಿ ಸಮಸ್ಯೆ",
  "ಕುಟುಂಬ ಸಮಸ್ಯೆ",
];

const services = [
  { title: "ಜ್ಯೋತಿಷ್ಯ", icon: Sparkles },
  { title: "ಹಸ್ತ ರೇಖೆ", icon: Hand },
  { title: "ವಾಸ್ತು", icon: Compass },
  { title: "ಆಧ್ಯಾತ್ಮಿಕ ಮಾರ್ಗದರ್ಶನ", icon: Star },
];

const kannadaFont = {
  fontFamily: "'Noto Sans Kannada', sans-serif",
};

export default function KannadaAstrologerModern() {
  return (
    <section className="relative overflow-hidden bg-[#faf7f0] px-4 py-16 text-[#2c1d14] sm:px-6 md:py-24">

      {/* BACKGROUND DECORATION */}

      <div className="pointer-events-none absolute -right-40 top-0 h-[420px] w-[420px] rounded-full bg-[#d6b875]/10 blur-[100px]" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-[#8b1e1e]/[0.05] blur-[100px]" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "radial-gradient(#82663c 0.7px, transparent 0.7px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative mx-auto max-w-7xl">

        {/* INTRODUCTION */}

        <div className="mx-auto mb-12 max-w-4xl text-center md:mb-16">

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d7c29b] bg-white/80 px-5 py-2.5 shadow-sm">
            <Sparkles className="h-4 w-4 text-[#a77c32]" />

            <span
              style={kannadaFont}
              className="text-xs font-semibold tracking-wide text-[#76572d] sm:text-sm"
            >
              ವಿಶೇಷ ಜ್ಯೋತಿಷ್ಯ ಮಾರ್ಗದರ್ಶನ
            </span>
          </div>

          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-[#9a783e] sm:text-xs">
            TRADITION · WISDOM · GUIDANCE
          </p>

          <h2
            style={kannadaFont}
            className="text-3xl font-bold leading-[1.55] tracking-tight text-[#302016] sm:text-4xl md:text-5xl lg:text-6xl"
          >
            ಕೇರಳದ ಮಾಂತ್ರಿಕ
          </h2>

          <h3
            style={kannadaFont}
            className="mt-1 text-3xl font-bold leading-[1.6] text-[#986c2c] sm:text-4xl md:text-5xl lg:text-6xl"
          >
            ಜ್ಯೋತಿಷ್ಯರು
          </h3>

          <p
            style={kannadaFont}
            className="mt-5 text-lg font-semibold text-[#725234] sm:text-xl md:text-2xl"
          >
            {person_name}
          </p>

          <div className="my-6 flex items-center justify-center gap-3">
            <span className="h-px w-14 bg-gradient-to-r from-transparent to-[#c5a15d] sm:w-24" />
            <Star className="h-4 w-4 fill-[#c5a15d] text-[#c5a15d]" />
            <span className="h-px w-14 bg-gradient-to-l from-transparent to-[#c5a15d] sm:w-24" />
          </div>

          <p className="mx-auto max-w-2xl text-sm leading-7 text-[#786b5d] sm:text-base sm:leading-8">
            Traditional astrology, spiritual guidance and personalized
            consultations for life’s important concerns.
          </p>
        </div>

        {/* MAIN CONTENT */}

        <div className="grid items-stretch gap-6 lg:grid-cols-[0.82fr_1.18fr]">

          {/* ASTROLOGER PROFILE */}

          <div className="relative overflow-hidden rounded-[28px] bg-[#261910] p-7 text-[#fff5df] shadow-[0_20px_60px_rgba(48,29,14,0.14)] sm:p-9 md:rounded-[32px]">

            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-[#d1af69]/10" />
            <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full border border-[#d1af69]/10" />

            <div className="relative">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#d4b16c]/40 bg-[#d4b16c]/10">
                <Sparkles className="h-7 w-7 text-[#e3c783]" />
              </div>

              <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.25em] text-[#d9b975]">
                ASTROLOGER PROFILE
              </p>

              <h3
                style={kannadaFont}
                className="mt-3 break-words text-2xl font-bold leading-relaxed text-[#fff5df] sm:text-3xl"
              >
                {person_name}
              </h3>

              <p
                style={kannadaFont}
                className="mt-3 text-sm leading-8 text-[#e2d4c1]/80"
              >
                ಸಾಂಪ್ರದಾಯಿಕ ಜ್ಯೋತಿಷ್ಯ ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ಮಾರ್ಗದರ್ಶನದ ಮೂಲಕ
                ಜೀವನದ ಪ್ರಮುಖ ವಿಷಯಗಳ ಕುರಿತು ವೈಯಕ್ತಿಕ ಸಮಾಲೋಚನೆ.
              </p>

              {/* EXPERIENCE BADGE */}

              <div className="mt-6 flex items-center gap-3 rounded-2xl border border-[#d4b16c]/20 bg-white/[0.04] p-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#d4b16c]/10">
                  <Star className="h-5 w-5 text-[#e3c783]" />
                </div>

                <div>
                  <p className="font-serif text-xl font-bold text-[#e6c982]">
                    Since 1956
                  </p>
                  <p className="mt-1 text-xs text-[#d6c6b0]">
                    Traditional astrology & spiritual guidance
                  </p>
                </div>
              </div>

              {/* PHONE NUMBER */}

              <a
                href={`tel:${phone_number}`}
                className="mt-6 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-4 transition-colors hover:border-[#d4b16c]/50 hover:bg-white/[0.08]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#d4b16c] text-[#261910]">
                  <Phone className="h-5 w-5" />
                </div>

                <div className="min-w-0">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#d5b876]">
                    CONSULTATION
                  </p>

                  <p className="mt-1 break-all text-base font-bold text-white sm:text-lg">
                    {phone_number}
                  </p>
                </div>

                <ArrowRight className="ml-auto h-5 w-5 shrink-0 text-[#d5b876]" />
              </a>

              {/* CALL CTA */}

              <a
                href={`tel:${phone_number}`}
                className="mt-4 flex min-h-[52px] w-full items-center justify-center gap-3 rounded-full bg-[#d4b16c] px-5 py-3 text-sm font-bold text-[#261910] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e6cb8c] hover:shadow-lg"
              >
                <Phone className="h-4 w-4" />

                <span style={kannadaFont}>ಸಂಪರ್ಕಿಸಿ</span>

                <ArrowRight className="h-4 w-4" />
              </a>

              <p className="mt-5 text-center text-xs leading-6 text-[#b9a58b]">
                Personal consultations for your questions and concerns.
              </p>
            </div>
          </div>

          {/* ABOUT & PROBLEMS */}

          <div className="rounded-[28px] border border-[#e6dac5] bg-white p-6 shadow-[0_12px_45px_rgba(48,29,14,0.045)] sm:p-8 md:rounded-[32px] md:p-9">

            <div className="flex items-start gap-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#f4ecdd]">
                <Sparkles className="h-5 w-5 text-[#9b7335]" />
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#a17c41]">
                  ABOUT THE CONSULTATION
                </p>

                <h3
                  style={kannadaFont}
                  className="mt-2 text-xl font-bold leading-relaxed text-[#302016] sm:text-2xl"
                >
                  ನಿಮ್ಮ ಸಮಸ್ಯೆಗಳಿಗೆ ವೈಯಕ್ತಿಕ ಮಾರ್ಗದರ್ಶನ
                </h3>
              </div>
            </div>

            <p
              style={kannadaFont}
              className="mt-6 text-sm leading-8 text-[#74675a] sm:text-base sm:leading-9"
            >
              ಚಿತ್ರದುರ್ಗದಲ್ಲಿ ಖಾಯಂಯಾಗಿ ನೆಲೆಸಿದ್ದಾರೆ. ಹಸ್ತ, ರಾಶಿ,
              ಮುಖ ಲಕ್ಷಣ, ಜಾತಕ ಮತ್ತು ಕುಂಡಲಿ ಆಧಾರದ ಮೇಲೆ ಜೀವನದ ಪ್ರಮುಖ
              ವಿಷಯಗಳ ಕುರಿತು ಮಾರ್ಗದರ್ಶನ ನೀಡುತ್ತಾರೆ.
            </p>

            {/* PROBLEMS */}

            <div className="mt-7">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-7 bg-[#c5a15d]" />

                <h4
                  style={kannadaFont}
                  className="text-sm font-bold text-[#55402a]"
                >
                  ಸಲಹೆ ಪಡೆಯಬಹುದಾದ ವಿಷಯಗಳು
                </h4>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {problems.map((item) => (
                  <div
                    key={item}
                    className="group flex min-h-[54px] items-center gap-3 rounded-xl border border-[#eae0cf] bg-[#fcfaf6] px-4 py-3 transition-all duration-200 hover:border-[#d1b779] hover:bg-[#f7f0e3]"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#eee2c9]">
                      <ArrowRight className="h-3 w-3 text-[#916c31] transition-transform group-hover:translate-x-0.5" />
                    </span>

                    <span
                      style={kannadaFont}
                      className="text-sm font-medium leading-6 text-[#49382a]"
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* HIGHLIGHT */}

            <div className="mt-7 rounded-2xl border border-[#e5d5b5] bg-[#f8f2e6] p-5 sm:p-6">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                  <Heart className="h-5 w-5 text-[#987039]" />
                </div>

                <div>
                  <p
                    style={kannadaFont}
                    className="text-sm font-bold leading-7 text-[#594126]"
                  >
                    ನಿಮ್ಮ ಸಮಸ್ಯೆಗಳ ಕುರಿತು ವೈಯಕ್ತಿಕ ಆಧ್ಯಾತ್ಮಿಕ ಮಾರ್ಗದರ್ಶನಕ್ಕಾಗಿ ಸಂಪರ್ಕಿಸಿ.
                  </p>

                  <p className="mt-2 text-xs leading-6 text-[#88755c]">
                    Speak directly to discuss your consultation needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SERVICES */}

        <div className="mt-14 md:mt-16">

          <div className="mb-7 text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#a17c41]">
              OUR SERVICES
            </p>

            <h3
              style={kannadaFont}
              className="mt-3 text-2xl font-bold text-[#302016] sm:text-3xl"
            >
              ನಮ್ಮ ಸೇವೆಗಳು
            </h3>

            <p className="mt-3 text-sm text-[#887969]">
              Traditional services and personalized consultations
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
            {services.map(({ title, icon: Icon }) => (
              <div
                key={title}
                className="group rounded-2xl border border-[#e7dcc9] bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#c9ad70] hover:shadow-[0_12px_30px_rgba(48,29,14,0.08)] sm:rounded-3xl sm:p-7"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f5edde] transition-colors group-hover:bg-[#e9d7b3] sm:h-14 sm:w-14">
                  <Icon className="h-5 w-5 text-[#92703b] sm:h-6 sm:w-6" />
                </div>

                <p
                  style={kannadaFont}
                  className="mt-4 text-sm font-semibold leading-7 text-[#49382a] sm:text-base"
                >
                  {title}
                </p>
              </div>
            ))}
          </div>
        </div>

     

        {/* BOTTOM CTA */}

        <div className="mt-10 overflow-hidden rounded-[28px] bg-[#261910] px-6 py-8 text-center shadow-[0_15px_45px_rgba(48,29,14,0.12)] sm:px-10 sm:py-10">

          <Sparkles className="mx-auto h-6 w-6 text-[#d4b16c]" />

          <h3
            style={kannadaFont}
            className="mt-4 text-xl font-bold leading-relaxed text-[#fff3d8] sm:text-2xl"
          >
            ವೈಯಕ್ತಿಕ ಸಮಾಲೋಚನೆಗಾಗಿ ಸಂಪರ್ಕಿಸಿ
          </h3>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-[#c8b69d]">
            Get in touch to discuss your questions and learn more about the available services.
          </p>

          <a
            href={`tel:${phone_number}`}
            className="mt-6 inline-flex min-h-[50px] items-center justify-center gap-3 rounded-full bg-[#d4b16c] px-7 py-3 text-sm font-bold text-[#261910] transition-all hover:-translate-y-0.5 hover:bg-[#e6cb8c]"
          >
            <Phone className="h-4 w-4" />
            ಸಂಪರ್ಕಿಸಿ
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
