import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { FAQSection } from './components/FAQSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';
import { ScrollToTop } from './components/ScrollToTop';

// Feature flags
const FEATURE_FLAGS = {
  SHOW_TESTIMONIALS: false,
};

// Layout component for consistent header and footer
const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col min-h-screen bg-gray-900">
    <Header />
    <main className="flex-grow">
      {children}
    </main>
    <Footer />
  </div>
);

// 404 Page
const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white text-center p-4">
    <div>
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-xl mb-6">The page you're looking for doesn't exist or has been moved.</p>
      <Link 
        to="/" 
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
      >
        Go to Home
      </Link>
    </div>
  </div>
);

// Home page
const Home = () => (
  <>
    <HeroSection />
    <FeaturesSection />
    {FEATURE_FLAGS.SHOW_TESTIMONIALS && <TestimonialsSection />}
    <FAQSection />
  </>
);

export const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={
          <Layout>
            <Home />
          </Layout>
        } />
        <Route path="/privacy-policy" element={
          <Layout>
            <div className="max-w-4xl mx-auto px-4 py-12">
              <PrivacyPolicy />
            </div>
          </Layout>
        } />
        <Route path="/terms-of-service" element={
          <Layout>
            <div className="max-w-4xl mx-auto px-4 py-12">
              <TermsOfService />
            </div>
          </Layout>
        } />
        <Route path="*" element={
          <Layout>
            <NotFound />
          </Layout>
        } />
      </Routes>
    </>
  );
};

export default App;
