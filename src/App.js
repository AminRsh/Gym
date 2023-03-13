import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Gallery from './components/Gallery/Gallery';
import Hero from './components/hero/Hero'
import JoinUs from './components/JoinUs/JoinUs'
import Navbar from './components/Navbar/Navbar';
import Pricing from './components/Pricing/Pricing';
import Sale from './components/Sale/Sale';
import Summer from './components/Summer/Summer';
import Trainer from './components/Trainers/Trainer';

function App() {
  
  return(
      <div>
        <Navbar />
        <Hero />
        <JoinUs />
        <Features />
        <Sale />
        <Pricing />
        <Gallery />
        <Trainer />
        <Summer />
        <Footer />
      </div>
  )

}

export default App;