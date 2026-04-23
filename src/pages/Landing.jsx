import { useEffect } from 'react'
import Navbar        from '../components/landing/Navbar'
import Hero          from '../components/landing/Hero'
import Strip         from '../components/landing/Strip'
import ExperienceSection from '../components/landing/ExperienceSection'
import MenuSection   from '../components/landing/MenuSection'
import AboutSection  from '../components/landing/AboutSection'
import TestimonialsSection from '../components/landing/TestimonialsSection'
import OrderSection  from '../components/landing/OrderSection'
import ReservaSection from '../components/landing/ReservaSection'
import { Location, Footer } from '../components/landing/LocationFooter'

export default function Landing() {
  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in') }),
      { threshold: 0.12 }
    )
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
      .forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <Strip />
      <ExperienceSection />
      <MenuSection />
      <TestimonialsSection />
      <AboutSection />
      <OrderSection />
      <ReservaSection />
      <Location />
      <Footer />
    </>
  )
}