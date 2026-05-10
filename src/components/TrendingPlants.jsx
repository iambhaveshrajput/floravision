import { ShoppingBag } from 'lucide-react';
import { trendingPlants } from '../data/plants';

const TrendingPlants = () => {
  return (
    <section id="trending" className="py-16 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6">
          {trendingPlants.map((plant, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={plant.id}
                className={`plant-card flex flex-col sm:flex-row ${
                  isEven ? '' : 'sm:flex-row-reverse'
                } items-center gap-0 overflow-hidden`}
              >
                {/* Image side */}
                <div className="w-full sm:w-2/5 h-48 sm:h-56 flex-shrink-0 overflow-hidden">
                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Content side */}
                <div className="flex-1 p-6 sm:p-8 flex flex-col justify-center">
                  <h3 className="text-text-primary font-semibold text-lg mb-2">
                    {plant.name}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-4">
                    {plant.description}
                  </p>
                  <p className="text-text-primary font-semibold text-base mb-5">
                    {plant.price}
                  </p>
                  <div className="flex items-center gap-3">
                    <button className="btn-primary px-6 py-2 text-sm">Explore</button>
                    <button
                      aria-label="Add to cart"
                      className="btn-icon"
                    >
                      <ShoppingBag size={15} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrendingPlants;
