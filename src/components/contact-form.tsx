"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function ContactForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResponseMessage(null);

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    try {
      const result = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await result.json();

      if (!result.ok) {
        setResponseMessage(data?.error ?? "Could not send your enquiry.");
      } else {
        router.push("/contact/thank-you");
      }
    } catch (error) {
      setResponseMessage("A network error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      {responseMessage ? (
        <div className="rounded-3xl bg-rose-50 p-4 text-sm text-rose-700 shadow-sm">
          {responseMessage}
        </div>
      ) : null}
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2 text-sm text-slate-700">
          <span>Name</span>
          <input
            type="text"
            name="name"
            required
            className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-400 focus:ring-4 focus:ring-slate-100"
          />
        </label>
        <label className="space-y-2 text-sm text-slate-700">
          <span>Email</span>
          <input
            type="email"
            name="email"
            required
            className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-400 focus:ring-4 focus:ring-slate-100"
          />
        </label>
      </div>

      <label className="space-y-2 text-sm text-slate-700">
        <span>Phone</span>
        <input
          type="tel"
          name="phone"
          className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-400 focus:ring-4 focus:ring-slate-100"
        />
      </label>

      <label className="space-y-2 text-sm text-slate-700">
        <span>Project brief</span>
        <textarea
          name="message"
          rows={5}
          required
          className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-400 focus:ring-4 focus:ring-slate-100"
        />
      </label>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center rounded-3xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-700"
      >
        {isSubmitting ? "Sending enquiry…" : "Send enquiry"}
      </button>
    </form>
  );
}
