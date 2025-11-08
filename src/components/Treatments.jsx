import { ArrowRight } from "lucide-react";

const categories = [
  {
    name: "Facial Treatments",
    desc: "Deeply cleansing, nourishing facials tailored to your skin.",
    items: [
      { title: "Classic Facial", duration: "60 min", price: "€55" },
      { title: "Hydrating Glow Facial", duration: "75 min", price: "€69" },
      { title: "Purifying Detox Facial", duration: "60 min", price: "€59" },
    ],
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Body Treatments",
    desc: "Relaxing, restorative body treatments for complete care.",
    items: [
      { title: "Back Massage", duration: "30 min", price: "€35" },
      { title: "Full Body Massage", duration: "60 min", price: "€60" },
    ],
    image:
      "https://images.unsplash.com/photo-1599382102387-1248b6ce096d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Lash & Brow",
    desc: "Framing your natural beauty with precision and care.",
    items: [
      { title: "Brow Shaping", duration: "20 min", price: "€15" },
      { title: "Brow Tint", duration: "20 min", price: "€15" },
      { title: "Lash Lift", duration: "45 min", price: "€45" },
    ],
    image:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e69cc?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Treatments() {
  return (
    <section id="treatments" className="py-16 md:py-24 bg-gradient-to-b from-white to-[#f7fafc]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-slate-900">Explore Our Beauty Treatments</h2>
          <p className="mt-3 text-slate-600">
            Professional care for face and body with gentle, effective techniques.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <article key={cat.name} className="rounded-2xl bg-white shadow-sm border border-slate-100 overflow-hidden flex flex-col">
              <img src={cat.image} alt={`${cat.name} example`} className="h-40 w-full object-cover" loading="lazy" />
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold text-slate-900">{cat.name}</h3>
                <p className="text-sm text-slate-600 mt-1">{cat.desc}</p>
                <ul className="mt-4 space-y-2">
                  {cat.items.map((it) => (
                    <li key={it.title} className="flex items-center justify-between text-sm">
                      <span className="text-slate-700">{it.title}</span>
                      <span className="text-slate-500">{it.duration} • {it.price}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5">
                  <a
                    href="mailto:sanne.aarts@beautifullybysanne.nl?subject=Booking%20request"
                    className="inline-flex items-center gap-2 text-[#2C6EB2] hover:text-[#215b93] font-medium"
                  >
                    Book Now <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
