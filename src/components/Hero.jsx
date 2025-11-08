import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#eaf2f9] via-white to-white pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-serif tracking-tight text-slate-900">Your Beauty. My Passion.</h1>
            <p className="mt-4 text-lg text-slate-600">Personal, professional beauty treatments in Kloetinge.</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="mailto:sanne.aarts@beautifullybysanne.nl?subject=Appointment%20Request"
                className="inline-flex items-center gap-2 bg-[#2C6EB2] hover:bg-[#215b93] text-white px-5 py-3 rounded-full text-sm font-medium transition-colors"
              >
                Book an Appointment
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#treatments" className="text-[#2C6EB2] font-medium hover:underline">
                Explore treatments
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-xl bg-white shadow-sm p-4 border border-slate-100">
                <p className="font-semibold text-slate-900">Calm & private salon</p>
                <p className="text-slate-600 mt-1">Relaxing space to unwind and feel cared for.</p>
              </div>
              <div className="rounded-xl bg-white shadow-sm p-4 border border-slate-100">
                <p className="font-semibold text-slate-900">Certified specialist</p>
                <p className="text-slate-600 mt-1">More than four years of experience.</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border border-slate-100">
              <img
                src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f4?q=80&w=1400&auto=format&fit=crop"
                alt="Calm beauty treatment in a bright serene room"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 hidden md:block">
              <div className="rounded-2xl bg-white/90 backdrop-blur border border-slate-100 shadow-md p-4 w-52">
                <p className="text-sm text-slate-600">Located in Kloetinge, Zeeland</p>
                <p className="text-slate-900 font-medium mt-1">Martinus Nijhofflaan 27</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
