import { ShoppingBag } from 'lucide-react';

const cards = [
  {
    id: 1,
    name: 'For Your Desks Decorations',
    description: 'I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!',
    price: 'Rs. 599/-',
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=600&q=80',
    imageSide: 'left',
  },
  {
    id: 2,
    name: 'For Your Desks Decorations',
    description: 'The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming.',
    price: 'Rs. 399/-',
    image: 'https://images.unsplash.com/photo-1459156212016-c812468e2115?w=600&q=80',
    imageSide: 'right',
  },
];

const TrendingPlants = () => {
  return (
    <section id="trending" className="py-16 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
        {cards.map((card) => (
          <div
            key={card.id}
            className="relative border border-white/10 rounded-3xl overflow-visible flex flex-col sm:flex-row items-center"
            style={{ background: 'rgba(20,35,18,0.85)' }}
          >
            {card.imageSide === 'left' ? (
              <>
                {/* Image left, overflows top and bottom */}
                <div className="flex-shrink-0 w-full sm:w-2/5 flex justify-center sm:justify-start py-6 sm:py-0">
                  <img
                    src={card.image}
                    alt={card.name}
                    className="w-56 sm:w-64 h-64 sm:h-72 object-cover rounded-2xl sm:-ml-6 sm:-my-10 drop-shadow-2xl"
                  />
                </div>
                {/* Text right */}
                <div className="flex-1 p-6 sm:pl-8 sm:pr-10 flex flex-col justify-center">
                  <h3 className="text-white font-bold text-xl mb-2">{card.name}</h3>
                  <p className="text-gray-400 text-sm italic leading-relaxed mb-3">{card.description}</p>
                  <p className="text-white font-bold text-lg mb-5">{card.price}</p>
                  <div className="flex items-center gap-3">
                    <button className="border border-white/50 text-white text-sm px-6 py-2 rounded-md hover:bg-white/10 transition-all">
                      Explore
                    </button>
                    <button aria-label="Add to cart" className="w-9 h-9 border border-white/30 rounded-lg flex items-center justify-center text-white/70 hover:border-white hover:text-white transition-all">
                      <ShoppingBag size={15} />
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Text left */}
                <div className="flex-1 p-6 sm:pl-10 sm:pr-6 flex flex-col justify-center order-2 sm:order-1">
                  <h3 className="text-white font-bold text-xl mb-2">{card.name}</h3>
                  <p className="text-gray-400 text-sm italic leading-relaxed mb-3">{card.description}</p>
                  <p className="text-white font-bold text-lg mb-5">{card.price}</p>
                  <div className="flex items-center gap-3">
                    <button className="border border-white/50 text-white text-sm px-6 py-2 rounded-md hover:bg-white/10 transition-all">
                      Explore
                    </button>
                    <button aria-label="Add to cart" className="w-9 h-9 border border-white/30 rounded-lg flex items-center justify-center text-white/70 hover:border-white hover:text-white transition-all">
                      <ShoppingBag size={15} />
                    </button>
                  </div>
                </div>
                {/* Image right, overflows */}
                <div className="flex-shrink-0 w-full sm:w-2/5 flex justify-center sm:justify-end py-6 sm:py-0 order-1 sm:order-2">
                  <img
                    src={card.image}
                    alt={card.name}
                    className="w-56 sm:w-64 h-64 sm:h-72 object-cover rounded-2xl sm:-mr-6 sm:-my-10 drop-shadow-2xl"
                  />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingPlants;
