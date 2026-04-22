import { useEffect } from 'react';
import Navbar from '../components/landing/Navbar';
import Hero from '../components/landing/Hero';
import Strip from '../components/landing/Strip';
import MenuSection from '../components/landing/MenuSection';
import OrderSection from '../components/landing/OrderSection';
import ReservaSection from '../components/landing/ReservaSection';
import Location from '../components/landing/Location';
import Footer from '../components/landing/Footer';
import { Toaster } from 'sonner';

const Landing = () => {
  useEffect(() => {
    const revealElements = () => {
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', revealElements);
    revealElements();

    return () => window.removeEventListener('scroll', revealElements);
  }, []);

  return (
    <div className="min-h-screen bg-navy-dark">
      <Navbar />
      <Hero />
      <Strip />
      <MenuSection />
      <OrderSection />
      <ReservaSection />
      <Location />
      <Footer />
      <Toaster position="top-right" richColors />
    </div>
  );
};

export default Landing;
