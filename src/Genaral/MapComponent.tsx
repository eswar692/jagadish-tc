import {
  ExternalLink,
  MapPin,
  Navigation,
  Phone,
  Sparkles,
} from "lucide-react";
import {
  business_name,
  person_name,
  phone_number,
} from "./secret";

const GoogleMapSection = () => {
  const googleMapsEmbed =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62380.490183054!2d77.15138526974788!3d12.263118912665714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf1c34f3d3a7a7%3A0x2b5a3e591ee33b3b!2sSathegala%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1792857396387!5m2!1sen!2sin"

  return (
    <section className="relative overflow-hidden bg-[#f7f3eb] py-16 md:py-24 px-5">

      {/* Background decoration */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#c9a45b]/10 blur-3xl" />

      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#8b1e1e]/5 blur-3xl" />

      <div className="relative z-10 max-w-[1250px] mx-auto">

        {/* ============================= */}
        {/* SECTION HEADER */}
        {/* ============================= */}

        <div className="text-center max-w-3xl mx-auto mb-12">

          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-[#b28535]" />

            <span className="text-xs md:text-sm font-bold tracking-[0.22em] text-[#96702f]">
              OUR LOCATION
            </span>

            <Sparkles className="w-4 h-4 text-[#b28535]" />
          </div>

          <h2 className="montserrat text-3xl md:text-5xl font-extrabold text-[#291911] leading-tight">
            Find Us
            <span className="block text-[#8b1e1e]">
              On Google Maps
            </span>
          </h2>

          <div className="flex items-center justify-center gap-3 my-5">

            <span className="w-16 h-[2px] bg-[#c9a45b]" />

            <span className="w-2 h-2 rotate-45 bg-[#c9a45b]" />

            <span className="w-16 h-[2px] bg-[#c9a45b]" />

          </div>

          <p className="open-sans text-base md:text-lg leading-7 text-[#6d5e52]">
            Visit our location or use Google Maps to get directions
            directly to our consultation center.
          </p>

        </div>

        {/* ============================= */}
        {/* MAP + INFO */}
        {/* ============================= */}

        <div className="grid grid-cols-1 lg:grid-cols-[1.7fr_0.8fr] gap-6">

          {/* ============================= */}
          {/* GOOGLE MAP */}
          {/* ============================= */}

          <div className="relative overflow-hidden rounded-3xl bg-white border border-[#dfd4c3] shadow-[0_15px_50px_rgba(52,35,22,0.12)] h-[380px] md:h-[500px]">

            <iframe
              src={googleMapsEmbed}
              title={`${business_name} Google Maps Location`}
              width="100%"
              height="100%"
              style={{
                border: 0,
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              className="absolute inset-0"
            />

            {/* Map label */}

            <div className="absolute top-4 left-4 pointer-events-none">

              <div className="flex items-center gap-2 bg-[#21140e]/90 backdrop-blur-md text-white px-4 py-2.5 rounded-full shadow-xl">

                <MapPin className="w-4 h-4 text-[#e1c26f]" />

                <span className="text-xs font-bold">
                  {business_name}
                </span>

              </div>

            </div>

          </div>

          {/* ============================= */}
          {/* LOCATION INFO */}
          {/* ============================= */}

          <div className="relative overflow-hidden rounded-3xl bg-[#21140e] p-7 md:p-8 shadow-2xl">

            {/* Glow */}

            <div className="absolute -top-24 -right-24 w-60 h-60 rounded-full bg-[#c9a45b]/10 blur-3xl" />

            <div className="relative">

              {/* Icon */}

              <div className="w-14 h-14 rounded-2xl bg-[#c9a45b]/10 border border-[#c9a45b]/30 flex items-center justify-center">

                <MapPin className="w-7 h-7 text-[#dfbd6b]" />

              </div>

              {/* Business */}

              <p className="mt-6 text-[10px] tracking-[0.2em] font-bold text-[#c9a45b]">
                OUR LOCATION
              </p>

              <h3 className="mt-2 montserrat text-2xl font-extrabold text-[#fff7e7]">
                {business_name}
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#bcae9e]">
                Traditional astrology and spiritual guidance.
              </p>

              {/* Divider */}

              <div className="my-6 h-px bg-white/10" />

              {/* Location */}

              <div className="flex gap-3">

                <MapPin className="w-5 h-5 shrink-0 text-[#d4b363]" />

                <div>

                  <p className="text-[10px] tracking-[0.15em] font-bold text-[#c9a45b]">
                    VISIT US
                  </p>

                  <p className="mt-1 text-sm leading-6 text-[#ddd0c0]">
                    Open the map to view our exact location
                    and get directions.
                  </p>

                </div>

              </div>

              {/* Consultant */}

              <div className="flex gap-3 mt-5">

                <div className="w-5 h-5 rounded-full border border-[#c9a45b] flex items-center justify-center shrink-0">

                  <span className="w-1.5 h-1.5 rounded-full bg-[#c9a45b]" />

                </div>

                <div>

                  <p className="text-[10px] tracking-[0.15em] font-bold text-[#c9a45b]">
                    CONSULTATION
                  </p>

                  <p className="mt-1 text-sm text-[#ddd0c0]">
                    {person_name}
                  </p>

                </div>

              </div>

              {/* Buttons */}

              <div className="mt-8 space-y-3">

                {/* Directions */}

                <a
                  href={googleMapsEmbed}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-[#8b1e1e] text-white text-sm font-bold hover:bg-[#a32727] hover:-translate-y-0.5 transition-all shadow-lg"
                >
                  <Navigation className="w-4 h-4" />
                  Get Directions
                </a>

                {/* Call */}

                <a
                  href={`tel:${phone_number}`}
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl border border-[#c9a45b]/40 text-[#e3c675] text-sm font-bold hover:bg-[#c9a45b]/10 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>

                {/* Open Maps */}

                <a
                  href={googleMapsEmbed}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 text-xs font-semibold text-[#a99988] hover:text-[#e1c26f] transition-colors"
                >
                  Open Google Maps
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default GoogleMapSection;