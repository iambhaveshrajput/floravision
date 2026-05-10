import { Play, ChevronRight, Star } from 'lucide-react';
import { ShoppingBag } from 'lucide-react';

const HeroBanner = () => {
  return (
    <section id="home" className="relative w-full overflow-hidden">

      {/* ── Continuous background image for entire section ── */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?w=1600&q=90"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0" style={{ background: 'rgba(10,22,10,0.55)' }} />
      </div>

      <div className="relative z-10 w-full px-5 sm:px-8 lg:px-14">

        {/* ════════════ HERO PART ════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 pt-24 pb-16 gap-6 items-start">

          {/* LEFT — text */}
          <div className="flex flex-col gap-5 max-w-lg">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Earth's Exhale
            </h1>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs sm:max-w-sm">
              "Earth Exhale" symbolizes the purity and vitality of the Earth's natural
              environment and its essential role in sustaining life.
            </p>

            {/* Buttons */}
            <div className="flex items-center gap-5 mt-1">
              <button className="border border-white text-white text-sm font-medium px-6 py-2.5 rounded-md hover:bg-white/10 transition-all duration-200">
                Buy Now
              </button>
              <button className="flex items-center gap-2.5 text-gray-300 hover:text-white text-sm transition-colors">
                <span className="w-9 h-9 border border-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                  <Play size={12} className="ml-0.5 fill-gray-300 text-gray-300" />
                </span>
                Live Demo...
              </button>
            </div>

            {/* Review card */}
            <div
              className="mt-10 rounded-2xl p-4 w-fit"
              style={{
                background: 'rgba(0,0,0,0.40)',
                backdropFilter: 'blur(14px)',
                border: '1px solid rgba(255,255,255,0.10)',
              }}
            >
              <div className="flex items-center gap-3 mb-2">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80"
                  alt="Ronnie Hamill"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-white text-sm font-semibold">Ronnie Hamill</p>
                  <div className="flex gap-0.5 mt-0.5">
                    {[1,2,3,4].map(i => (
                      <Star key={i} size={11} className="text-yellow-400 fill-yellow-400" />
                    ))}
                    <Star size={11} className="text-yellow-400 fill-yellow-400 opacity-40" />
                  </div>
                </div>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed max-w-[220px]">
                I can't express how thrilled I am with my new natural plants! They bring such a
                fresh and vibrant energy to my home.
              </p>
            </div>
          </div>

          {/* RIGHT — Featured plant card */}
          <div className="hidden lg:flex justify-end items-start">
            <div
              className="relative rounded-3xl p-5 w-[280px] mt-4"
              style={{
                background: 'rgba(15,30,15,0.55)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255,255,255,0.12)',
              }}
            >
              {/* Plant image overflows top */}
              <div className="flex justify-center -mt-20 mb-3">
                <img
                  src="https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400&q=85"
                  alt="Aglaonema plant"
                  className="w-56 h-56 object-cover rounded-2xl drop-shadow-2xl"
                />
              </div>
              <p className="text-gray-400 text-xs mb-1 px-1">Indoor Plant</p>
              <div className="flex items-center justify-between px-1 mb-3">
                <h3 className="text-white font-semibold text-lg tracking-wide">Aglaonema&nbsp; plant</h3>
                <ChevronRight size={18} className="text-gray-400 flex-shrink-0" />
              </div>
              <button
                className="w-full text-white text-sm py-2 rounded-xl hover:bg-white/10 transition-all"
                style={{ border: '1px solid rgba(255,255,255,0.30)' }}
              >
                Buy Now
              </button>
              {/* Dots */}
              <div className="flex items-center justify-center gap-2 mt-4">
                <span className="w-6 h-1.5 bg-white rounded-full" />
                <span className="w-2 h-2 bg-white/25 rounded-full" />
                <span className="w-2 h-2 bg-white/25 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* ════════════ "Our Trendy plants" label ════════════ */}
        <div className="flex justify-center py-6">
          <h2 className="text-white font-semibold text-2xl border-r-4 border-yellow-500 pr-3 leading-tight">
            Our Trendy plants
          </h2>
        </div>

        {/* ════════════ TRENDING CARDS ════════════ */}
        <div className="flex flex-col gap-6 pb-16 mt-4">

          {/* Card 1 — image left, text right */}
          <div
            className="relative rounded-3xl flex flex-col sm:flex-row items-center overflow-visible"
            style={{
              background: 'rgba(12,24,12,0.70)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.08)',
              minHeight: '220px',
            }}
          >
            {/* Image overflows left + top */}
            <div className="flex-shrink-0 flex items-center justify-center sm:justify-start w-full sm:w-auto py-6 sm:py-0 sm:-ml-4 sm:-my-8">
              <img
                src="https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=500&q=85"
                alt="Desk plant"
                className="w-60 h-72 sm:w-72 sm:h-80 object-cover rounded-3xl drop-shadow-2xl"
              />
            </div>
            {/* Text */}
            <div className="flex-1 flex flex-col justify-center px-6 sm:px-10 py-6 sm:py-10">
              <h3 className="text-white font-bold text-xl mb-2">For Your Desks Decorations</h3>
              <p className="text-gray-300 text-sm italic leading-relaxed mb-4">
                I recently added a beautiful desk decoration plant to my workspace, and it
                has made such a positive difference!
              </p>
              <p className="text-white font-bold text-xl mb-6">Rs. 599/-</p>
              <div className="flex items-center gap-3">
                <button
                  className="text-white text-sm px-7 py-2.5 rounded-lg hover:bg-white/10 transition-all"
                  style={{ border: '1px solid rgba(255,255,255,0.45)' }}
                >
                  Explore
                </button>
                <button
                  aria-label="Add to cart"
                  className="w-10 h-10 flex items-center justify-center rounded-xl text-white/70 hover:text-white transition-all"
                  style={{ border: '1px solid rgba(255,255,255,0.30)' }}
                >
                  <ShoppingBag size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 — text left, image right */}
          <div
            className="relative rounded-3xl flex flex-col sm:flex-row items-center overflow-visible"
            style={{
              background: 'rgba(12,24,12,0.70)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.08)',
              minHeight: '220px',
            }}
          >
            {/* Text */}
            <div className="flex-1 flex flex-col justify-center px-6 sm:px-10 py-6 sm:py-10 order-2 sm:order-1">
              <h3 className="text-white font-bold text-xl mb-2">For Your Desks Decorations</h3>
              <p className="text-gray-300 text-sm italic leading-relaxed mb-4">
                The greenery adds a touch of nature and serenity to my desk, making it feel
                more inviting and calming.
              </p>
              <p className="text-white font-bold text-xl mb-6">Rs. 399/-</p>
              <div className="flex items-center gap-3">
                <button
                  className="text-white text-sm px-7 py-2.5 rounded-lg hover:bg-white/10 transition-all"
                  style={{ border: '1px solid rgba(255,255,255,0.45)' }}
                >
                  Explore
                </button>
                <button
                  aria-label="Add to cart"
                  className="w-10 h-10 flex items-center justify-center rounded-xl text-white/70 hover:text-white transition-all"
                  style={{ border: '1px solid rgba(255,255,255,0.30)' }}
                >
                  <ShoppingBag size={16} />
                </button>
              </div>
            </div>
            {/* Image overflows right + top */}
            <div className="flex-shrink-0 flex items-center justify-center sm:justify-end w-full sm:w-auto order-1 sm:order-2 py-6 sm:py-0 sm:-mr-4 sm:-my-8">
              <img
                src="https://images.unsplash.com/photo-1459156212016-c812468e2115?w=500&q=85"
                alt="Desk plant"
                className="w-60 h-72 sm:w-72 sm:h-80 object-cover rounded-3xl drop-shadow-2xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
