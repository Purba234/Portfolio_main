import { FormEvent, useMemo, useState } from "react";
import emailjs from "@emailjs/browser";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";
import { personalInfo } from "../data/portfolio";

type Status = {
  type: "idle" | "success" | "error";
  message: string;
};

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<Status>({ type: "idle", message: "" });

  const envValues = useMemo(
    () => ({
      serviceId: import.meta.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string | undefined,
      templateId: import.meta.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string | undefined,
      publicKey: import.meta.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string | undefined,
    }),
    []
  );

  const openMailFallback = () => {
    const subject = encodeURIComponent(
      `Portfolio Contact from ${formData.name || "Anonymous"}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSending(true);
    setStatus({ type: "idle", message: "" });

    const canUseEmailJs =
      envValues.serviceId && envValues.templateId && envValues.publicKey;

    if (!canUseEmailJs) {
      openMailFallback();
      setStatus({
        type: "success",
        message:
          "EmailJS keys were not found, so your mail app was opened as a fallback.",
      });
      setSending(false);
      return;
    }

    try {
      await emailjs.send(
        envValues.serviceId,
        envValues.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: personalInfo.name,
        },
        envValues.publicKey
      );

      setStatus({
        type: "success",
        message: "Message sent successfully.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch {
      openMailFallback();
      setStatus({
        type: "error",
        message:
          "EmailJS failed, so your mail app was opened with your message prefilled.",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="px-4 pb-6 md:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Contact Me"
          description="Let us connect and discuss AI, ML, data projects, or collaboration opportunities."
        />

        <div className="grid gap-6 md:grid-cols-[0.95fr_1.05fr]">
          <div className="section-shell premium-ring rounded-3xl p-6 md:p-8">
            <h3 className="headline-font text-xl font-semibold text-text">Get in touch</h3>

            <div className="mt-6 space-y-3 text-sm text-muted">
              <p className="inline-flex items-center gap-2 rounded-xl border border-border px-3 py-2">
                <FiMail size={15} />
                {personalInfo.email}
              </p>
              <p className="inline-flex items-center gap-2 rounded-xl border border-border px-3 py-2">
                <FiPhone size={15} />
                {personalInfo.phone}
              </p>
              <p className="inline-flex items-center gap-2 rounded-xl border border-border px-3 py-2">
                <FiMapPin size={15} />
                {personalInfo.location}
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="section-shell premium-ring rounded-3xl p-6 md:p-8"
          >
            <div className="grid gap-4">
              <label className="grid gap-2 text-sm font-medium text-text">
                Name
                <input
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={(event) =>
                    setFormData((prev) => ({ ...prev, name: event.target.value }))
                  }
                  className="rounded-xl border border-border bg-bg-soft/70 px-4 py-3 text-sm text-text outline-none transition focus:border-accent2"
                />
              </label>

              <label className="grid gap-2 text-sm font-medium text-text">
                Email
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(event) =>
                    setFormData((prev) => ({ ...prev, email: event.target.value }))
                  }
                  className="rounded-xl border border-border bg-bg-soft/70 px-4 py-3 text-sm text-text outline-none transition focus:border-accent2"
                />
              </label>

              <label className="grid gap-2 text-sm font-medium text-text">
                Message
                <textarea
                  required
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={(event) =>
                    setFormData((prev) => ({ ...prev, message: event.target.value }))
                  }
                  className="rounded-xl border border-border bg-bg-soft/70 px-4 py-3 text-sm text-text outline-none transition focus:border-accent2"
                />
              </label>

              <button
                type="submit"
                disabled={sending}
                className="mt-1 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-accent to-accent2 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {sending ? "Sending..." : "Send Message"}
              </button>

              {status.type !== "idle" ? (
                <p
                  className={`text-sm ${
                    status.type === "success" ? "text-green-400" : "text-rose-400"
                  }`}
                >
                  {status.message}
                </p>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
