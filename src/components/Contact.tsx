"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import SectionEyebrow from "./SectionEyebrow";

interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type SubmitState = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({ mode: "onTouched" });

  const [status, setStatus] = useState<SubmitState>("idle");

  const onSubmit = async (data: ContactFormValues) => {
    setStatus("loading");
    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
      if (serviceId && templateId && publicKey) {
        const emailjs = (await import("@emailjs/browser")).default;
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: data.name,
            from_email: data.email,
            subject: data.subject,
            message: data.message,
          },
          { publicKey }
        );
      } else {
        // POST to our server API which sends email via SMTP (configure SMTP_* env vars)
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error("server-error");
      }
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionEyebrow index="06" label="Get In Touch" />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-balance mb-4">
              Let&apos;s build something that works.
            </h2>
            <p className="text-text-muted mb-10 leading-relaxed">
              Have a project, a business problem, or just a technical question?
              I read every message and usually reply within a day.
            </p>

            <ul className="space-y-4 font-mono text-sm">
              <li>
                <a
                  href="mailto:kjado250@gmail.com"
                  data-cursor-hover
                  className="flex items-center gap-3 text-text hover:text-gold transition-colors"
                >
                  <span className="h-9 w-9 rounded-full border border-border flex items-center justify-center shrink-0">
                    <Mail size={14} />
                  </span>
                  kjado250@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+250789759248"
                  data-cursor-hover
                  className="flex items-center gap-3 text-text hover:text-gold transition-colors"
                >
                  <span className="h-9 w-9 rounded-full border border-border flex items-center justify-center shrink-0">
                    <Phone size={14} />
                  </span>
                  +250 789 759 248
                </a>
              </li>
              <li className="flex items-center gap-3 text-text-muted">
                <span className="h-9 w-9 rounded-full border border-border flex items-center justify-center shrink-0">
                  <MapPin size={14} />
                </span>
                Rwanda
              </li>
            </ul>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="lg:col-span-3 rounded-2xl border border-border bg-bg-panel p-6 sm:p-8"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block font-mono text-xs text-text-muted mb-2">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  {...register("name", { required: "Please enter your name." })}
                  className="w-full rounded-lg border border-border bg-bg px-4 py-3 text-sm outline-none focus:border-gold transition-colors"
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p id="name-error" className="mt-1.5 text-xs text-ember">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block font-mono text-xs text-text-muted mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  {...register("email", {
                    required: "Please enter your email.",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email address.",
                    },
                  })}
                  className="w-full rounded-lg border border-border bg-bg px-4 py-3 text-sm outline-none focus:border-gold transition-colors"
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p id="email-error" className="mt-1.5 text-xs text-ember">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="subject" className="block font-mono text-xs text-text-muted mb-2">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                aria-invalid={!!errors.subject}
                aria-describedby={errors.subject ? "subject-error" : undefined}
                {...register("subject", { required: "Please add a subject." })}
                className="w-full rounded-lg border border-border bg-bg px-4 py-3 text-sm outline-none focus:border-gold transition-colors"
                placeholder="What's this about?"
              />
              {errors.subject && (
                <p id="subject-error" className="mt-1.5 text-xs text-ember">
                  {errors.subject.message}
                </p>
              )}
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="block font-mono text-xs text-text-muted mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
                {...register("message", {
                  required: "Please write a message.",
                  minLength: { value: 20, message: "Message should be at least 20 characters." },
                })}
                className="w-full rounded-lg border border-border bg-bg px-4 py-3 text-sm outline-none focus:border-gold transition-colors resize-none"
                placeholder="Tell me a bit about the project..."
              />
              {errors.message && (
                <p id="message-error" className="mt-1.5 text-xs text-ember">
                  {errors.message.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              data-cursor-hover
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-medium text-ink-0 hover:bg-gold-soft transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <Send size={15} />
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            <div aria-live="polite" className="mt-4">
              {status === "success" && (
                <p className="flex items-center gap-2 text-sm text-green-500">
                  <CheckCircle2 size={16} /> Message sent, thank you! I&apos;ll
                  get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="flex items-center gap-2 text-sm text-ember">
                  <AlertCircle size={16} /> Something went wrong. Please email
                  me directly at kjado250@gmail.com.
                </p>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
