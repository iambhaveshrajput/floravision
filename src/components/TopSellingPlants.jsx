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
    image: 'https://images.unsplash.com/photo-1551893665-f843f600794e?w=400&q=80',
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
    <section id="top-selling" className="py-16" style={{ background: '#141f12' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading with gold vertical bars on both sides */}
        <div className="flex justify-center mb-20">
          <div className="flex items-center gap-3">
            <span style={{ width: '3px', height: '32px', background: '#c8a84b', borderRadius: '4px', display: 'inline-block' }} />
            <h2 className="text-white font-bold text-2xl sm:text-3xl tracking-wide">
              Our Top Selling Plants
            </h2>
            <span style={{ width: '3px', height: '32px', background: '#c8a84b', borderRadius: '4px', display: 'inline-block' }} />
          </div>
        </div>

        {/* 3 columns × 2 rows grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
            rowGap: '80px',
          }}
        >
          {plants.map((plant) => (
            <article
              key={plant.id}
              style={{
                background: 'rgba(22,38,20,0.90)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '24px',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                paddingTop: '100px',
                paddingLeft: '16px',
                paddingRight: '16px',
                paddingBottom: '16px',
              }}
            >
              {/* Image overflows top — positioned absolutely above card */}
              <div
                style={{
                  position: 'absolute',
                  top: '-70px',
                  left: '0',
                  right: '0',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                  height: '170px',
                  pointerEvents: 'none',
                }}
              >
                <img
                  src={plant.image}
                  alt={plant.name}
                  style={{
                    height: '170px',
                    width: '100%',
                    objectFit: 'contain',
                    objectPosition: 'bottom',
                    filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.5))',
                  }}
                />
              </div>

              {/* Name */}
              <h3 className="text-white font-semibold text-base mb-1.5">
                {plant.name}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-xs leading-relaxed mb-4 flex-1">
                {plant.description}
              </p>

              {/* Price + cart */}
              <div className="flex items-center justify-between mt-auto pt-3">
                <span className="text-white font-semibold text-base">
                  {plant.price}
                </span>
                <button
                  aria-label={`Add ${plant.name} to cart`}
                  style={{
                    width: '36px',
                    height: '36px',
                    border: '1px solid rgba(255,255,255,0.20)',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'rgba(255,255,255,0.6)',
                    background: 'transparent',
                    cursor: 'pointer',
                  }}
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
