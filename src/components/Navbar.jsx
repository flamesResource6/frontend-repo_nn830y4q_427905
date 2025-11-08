import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="h-9 w-9 rounded-full bg-[#2C6EB2] text-white grid place-items-center font-bold">B</div>
          <div>
            <p className="text-lg font-semibold tracking-tight text-slate-900">BeautifullyBySanne</p>
            <p className="text-[11px] text-slate-500 -mt-1">Your Beauty. My Passion.</p>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#treatments" className="text-slate-600 hover:text-slate-900 transition-colors">Treatments</a>
          <a href="#about" className="text-slate-600 hover:text-slate-900 transition-colors">About</a>
          <a href="#pricing" className="text-slate-600 hover:text-slate-900 transition-colors">Pricing</a>
          <a href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors">Contact</a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+31683603082" className="inline-flex items-center gap-2 text-[#2C6EB2] hover:text-[#215b93]">
            <Phone className="h-4 w-4" />
            <span className="text-sm font-medium">+31 6 83603082</span>
          </a>
          <a
            href="mailto:sanne.aarts@beautifullybysanne.nl?subject=Appointment%20Request"
            className="inline-flex items-center gap-2 bg-[#2C6EB2] hover:bg-[#215b93] text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
          >
            Book an Appointment
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <a
            href="mailto:sanne.aarts@beautifullybysanne.nl?subject=Appointment%20Request"
            className="inline-flex items-center gap-2 bg-[#2C6EB2] hover:bg-[#215b93] text-white px-3 py-2 rounded-full text-sm font-medium transition-colors"
          >
            Book
          </a>
        </div>
      </div>

      <div className="md:hidden border-t border-slate-100 bg-white/80">
        <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between text-xs text-slate-600">
          <a href="#treatments">Treatments</a>
          <a href="#about">About</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </header>
  );
}
