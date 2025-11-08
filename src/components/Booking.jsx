import { useEffect, useMemo, useState } from "react";
import { CalendarDays, Clock, ArrowRight } from "lucide-react";

export default function Booking() {
  const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10));
  const [slots, setSlots] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const backend = useMemo(() => {
    // Prefer explicit env, fallback to common dev mapping 3000 -> 8000
    const env = import.meta.env.VITE_BACKEND_URL;
    if (env && typeof env === "string") return env.replace(/\/$/, "");
    const { origin } = window.location;
    try {
      const u = new URL(origin);
      if (u.port === "3000") u.port = "8000";
      return u.toString().replace(/\/$/, "");
    } catch {
      return origin;
    }
  }, []);

  useEffect(() => {
    let active = true;
    async function load() {
      setLoading(true);
      setError("");
      try {
        const url = `${backend}/api/availability?date=${date}`;
        const res = await fetch(url);
        if (!res.ok) throw new Error("Failed to load availability");
        const data = await res.json();
        if (!active) return;
        setSlots(data.slots || []);
      } catch (e) {
        if (!active) return;
        setError("Unable to load availability right now.");
      } finally {
        if (active) setLoading(false);
      }
    }
    load();
    return () => {
      active = false;
    };
  }, [date, backend]);

  const handleBook = (iso) => {
    const d = new Date(iso);
    const formatted = d.toLocaleString("nl-NL", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
    const subject = encodeURIComponent(`Appointment request – ${formatted}`);
    const body = encodeURIComponent(
      `Hi Sanne,%0D%0A%0D%0AI'd like to book the slot on ${formatted}.%0D%0A%0D%0AName:%0D%0APhone (optional):%0D%0ATreatment (optional):%0D%0A%0D%0AThank you!`
    );
    window.location.href = `mailto:sanne.aarts@beautifullybysanne.nl?subject=${subject}&body=${body}`;
  };

  return (
    <section id="booking" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-slate-900">Book an Appointment</h2>
          <p className="mt-3 text-slate-600">Check real-time availability and request your preferred time.</p>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-6 items-start">
          <div className="md:col-span-1">
            <label className="block text-sm text-slate-700 mb-2">Select a date</label>
            <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-sm">
              <CalendarDays className="h-5 w-5 text-[#2C6EB2]" />
              <input
                type="date"
                className="w-full bg-transparent focus:outline-none"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <p className="text-xs text-slate-500 mt-2">Time zone: Europe/Amsterdam</p>
          </div>

          <div className="md:col-span-2">
            <div className="rounded-2xl border border-slate-100 bg-[#f7fafc] p-4 min-h-[200px]">
              {loading && <p className="text-slate-600">Loading available times…</p>}
              {!loading && error && <p className="text-rose-600">{error}</p>}
              {!loading && !error && slots.length === 0 && (
                <p className="text-slate-600">No available times for this date. Please choose another day.</p>
              )}
              {!loading && !error && slots.length > 0 && (
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {slots.map((iso) => {
                    const d = new Date(iso);
                    const label = d.toLocaleTimeString("nl-NL", { hour: "2-digit", minute: "2-digit" });
                    return (
                      <button
                        key={iso}
                        onClick={() => handleBook(iso)}
                        className="group inline-flex items-center justify-between gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm hover:border-[#2C6EB2] hover:text-[#2C6EB2]"
                      >
                        <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4" /> {label}</span>
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
