import { Play, ChevronRight, Star } from 'lucide-react';
import { heroFeaturedPlant, heroReview } from '../data/plants';

const HeroBanner = () => {
  return (
    <section id="home" className="relative min-h-screen hero-bg overflow-hidden pt-14">
      {/* Background large plant image centered */}
      <div className="absolute inset-0 flex items-center justify-center opacity-60 pointer-events-none" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?w=900&q=80"
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-bg-primary/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full py-16">
          {/* Left content */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary leading-tight mb-4">
              Earth's Exhale
            </h1>
            <p className="text-text-muted text-sm leading-relaxed mb-8 max-w-sm">
              "Earth Exhale" symbolizes the purity and vitality of the Earth's natural environment and its essential role in sustaining life.
            </p>

            {/* CTA Buttons */}
            <div className="flex items-center gap-4 mb-12">
              <button className="btn-primary px-6 py-2.5">Buy Now</button>
              <button className="flex items-center gap-2 text-text-muted hover:text-text-primary text-sm transition-colors">
                <div className="w-8 h-8 border border-text-muted/50 rounded-full flex items-center justify-center hover:border-text-primary transition-colors">
                  <Play size={12} className="ml-0.5" />
                </div>
                Live Demo...
              </button>
            </div>

            {/* Review card floating */}
            <div className="bg-bg-card/80 backdrop-blur-sm border border-green-border/30 rounded-2xl p-4 max-w-xs">
              <div className="flex items-center gap-3 mb-2">
                <img
                  src={heroReview.avatar}
                  alt={heroReview.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div>
                  <p className="text-text-primary text-sm font-medium">{heroReview.name}</p>
                  <div className="flex gap-0.5">
                    {[...Array(heroReview.rating)].map((_, i) => (
                      <Star key={i} size={10} className="text-yellow-star fill-yellow-star" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-text-muted text-xs leading-relaxed">{heroReview.text}</p>
            </div>
          </div>

          {/* Right — Featured plant card */}
          <div className="flex flex-col items-end justify-start pt-8">
            <div className="bg-bg-card/70 backdrop-blur-sm border border-green-border/30 rounded-3xl p-4 w-full max-w-xs">
              <img
                src={heroFeaturedPlant.image}
                alt={heroFeaturedPlant.name}
                className="w-full h-48 object-cover rounded-2xl mb-3"
              />
              <p className="text-text-muted text-xs mb-1">{heroFeaturedPlant.category}</p>
              <div className="flex items-center justify-between">
                <h3 className="text-text-primary font-medium text-base">{heroFeaturedPlant.name}</h3>
                <ChevronRight size={16} className="text-text-muted" />
              </div>
              <button className="btn-primary w-full mt-3 text-center py-2 text-sm">
                Buy Now
              </button>
              {/* Dots */}
              <div className="flex justify-center gap-1.5 mt-3">
                <span className="w-2 h-2 rounded-full dot-active" />
                <span className="w-1.5 h-1.5 rounded-full dot-inactive" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section title below hero content */}
      <div className="relative z-10 text-center pb-12">
        <h2 className="section-heading text-xl">Our Trendy plants</h2>
      </div>
    </section>
  );
};

export default HeroBanner;
