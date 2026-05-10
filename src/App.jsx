import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import TrendingPlants from './components/TrendingPlants';
import TopSellingPlants from './components/TopSellingPlants';
import CustomerReviews from './components/CustomerReviews';
import O2Plants from './components/O2Plants';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Navbar />
      <main>
        <HeroBanner />
        <TrendingPlants />
        <TopSellingPlants />
        <CustomerReviews />
        <O2Plants />
      </main>
      <Footer />
    </div>
  );
}

export default App;
