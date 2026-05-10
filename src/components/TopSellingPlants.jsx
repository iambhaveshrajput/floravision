import { ShoppingBag } from 'lucide-react';
import { topSellingPlants } from '../data/plants';

const TopSellingPlants = () => {
  return (
    <section id="top-selling" className="py-16 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading - centered with border like Figma */}
        <div className="flex justify-center mb-10">
          <h2 className="section-heading">Our Top Selling Plants</h2>
        </div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {topSellingPlants.map((plant) => (
            <article
              key={plant.id}
              className="plant-card group p-4 flex flex-col"
            >
              {/* Plant image */}
              <div className="h-44 rounded-xl overflow-hidden mb-4 bg-bg-darker flex items-center justify-center">
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <h3 className="text-text-primary font-medium text-base mb-1">
                {plant.name}
              </h3>
              <p className="text-text-muted text-xs leading-relaxed mb-3 flex-1">
                {plant.description}
              </p>

              {/* Price + cart */}
              <div className="flex items-center justify-between mt-auto pt-2">
                <span className="text-text-primary font-semibold text-sm">
                  {plant.price}
                </span>
                <button
                  aria-label={`Add ${plant.name} to cart`}
                  className="btn-icon"
                >
                  <ShoppingBag size={14} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopSellingPlants;
