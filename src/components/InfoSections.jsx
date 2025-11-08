export function AboutSnippet() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-slate-900">About Sanne</h2>
          <p className="mt-4 text-slate-700">
            Hi, I’m Sanne. I am a certified beauty specialist with more than four years of experience.
            My salon offers a calm space where you can unwind, feel cared for and leave looking your best.
            Every treatment is tailored to your needs with gentle products and precise techniques.
          </p>
          <div className="mt-6">
            <a
              href="mailto:sanne.aarts@beautifullybysanne.nl?subject=Appointment%20Request"
              className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-[#2C6EB2] text-white text-sm font-medium hover:bg-[#215b93]"
            >
              Let’s meet
            </a>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1544168190-79c17527004f?q=80&w=1200&auto=format&fit=crop"
              alt="Sanne smiling in the salon"
              className="rounded-xl object-cover h-56 w-full"
              loading="lazy"
            />
            <img
              src="https://images.unsplash.com/photo-1616394584738-fc6e612e69cc?q=80&w=1200&auto=format&fit=crop"
              alt="Cozy treatment room details"
              className="rounded-xl object-cover h-56 w-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function PricingPreview() {
  const list = [
    { name: "Classic Facial", price: "€55" },
    { name: "Lash Lift", price: "€45" },
    { name: "Brow Shaping", price: "€15" },
  ];
  return (
    <section id="pricing" className="py-16 md:py-24 bg-[#f7fafc]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-slate-900">Prices</h2>
        <p className="mt-3 text-slate-600">Transparent and fair pricing for every treatment.</p>

        <div className="mt-8 grid md:grid-cols-2 gap-4">
          {list.map((item) => (
            <div key={item.name} className="flex items-center justify-between rounded-xl bg-white p-4 border border-slate-100 shadow-sm">
              <span className="text-slate-800">{item.name}</span>
              <span className="text-slate-600">{item.price}</span>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <a
            href="mailto:sanne.aarts@beautifullybysanne.nl?subject=Appointment%20Request"
            className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-[#2C6EB2] text-white text-sm font-medium hover:bg-[#215b93]"
          >
            Book Your Treatment
          </a>
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-slate-900">Get in Touch</h2>
          <p className="mt-3 text-slate-600">I’d love to help you choose the right treatment.</p>

          <div className="mt-6 space-y-2 text-slate-700 text-sm">
            <p><span className="font-medium">Address:</span> Martinus Nijhofflaan 27, 4481 DH Kloetinge</p>
            <p><span className="font-medium">Phone:</span> <a href="tel:+31683603082" className="text-[#2C6EB2] hover:underline">+31 6 83603082</a></p>
            <p><span className="font-medium">Email:</span> <a href="mailto:sanne.aarts@beautifullybysanne.nl" className="text-[#2C6EB2] hover:underline">sanne.aarts@beautifullybysanne.nl</a></p>
            <p><span className="font-medium">KVK:</span> 95051651</p>
          </div>

          <div className="mt-6 rounded-xl overflow-hidden border border-slate-100 shadow-sm">
            <iframe
              title="Map of Kloetinge"
              src="https://www.google.com/maps?q=Martinus%20Nijhofflaan%2027%2C%204481%20DH%20Kloetinge&output=embed"
              className="w-full h-64"
              loading="lazy"
            />
          </div>
        </div>

        <form
          action="https://formsubmit.co/sanne.aarts@beautifullybysanne.nl"
          method="POST"
          className="rounded-2xl bg-white border border-slate-100 shadow-sm p-6"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="New website message" />
          <input type="hidden" name="_next" value="/" />

          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm text-slate-700 mb-1">Name</label>
              <input name="name" required className="w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2C6EB2]" />
            </div>
            <div>
              <label className="block text-sm text-slate-700 mb-1">Email</label>
              <input type="email" name="email" required className="w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2C6EB2]" />
            </div>
            <div>
              <label className="block text-sm text-slate-700 mb-1">Phone (optional)</label>
              <input name="phone" className="w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2C6EB2]" />
            </div>
            <div>
              <label className="block text-sm text-slate-700 mb-1">Message</label>
              <textarea name="message" rows="5" required className="w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2C6EB2]"></textarea>
            </div>
            <button type="submit" className="mt-2 inline-flex items-center justify-center px-5 py-3 rounded-full bg-[#2C6EB2] text-white text-sm font-medium hover:bg-[#215b93]">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-6 items-start">
        <div>
          <p className="font-semibold text-slate-900">BeautifullyBySanne</p>
          <p className="text-xs text-slate-500">Your Beauty. My Passion.</p>
          <p className="text-sm text-slate-600 mt-3">Martinus Nijhofflaan 27, 4481 DH Kloetinge</p>
          <p className="text-sm text-slate-600">KVK: 95051651</p>
        </div>
        <div className="text-sm text-slate-600">
          <p>
            Phone: <a href="tel:+31683603082" className="text-[#2C6EB2] hover:underline">+31 6 83603082</a>
          </p>
          <p>
            Email: <a href="mailto:sanne.aarts@beautifullybysanne.nl" className="text-[#2C6EB2] hover:underline">sanne.aarts@beautifullybysanne.nl</a>
          </p>
        </div>
        <div className="text-sm text-slate-500 md:text-right">© 2025 BeautifullyBySanne – All rights reserved.</div>
      </div>
    </footer>
  );
}
