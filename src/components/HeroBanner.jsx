import { Play, ChevronRight, Star } from 'lucide-react';

const HeroBanner = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Full screen background bush plant image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?w=1400&q=85"
          alt=""
          className="w-full h-full object-cover object-center"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-bg-primary/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 min-h-screen flex flex-col justify-center pt-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen items-center gap-8">

          {/* LEFT */}
          <div className="flex flex-col justify-center py-16 lg:py-0">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
              Earth's Exhale
            </h1>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
              "Earth Exhale" symbolizes the purity and vitality of the Earth's natural environment and its essential role in sustaining life.
            </p>
            <div className="flex items-center gap-5 mb-16">
              <button className="border border-white text-white text-sm font-medium px-6 py-2.5 rounded-md hover:bg-white/10 transition-all duration-200">
                Buy Now
              </button>
              <button className="flex items-center gap-2.5 text-gray-300 hover:text-white text-sm transition-colors">
                <div className="w-9 h-9 border border-gray-400 rounded-full flex items-center justify-center hover:border-white transition-colors">
                  <Play size={13} className="ml-0.5 fill-gray-300" />
                </div>
                Live Demo...
              </button>
            </div>

            {/* Review card */}
            <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-4 max-w-xs">
              <div className="flex items-center gap-3 mb-2">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80"
                  alt="Ronnie Hamill"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-white text-sm font-medium">Ronnie Hamill</p>
                  <div className="flex gap-0.5 mt-0.5">
                    {[1,2,3,4].map(i => (
                      <Star key={i} size={11} className="text-yellow-400 fill-yellow-400" />
                    ))}
                    <Star size={11} className="text-yellow-400 fill-yellow-400 opacity-50" />
                  </div>
                </div>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed">
                I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.
              </p>
            </div>
          </div>

          {/* RIGHT — Featured plant card */}
          <div className="hidden lg:flex items-start justify-end pt-24">
            <div className="relative bg-black/30 backdrop-blur-md border border-white/10 rounded-3xl p-5 w-72 mt-16">
              <div className="flex justify-center -mt-24 mb-3">
                <img
                  src="https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=300&q=80"
                  alt="Aglaonema plant"
                  className="w-52 h-52 object-cover rounded-2xl drop-shadow-2xl"
                />
              </div>
              <p className="text-gray-400 text-xs mb-1">Indoor Plant</p>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-white font-semibold text-lg">Aglaonema  plant</h3>
                <ChevronRight size={18} className="text-gray-400" />
              </div>
              <button className="w-full border border-white/40 text-white text-sm py-2 rounded-lg hover:bg-white/10 transition-all">
                Buy Now
              </button>
              <div className="flex items-center justify-center gap-2 mt-4">
                <span className="w-5 h-1.5 bg-white rounded-full" />
                <span className="w-1.5 h-1.5 bg-white/30 rounded-full" />
                <span className="w-1.5 h-1.5 bg-white/30 rounded-full" />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Trendy plants label */}
      <div className="relative z-10 text-center pb-10">
        <span className="text-white font-semibold text-xl border-r-2 border-yellow-500 pr-2">
          Our Trendy plants
        </span>
      </div>
    </section>
  );
};

export default HeroBanner;
