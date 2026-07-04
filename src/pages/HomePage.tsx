import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import StatsSection from '../components/StatsSection';
import ProductsSection from '../components/ProductsSection';
import IndustriesSection from '../components/IndustriesSection';
import CertificationsSection from '../components/CertificationsSection';
import ProcessSection from '../components/ProcessSection';
import TeamSection from '../components/TeamSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <StatsSection />
      <ProductsSection />
      <IndustriesSection />
      <CertificationsSection />
      <ProcessSection />
      <TeamSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
