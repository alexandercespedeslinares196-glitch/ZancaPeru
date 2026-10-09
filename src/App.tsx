import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBadges } from './components/TrustBadges';
import { Services } from './components/Services';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { QuoteCalculator } from './components/QuoteCalculator';
import { MethodProcess } from './components/MethodProcess';
import { CoverageCajamarca } from './components/CoverageCajamarca';
import { Testimonials } from './components/Testimonials';
import { Faq } from './components/Faq';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { WhatsAppWidget } from './components/WhatsAppWidget';

export function App() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-primary/20 selection:text-primary">
      {/* Fixed Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Key Metrics and Trust Badges */}
        <TrustBadges />

        {/* 3. Services Catalog */}
        <Services />

        {/* 4. Real Results (Before & After Interactive Slider) */}
        <BeforeAfterSlider />

        {/* 5. Online Interactive Quote Calculator (High-value feature) */}
        <QuoteCalculator />

        {/* 6. Professional 5-Stage Method & 3-Step Booking */}
        <MethodProcess />

        {/* 7. Cajamarca Coverage & Local Districts */}
        <CoverageCajamarca />

        {/* 8. Customer Testimonials and Reviews */}
        <Testimonials />

        {/* 9. Contact Form & Fast Quote */}
        <ContactForm />

        {/* 10. Frequently Asked Questions */}
        <Faq />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Interactive WhatsApp Widget */}
      <WhatsAppWidget />
    </div>
  );
}

export default App;
