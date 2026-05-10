import { Play, ChevronRight, Star } from 'lucide-react';
import { ShoppingBag } from 'lucide-react';

const HeroBanner = () => {
  return (
    <section id="home" className="relative w-full overflow-hidden">

      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?w=1600&q=90"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0" style={{ background: 'rgba(10,22,10,0.58)' }} />
      </div>

      <div className="relative z-10 w-full px-5 sm:px-8 lg:px-14">

        {/* ── HERO ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 pt-24 pb-10 gap-10 items-start">

          {/* LEFT */}
          <div className="flex flex-col gap-5 max-w-lg">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Earth's Exhale
            </h1>
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
              "Earth Exhale" symbolizes the purity and vitality of the Earth's natural
              environment and its essential role in sustaining life.
            </p>

            <div className="flex items-center gap-5 mt-1">
              <button
                className="text-white text-sm font-medium px-6 py-2.5 rounded-md hover:bg-white/10 transition-all"
                style={{ border: '1px solid rgba(255,255,255,0.9)' }}
              >
                Buy Now
              </button>
              <button className="flex items-center gap-2.5 text-gray-300 hover:text-white text-sm transition-colors">
                <span
                  className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ border: '1px solid rgba(255,255,255,0.6)' }}
                >
                  <Play size={12} className="ml-0.5 fill-gray-300 text-gray-300" />
                </span>
                Live Demo...
              </button>
            </div>

            {/* Review card */}
            <div
              className="mt-8 rounded-2xl p-4 w-fit"
              style={{
                background: 'rgba(0,0,0,0.42)',
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
                    {[1, 2, 3, 4].map((i) => (
                      <Star key={i} size={11} className="text-yellow-400 fill-yellow-400" />
                    ))}
                    <Star size={11} className="text-yellow-400 fill-yellow-400 opacity-40" />
                  </div>
                </div>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed" style={{ maxWidth: '220px' }}>
                I can't express how thrilled I am with my new natural plants! They bring such a
                fresh and vibrant energy to my home.
              </p>
            </div>
          </div>

          {/* RIGHT — Featured plant card — visible on ALL screens */}
          <div className="flex justify-center lg:justify-end items-start" style={{ paddingTop: '72px' }}>
            <div
              className="relative rounded-3xl px-5 pb-5 pt-0 w-full max-w-[300px]"
              style={{
                background: 'rgba(20,35,18,0.50)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.15)',
              }}
            >
              {/* Plant image overflows top */}
              <div className="flex justify-center mb-4" style={{ marginTop: '-72px' }}>
                <img
                  src="https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=500&q=90"
                  alt="Aglaonema plant"
                  className="object-contain drop-shadow-2xl"
                  style={{ width: '240px', height: '240px' }}
                />
              </div>

              <p className="text-gray-400 text-sm mb-1 px-1">Indoor Plant</p>

              <div className="flex items-center justify-between px-1 mb-4">
                <h3 className="text-white font-semibold text-2xl tracking-wide">
                  Aglaonema&nbsp; plant
                </h3>
                <ChevronRight size={22} className="text-white flex-shrink-0" />
              </div>

              <button
                className="w-full text-white text-base py-3 rounded-2xl hover:bg-white/10 transition-all font-medium"
                style={{ border: '1px solid rgba(255,255,255,0.35)' }}
              >
                Buy Now
              </button>

              <div className="flex items-center justify-center gap-2 mt-4">
                <span className="w-7 h-1.5 bg-white rounded-full" />
                <span className="w-2 h-2 rounded-full" style={{ background: 'rgba(255,255,255,0.30)' }} />
                <span className="w-2 h-2 rounded-full" style={{ background: 'rgba(255,255,255,0.30)' }} />
              </div>
            </div>
          </div>

        </div>

        {/* ── "Our Trendy plants" ── */}
        <div className="flex justify-center py-8">
          <h2 className="text-white font-semibold text-2xl border-r-4 border-yellow-500 pr-3 leading-tight">
            Our Trendy plants
          </h2>
        </div>

        {/* ── TRENDING CARDS ── */}
        <div className="flex flex-col gap-8 pb-16">

          {/* Card 1 — image left overflows, text right */}
          <div
            className="rounded-3xl flex flex-col sm:flex-row items-center"
            style={{
              background: 'rgba(12,24,12,0.72)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.08)',
              overflow: 'visible',
              minHeight: '220px',
            }}
          >
            <div
              className="flex-shrink-0 flex items-center justify-center w-full sm:w-auto py-6 sm:py-0"
              style={{ marginLeft: '-16px', marginTop: '-32px', marginBottom: '-32px' }}
            >
              <img
                src="https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=500&q=85"
                alt="Desk decoration plant"
                className="rounded-3xl drop-shadow-2xl object-cover"
                style={{ width: '260px', height: '300px' }}
              />
            </div>
            <div className="flex-1 flex flex-col justify-center px-8 py-8">
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

          {/* Card 2 — text left, image right overflows */}
          <div
            className="rounded-3xl flex flex-col sm:flex-row items-center"
            style={{
              background: 'rgba(12,24,12,0.72)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.08)',
              overflow: 'visible',
              minHeight: '220px',
            }}
          >
            <div className="flex-1 flex flex-col justify-center px-8 py-8 order-2 sm:order-1">
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
            <div
              className="flex-shrink-0 flex items-center justify-center w-full sm:w-auto order-1 sm:order-2 py-6 sm:py-0"
              style={{ marginRight: '-16px', marginTop: '-32px', marginBottom: '-32px' }}
            >
              <img
                src="https://images.unsplash.com/photo-1459156212016-c812468e2115?w=500&q=85"
                alt="Desk decoration plant"
                className="rounded-3xl drop-shadow-2xl object-cover"
                style={{ width: '260px', height: '300px' }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
