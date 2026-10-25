import {
  Play,
  Phone,
  MessageCircle,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

import {
  business_name,
  person_name,
  phone_number,
  whatsapp_number,
} from "../Genaral/secret";

export default function GurujiVideo() {
  return (
    <section className="relative overflow-hidden bg-[#21140e] py-16 md:py-24 px-5">

      {/* ========================================== */}
      {/* BACKGROUND */}
      {/* ========================================== */}

      <div className="absolute -top-60 -right-60 w-[650px] h-[650px] rounded-full bg-[#c9a45b]/10 blur-3xl" />

      <div className="absolute -bottom-60 -left-60 w-[650px] h-[650px] rounded-full bg-[#8b1e1e]/10 blur-3xl" />

      {/* subtle pattern */}

      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "35px 35px",
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto">

        {/* ========================================== */}
        {/* HEADING */}
        {/* ========================================== */}

        <div className="text-center max-w-3xl mx-auto mb-12">

          <div className="flex items-center justify-center gap-2 mb-4">

            <Sparkles className="w-4 h-4 text-[#dfbd6b]" />

            <span className="text-xs md:text-sm font-bold tracking-[0.22em] text-[#d5b260]">
              MEET OUR GURUJI
            </span>

            <Sparkles className="w-4 h-4 text-[#dfbd6b]" />

          </div>

          <h2 className="montserrat text-3xl md:text-5xl font-extrabold text-[#fff8e9] leading-tight">

            Meet{" "}
            <span className="text-[#e1be68]">
              {person_name}
            </span>

          </h2>

          <div className="flex items-center justify-center gap-3 my-5">

            <span className="w-16 h-px bg-[#c9a45b]" />

            <span className="w-2 h-2 rotate-45 bg-[#c9a45b]" />

            <span className="w-16 h-px bg-[#c9a45b]" />

          </div>

          <p className="open-sans text-base md:text-lg leading-7 text-[#c8b9aa]">
            Hear directly from our Guruji about his approach to
            traditional astrology, puja and spiritual guidance.
          </p>

        </div>

        {/* ========================================== */}
        {/* VIDEO + CONTENT */}
        {/* ========================================== */}

        <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_0.65fr] gap-7 items-stretch">

          {/* ====================================== */}
{/* 9:16 PORTRAIT VIDEO */}
{/* ====================================== */}

<div className="relative group flex justify-center">

  {/* Gold outer frame */}
  <div className="absolute -inset-2 rounded-[30px] border border-[#c9a45b]/20 pointer-events-none" />

  <div className="relative overflow-hidden rounded-[26px] bg-black shadow-[0_25px_70px_rgba(0,0,0,0.45)]">

   <img src="https://i.pinimg.com/736x/af/a3/64/afa364ecc09f57c3d0a978bd8218cd0a.jpg" alt=""  />

    {/* Top label */}

    <div className="absolute top-4 left-4 pointer-events-none">

      <div className="flex items-center gap-2 bg-[#21140e]/90 backdrop-blur-md px-4 py-2 rounded-full border border-[#c9a45b]/20">

        <Play
          className="w-3.5 h-3.5 text-[#e1c26f] fill-[#e1c26f]"
        />

        <span className="text-[10px] font-bold tracking-[0.12em] text-white">
          GURUJI VIDEO
        </span>

      </div>

    </div>

  </div>

</div>

          {/* ====================================== */}
          {/* GURUJI INFO */}
          {/* ====================================== */}

          <div className="relative overflow-hidden rounded-[26px] bg-[#2a1911] border border-[#c9a45b]/15 p-7 md:p-8">

            <div className="absolute -top-24 -right-24 w-52 h-52 rounded-full bg-[#c9a45b]/10 blur-3xl" />

            <div className="relative">

              <p className="text-[10px] tracking-[0.2em] font-bold text-[#c9a45b]">
                ABOUT THE GUIDE
              </p>

              <h3 className="montserrat mt-3 text-2xl md:text-3xl font-extrabold text-[#fff8e9]">
                {person_name}
              </h3>

              <p className="mt-2 text-sm font-semibold text-[#d9b96b]">
                Astrology • Puja • Spiritual Guidance
              </p>

              <div className="h-px bg-white/10 my-6" />

              <p className="open-sans text-sm leading-7 text-[#c5b5a5]">
                In this video, Guruji introduces his approach to
                traditional spiritual guidance and explains how
                personalized consultations and puja practices can
                be approached with care and understanding.
              </p>

              {/* Trust points */}

              <div className="mt-7 space-y-4">

                <div className="flex items-start gap-3">

                  <div className="w-9 h-9 rounded-xl bg-[#c9a45b]/10 border border-[#c9a45b]/20 flex items-center justify-center shrink-0">

                    <ShieldCheck className="w-4 h-4 text-[#dfbd6b]" />

                  </div>

                  <div>

                    <p className="text-sm font-bold text-white">
                      Traditional Approach
                    </p>

                    <p className="mt-1 text-xs leading-5 text-[#a99988]">
                      Guidance rooted in traditional spiritual practices.
                    </p>

                  </div>

                </div>

                <div className="flex items-start gap-3">

                  <div className="w-9 h-9 rounded-xl bg-[#c9a45b]/10 border border-[#c9a45b]/20 flex items-center justify-center shrink-0">

                    <Sparkles className="w-4 h-4 text-[#dfbd6b]" />

                  </div>

                  <div>

                    <p className="text-sm font-bold text-white">
                      Personal Consultation
                    </p>

                    <p className="mt-1 text-xs leading-5 text-[#a99988]">
                      Individual attention based on your concerns.
                    </p>

                  </div>

                </div>

              </div>

              {/* Buttons */}

              <div className="mt-8 space-y-3">

                <a
                  href={`tel:${phone_number}`}
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-[#8b1e1e] text-white text-sm font-bold hover:bg-[#a32727] hover:-translate-y-0.5 transition-all shadow-lg"
                >
                  <Phone className="w-4 h-4" />
                  Talk to Guruji
                </a>

                <a
                  href={`https://wa.me/${whatsapp_number}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl border border-[#c9a45b]/40 text-[#e3c675] text-sm font-bold hover:bg-[#c9a45b]/10 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Consultation
                </a>

              </div>

            </div>

          </div>

        </div>

        {/* ========================================== */}
        {/* BOTTOM BRAND */}
        {/* ========================================== */}

        <div className="text-center mt-10">

          <p className="text-xs text-[#88786a]">
            {business_name}
          </p>

        </div>

      </div>

    </section>
  );
}

