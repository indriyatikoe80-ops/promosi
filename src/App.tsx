import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PromoVideo from './components/PromoVideo';
import Stats from './components/Stats';
import Features from './components/Features';
import Screenshots from './components/Screenshots';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Download from './components/Download';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <PromoVideo />
        <Stats />
        <Features />
        <Screenshots />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Download />
      </main>
      <Footer />
    </div>
  );
}

export default App;
