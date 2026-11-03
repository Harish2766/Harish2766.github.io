import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { CloseIcon } from "./ui/Icons";

interface ContactFormProps {
  onClose?: () => void;
}

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const RECIPIENT_EMAIL = "skharish2766@gmail.com";

export default function ContactForm({ onClose }: ContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setError("");
    setIsSending(true);

    try {
      if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
        throw new Error("Email service is not configured.");
      }

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: name.trim(),
          from_email: email.trim(),
          message: message.trim(),
          to_email: RECIPIENT_EMAIL,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setName("");
        setEmail("");
        setMessage("");
        onClose?.();
      }, 2500);
    } catch (sendError) {
      console.error("Failed to send contact form message:", sendError);
      setError("Unable to send your message right now. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="relative w-full max-w-xl mx-auto rounded-2xl border border-purple-500/30 bg-[#0D0F1A] p-6 sm:p-8 shadow-2xl shadow-midnight-950/80 text-left transition-all duration-300 animate-fade-up">
      {/* Optional Close Button */}
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-text-muted hover:text-text-primary hover:bg-white/5 transition-colors cursor-pointer"
          aria-label="Close contact form"
        >
          <CloseIcon size={20} />
        </button>
      )}

      {submitted ? (
        <div className="py-10 text-center">
          <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-purple-600/20 border border-purple-500/40 flex items-center justify-center text-purple-400">
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2}>
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <p className="text-lg font-semibold text-text-primary mb-1">
            Message sent!
          </p>
          <p className="text-sm text-text-muted">
            Thanks for reaching out. I&apos;ll get back to you soon.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Field: Your Name */}
          <div>
            <label
              htmlFor="contact-form-name"
              className="block text-sm sm:text-base font-semibold text-text-primary mb-2"
            >
              Your Name
            </label>
            <input
              id="contact-form-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="What's your good name?"
              required
              className="w-full px-4 py-3.5 rounded-xl bg-[#080911] border border-border-dark text-text-primary placeholder:text-text-muted/40 focus:outline-none focus:border-purple-500/80 focus:ring-1 focus:ring-purple-500/50 transition-all text-sm sm:text-base"
            />
          </div>

          {/* Field: Your email */}
          <div>
            <label
              htmlFor="contact-form-email"
              className="block text-sm sm:text-base font-semibold text-text-primary mb-2"
            >
              Your email
            </label>
            <input
              id="contact-form-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="What's your Email address?"
              required
              className="w-full px-4 py-3.5 rounded-xl bg-[#080911] border border-border-dark text-text-primary placeholder:text-text-muted/40 focus:outline-none focus:border-purple-500/80 focus:ring-1 focus:ring-purple-500/50 transition-all text-sm sm:text-base"
            />
          </div>

          {/* Field: Your Message */}
          <div>
            <label
              htmlFor="contact-form-message"
              className="block text-sm sm:text-base font-semibold text-text-primary mb-2"
            >
              Your Message
            </label>
            <textarea
              id="contact-form-message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="What you want to say?"
              required
              className="w-full px-4 py-3.5 rounded-xl bg-[#080911] border border-border-dark text-text-primary placeholder:text-text-muted/40 focus:outline-none focus:border-purple-500/80 focus:ring-1 focus:ring-purple-500/50 transition-all text-sm sm:text-base resize-none"
            />
          </div>

          {/* Send Button — with signature purple gradient color */}
          <div className="pt-2">
            {error && (
              <p className="mb-3 text-sm text-red-400" role="alert">
                {error}
              </p>
            )}
            <button
              type="submit"
              disabled={isSending}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-gradient-purple text-white font-semibold text-sm sm:text-base shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 hover:brightness-110 active:scale-[0.97] transition-all duration-200 cursor-pointer disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSending ? "Sending..." : "Send"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
