import { Star } from 'lucide-react';
import { reviews } from '../data/plants';

const CustomerReviews = () => {
  return (
    <section id="reviews" className="py-16 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered heading with border */}
        <div className="flex justify-center mb-10">
          <h2 className="section-heading">Customer Review</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {reviews.map((review) => (
            <article key={review.id} className="review-card">
              {/* Avatar + name + stars */}
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-green-border/40"
                />
                <div>
                  <p className="text-text-primary font-semibold text-sm">{review.name}</p>
                  <div className="flex gap-0.5 mt-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={12}
                        className={
                          i < review.rating
                            ? 'text-yellow-star fill-yellow-star'
                            : 'text-text-dim'
                        }
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-text-muted text-sm leading-relaxed">{review.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
