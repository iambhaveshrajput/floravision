import { ShoppingBag } from 'lucide-react';

const plants = [
  {
    id: 1,
    name: 'Aglaonema plant',
    description: 'The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care',
    price: 'Rs. 300/-',
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400&q=80',
  },
  {
    id: 2,
    name: 'Plantain Lilies',
    description: 'Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes,',
    price: 'Rs. 380/-',
    image: 'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=400&q=80',
  },
  {
    id: 3,
    name: 'Cactus',
    description: 'It is known for their ability to thrive in arid environments',
    price: 'Rs. 259/-',
    image: 'https://images.unsplash.com/photo-1637167607911-2a1773d12d0e?w=400&q=80',
  },
  {
    id: 4,
    name: 'Swiss cheese Plant',
    description: 'It is a popular tropical houseplant known for its distinctive, perforated leaves',
    price: 'Rs. 400/-',
    image: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?w=400&q=80',
  },
  {
    id: 5,
    name: 'Sansevieria plant',
    description: 'It is a popular indoor plant admired for its striking appearance and low-maintenance nature.',
    price: 'Rs. 450/-',
    image: 'https://images.unsplash.com/photo-1545239705-1564e58b9e4a?w=400&q=80',
  },
  {
    id: 6,
    name: 'Agave plant',
    description: 'The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectural forms.',
    price: 'Rs. 359/-',
    image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?w=400&q=80',
  },
];

const TopSellingPlants = () => {
  return (
    <section id="top-selling" className="py-16 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading with yellow bracket lines on both sides */}
        <div className="flex justify-center mb-20">
          <div className="flex items-center gap-3">
            <span className="w-0.5 h-8 bg-yellow-500 rounded-full" />
            <h2 className="text-white font-bold text-2xl sm:text-3xl">
              Our Top Selling Plants
            </h2>
            <span className="w-0.5 h-8 bg-yellow-500 rounded-full" />
          </div>
        </div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-20">
          {plants.map((plant) => (
            <article
              key={plant.id}
              className="relative bg-bg-card border border-white/10 rounded-3xl pt-16 pb-5 px-5 flex flex-col hover:border-white/20 transition-all duration-300 group"
            >
              {/* Image overflowing top of card */}
              <div className="absolute -top-14 left-0 right-0 flex justify-center">
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="w-40 h-40 object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <h3 className="text-white font-semibold text-lg mb-1.5 mt-2">
                {plant.name}
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed mb-4 flex-1">
                {plant.description}
              </p>

              <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/5">
                <span className="text-white font-semibold text-base">
                  {plant.price}
                </span>
                <button
                  aria-label={`Add ${plant.name} to cart`}
                  className="w-9 h-9 border border-white/25 rounded-xl flex items-center justify-center text-white/60 hover:border-white/60 hover:text-white transition-all duration-200"
                >
                  <ShoppingBag size={15} />
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
