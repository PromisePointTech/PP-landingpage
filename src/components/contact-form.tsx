"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, CircleCheck } from "lucide-react";
import { site } from "@/content/site";

const inputClass =
  "w-full rounded-full border-[1.5px] border-[#e0d7c0] bg-white px-[18px] py-3.5 text-[14.5px] text-ink transition duration-200 placeholder:text-stone-soft hover:border-sand-strong focus:border-leaf focus:ring-4 focus:ring-leaf/10 focus-visible:outline-none";

function Field({
  label,
  name,
  type = "text",
  required = false,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[13px] font-bold">
        {label}
        {!required && <span className="font-medium text-stone"> (optional)</span>}
      </span>
      <input name={name} type={type} required={required} autoComplete={autoComplete} className={inputClass} />
    </label>
  );
}

/**
 * There is no mail backend behind this site, so rather than pretend to send,
 * the form opens the visitor's email app with the message already written.
 */
export function ContactForm() {
  const [composed, setComposed] = useState(false);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const value = (key: string) => String(data.get(key) ?? "").trim();

    const name = [value("firstName"), value("lastName")].filter(Boolean).join(" ");
    const organisation = value("organisation");
    const subject = `Website enquiry from ${name}${organisation ? ` (${organisation})` : ""}`;
    const body = `${value("message")}\n\n— ${name}${organisation ? `, ${organisation}` : ""}\n${value("email")}`;

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setComposed(true);
  }

  return (
    <form onSubmit={onSubmit} className="rounded-[32px] bg-cream p-6 sm:p-9">
      <div className="mb-3.5 grid gap-3.5 sm:grid-cols-2">
        <Field label="First name" name="firstName" required autoComplete="given-name" />
        <Field label="Last name" name="lastName" autoComplete="family-name" />
      </div>
      <div className="mb-3.5">
        <Field label="Organisation" name="organisation" autoComplete="organization" />
      </div>
      <div className="mb-3.5">
        <Field label="Email address" name="email" type="email" required autoComplete="email" />
      </div>
      <label className="mb-[22px] block">
        <span className="mb-2 block text-[13px] font-bold">How can we help you?</span>
        <textarea
          name="message"
          rows={4}
          required
          minLength={10}
          className={`${inputClass} resize-y rounded-3xl px-5 py-[15px]`}
        />
      </label>
      <motion.button
        type="submit"
        whileTap={{ scale: 0.98 }}
        className="group flex w-full items-center justify-center gap-2 rounded-full bg-leaf py-4 font-display text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-leaf-deep"
      >
        Send message
        <ArrowRight aria-hidden className="size-4 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={2.5} />
      </motion.button>

      <AnimatePresence>
        {composed && (
          <motion.p
            role="status"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-4 flex gap-2.5 rounded-2xl bg-mint px-4 py-3 text-sm leading-relaxed text-leaf-deep"
          >
            <CircleCheck aria-hidden className="mt-0.5 size-4 flex-none text-leaf" />
            <span>
              Your email app should now open with your message ready to send. If it didn&rsquo;t, write to{" "}
              <a href={`mailto:${site.email}`} className="font-semibold underline underline-offset-2">
                {site.email}
              </a>
              .
            </span>
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}
