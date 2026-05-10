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

const PlantCard = ({ name, description, price, image }) => {
  return (
    <article
      className="flex flex-col rounded-3xl overflow-hidden group hover:border-white/20 transition-all duration-300"
      style={{
        background: 'rgba(22,38,20,0.85)',
        border: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      {/* Image area — dark bg, plant centered, no white */}
      <div
        className="w-full flex items-end justify-center pt-6"
        style={{
          background: 'rgba(22,38,20,0.85)',
          minHeight: '220px',
        }}
      >
        <img
          src={image}
          alt={name}
          className="w-full max-h-52 object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-xl"
          style={{ maxWidth: '85%' }}
        />
      </div>

      {/* Text area */}
      <div className="flex flex-col px-5 pt-4 pb-5 flex-1">
        <h3 className="text-white font-semibold text-lg mb-1.5">{name}</h3>
        <p className="text-gray-400 text-xs leading-relaxed mb-4 flex-1">{description}</p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-white font-semibold text-base">{price}</span>
          <button
            aria-label={`Add ${name} to cart`}
            className="w-9 h-9 flex items-center justify-center rounded-xl text-gray-400 hover:text-white transition-all"
            style={{ border: '1px solid rgba(255,255,255,0.20)' }}
          >
            <ShoppingBag size={15} />
          </button>
        </div>
      </div>
    </article>
  );
};

const TopSellingPlants = () => {
  return (
    <section id="top-selling" className="py-16" style={{ background: '#141f12' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading — | Our Top Selling Plants | with yellow vertical bars */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-3">
            <span
              className="rounded-full"
              style={{ width: '3px', height: '32px', background: '#c8a84b' }}
            />
            <h2 className="text-white font-bold text-2xl sm:text-3xl tracking-wide">
              Our Top Selling Plants
            </h2>
            <span
              className="rounded-full"
              style={{ width: '3px', height: '32px', background: '#c8a84b' }}
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {plants.map((plant) => (
            <PlantCard key={plant.id} {...plant} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default TopSellingPlants;
