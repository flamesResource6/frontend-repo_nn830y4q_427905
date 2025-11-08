import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Treatments from "./components/Treatments";
import Testimonials from "./components/Testimonials";
import Booking from "./components/Booking";
import { AboutSnippet, PricingPreview, ContactSection, Footer } from "./components/InfoSections";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Helmet />

      <Navbar />
      <main>
        <Hero />
        <Booking />
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
  const title = "BeautifullyBySanne | Your Beauty. My Passion.";
  const description =
    "Personal, professional beauty treatments in Kloetinge. Calm salon for facials, body treatments, and lash & brow care. Book online with real-time availability.";

  if (typeof document !== "undefined") {
    document.title = title;
    const meta = document.querySelector('meta[name="description"]') || document.createElement("meta");
    meta.setAttribute("name", "description");
    meta.setAttribute("content", description);
    if (!meta.parentElement) document.head.appendChild(meta);
  }
  return null;
}
