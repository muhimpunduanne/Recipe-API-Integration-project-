import Hero from '@components/Hero';
import RecipesSection from '@components/RecipesSection';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <RecipesSection />
      <Footer />
    </>
  );
};

export default Home;
