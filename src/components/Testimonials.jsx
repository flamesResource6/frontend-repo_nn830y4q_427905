import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Emma",
    text:
      "Sanne is wonderful! The salon feels calm and welcoming and my skin has never looked better.",
  },
  {
    name: "Lotte",
    text:
      "Professional and gentle. My lash lift looks amazing and the results last so well!",
  },
  {
    name: "Sophie",
    text:
      "I always leave relaxed and refreshed. Clear communication and great care.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-slate-900">Kind Words</h2>
        <p className="mt-3 text-slate-600">A few experiences from lovely clients.</p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <figure key={i} className="rounded-2xl bg-white border border-slate-100 shadow-sm p-6">
              <div className="flex items-center gap-1 text-[#2C6EB2]">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-[#2C6EB2]" />
                ))}
              </div>
              <blockquote className="mt-3 text-slate-700">“{t.text}”</blockquote>
              <figcaption className="mt-3 text-sm text-slate-500">— {t.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
