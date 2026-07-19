"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Something went wrong");
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Could not send message.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
          <Icon name="check-circle" size={24} />
        </span>
        <h3 className="mt-4 text-lg font-semibold text-navy-950">
          Message sent — thank you.
        </h3>
        <p className="mt-2 text-sm text-ink-600">
          We'll get back to you within one business day. For anything urgent,
          please email directly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-5 text-sm font-medium text-navy-700 underline-offset-2 hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" required autoComplete="name" />
        <Field
          label="Email"
          name="email"
          type="email"
          required
          autoComplete="email"
        />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Company" name="company" autoComplete="organization" />
        <Field
          label="Role"
          name="role"
          autoComplete="organization-title"
          placeholder="e.g. Founder, CEO, COO"
        />
      </div>

      <div>
        <label
          htmlFor="budget"
          className="block text-sm font-medium text-navy-900"
        >
          What's on your mind?
        </label>
        <select
          id="budget"
          name="topic"
          className="mt-1.5 block w-full rounded-md border border-ink-200 bg-white px-3 py-2.5 text-sm text-ink-900 shadow-sm transition-colors focus:border-navy-500 focus:outline-none focus:ring-2 focus:ring-navy-500/20"
          defaultValue="Growth strategy"
        >
          <option>Growth strategy</option>
          <option>Operations / efficiency</option>
          <option>Financial planning / fundraising</option>
          <option>Go-to-market</option>
          <option>Leadership advisory</option>
          <option>Something else</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-navy-900">
          Message <span className="text-ink-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us a bit about your business and what you're trying to solve…"
          className="mt-1.5 block w-full rounded-md border border-ink-200 bg-white px-3 py-2.5 text-sm text-ink-900 shadow-sm transition-colors placeholder:text-ink-400 focus:border-navy-500 focus:outline-none focus:ring-2 focus:ring-navy-500/20"
        />
      </div>

      {/* Honeypot — hidden anti-spam field */}
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      {status === "error" && (
        <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">
          {errorMsg}
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        variant="primary"
        className="w-full sm:w-auto"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
        {status !== "submitting" && <Icon name="arrow-right" size={18} />}
      </Button>
      <p className="text-xs text-ink-500">
        We respect your privacy. Your details are only used to reply to your
        inquiry.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-navy-900">
        {label} {required && <span className="text-ink-400">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="mt-1.5 block w-full rounded-md border border-ink-200 bg-white px-3 py-2.5 text-sm text-ink-900 shadow-sm transition-colors placeholder:text-ink-400 focus:border-navy-500 focus:outline-none focus:ring-2 focus:ring-navy-500/20"
      />
    </div>
  );
}
