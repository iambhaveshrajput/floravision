import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { o2Plants } from '../data/plants';

const O2Plants = () => {
  const [current, setCurrent] = useState(0);
  const total = 4; // as shown in Figma "01/04"

  const prev = () => setCurrent((c) => (c === 0 ? total - 1 : c - 1));
  const next = () => setCurrent((c) => (c === total - 1 ? 0 : c + 1));

  const plant = o2Plants[0];

  return (
    <section id="o2" className="py-16 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading centered */}
        <div className="flex justify-center mb-10">
          <h2 className="section-heading">Our Best o2</h2>
        </div>

        {/* Main card */}
        <div className="plant-card p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-8">
          {/* Plant image */}
          <div className="w-full sm:w-2/5 flex-shrink-0">
            <img
              src={plant.image}
              alt="O2 plant"
              className="w-full max-w-xs mx-auto object-contain drop-shadow-2xl"
            />
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col">
            <h3 className="text-text-primary font-semibold text-xl leading-snug mb-4">
              {plant.title}
            </h3>
            <p className="text-green-light/80 text-sm leading-relaxed mb-3">
              {plant.description1}
            </p>
            <p className="text-text-muted text-sm leading-relaxed mb-6">
              {plant.description2}
            </p>

            {/* Controls row */}
            <div className="flex items-center gap-4">
              <button className="btn-primary px-6 py-2 text-sm">Explore</button>
              <div className="flex items-center gap-2 ml-auto">
                <button
                  onClick={prev}
                  aria-label="Previous"
                  className="btn-icon w-7 h-7"
                >
                  <ChevronLeft size={14} />
                </button>
                <span className="text-text-muted text-xs tabular-nums">
                  0{current + 1}/0{total}
                </span>
                <button
                  onClick={next}
                  aria-label="Next"
                  className="btn-icon w-7 h-7"
                >
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {[...Array(total)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`}
              className={`rounded-full transition-all duration-200 ${
                i === current
                  ? 'w-5 h-2 dot-active'
                  : 'w-2 h-2 dot-inactive'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default O2Plants;
