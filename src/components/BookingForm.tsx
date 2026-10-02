"use client";
import { useMemo, useState } from "react";
import { waLink } from "@/lib/whatsapp";

const field = "min-h-12 w-full rounded-xl border border-white/15 bg-[#07101F] px-3 text-base text-white [color-scheme:dark]";

export default function BookingForm({ services }: { services: string[] }) {
  const [v, setV] = useState({ name: "", service: services[0] ?? "", vehicle: "", date: "", time: "" });
  const [err, setErr] = useState("");
  const set = (k: keyof typeof v) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setV({ ...v, [k]: e.target.value });

  const href = useMemo(() => waLink(
    `Hello DS Car Spa! I would like to book a car wash appointment.\nName: ${v.name}\nService: ${v.service}\nVehicle: ${v.vehicle}\nPreferred date: ${v.date}\nPreferred time: ${v.time}\nPlease confirm availability.`
  ), [v]);

  const check = (e: React.MouseEvent) => {
    if (!v.name.trim() || !v.vehicle.trim() || !v.date || !v.time) {
      e.preventDefault();
      setErr("Please fill in your name, vehicle, date and time.");
    } else setErr("");
  };

  return (
    <div className="grid gap-4 rounded-3xl border border-white/10 bg-[#111A2B]/70 p-5 sm:grid-cols-2 sm:p-8">
      <label className="grid gap-1 text-sm text-[#8E9AAD]">Your name<input className={field} value={v.name} onChange={set("name")} autoComplete="name" /></label>
      <label className="grid gap-1 text-sm text-[#8E9AAD]">Service
        <select className={field} value={v.service} onChange={set("service")}>{services.map((s) => <option key={s}>{s}</option>)}</select>
      </label>
      <label className="grid gap-1 text-sm text-[#8E9AAD] sm:col-span-2">Vehicle (type and model)<input className={field} value={v.vehicle} onChange={set("vehicle")} placeholder="e.g. Hatchback, Swift" /></label>
      <label className="grid gap-1 text-sm text-[#8E9AAD]">Preferred date<input type="date" className={field} value={v.date} onChange={set("date")} /></label>
      <label className="grid gap-1 text-sm text-[#8E9AAD]">Preferred time<input type="time" className={field} value={v.time} onChange={set("time")} /></label>
      <div className="sm:col-span-2">
        <a href={href} onClick={check} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#2F7BFF] px-6 font-semibold text-white hover:bg-[#4a8cff] sm:w-auto">Send booking on WhatsApp</a>
        <p role="alert" className="mt-2 min-h-5 text-sm text-red-300">{err}</p>
      </div>
    </div>
  );
}
