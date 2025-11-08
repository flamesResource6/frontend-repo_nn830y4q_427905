import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Treatments from "./components/Treatments";
import Testimonials from "./components/Testimonials";
import { AboutSnippet, PricingPreview, ContactSection, Footer } from "./components/InfoSections";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* SEO basics */}
      <Helmet />

      <Navbar />
      <main>
        <Hero />
        <Treatments />
        <AboutSnippet />
        <PricingPreview />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

function Helmet() {
  // Simple meta management for Vite without extra libs
  const title = "BeautifullyBySanne | Your Beauty. My Passion.";
  const description =
    "Personal, professional beauty treatments in Kloetinge. Calm salon for facials, body treatments, and lash & brow care.";

  if (typeof document !== "undefined") {
    document.title = title;
    const meta = document.querySelector('meta[name="description"]') || document.createElement("meta");
    meta.setAttribute("name", "description");
    meta.setAttribute("content", description);
    if (!meta.parentElement) document.head.appendChild(meta);
  }
  return null;
}
