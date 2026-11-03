import { useState, useRef } from "react";
import { socialLinks } from "../data/personal";
import {
  GithubIcon,
  LinkedInIcon,
  EmailIcon,
  WhatsAppIcon,
} from "./ui/Icons";
import AnimatedSection from "./ui/AnimatedSection";
import ContactForm from "./ContactForm";

const contactLinks = [
  {
    name: "LinkedIn",
    icon: LinkedInIcon,
    href: socialLinks.linkedin,
    color: "hover:text-[#0A66C2] hover:border-[#0A66C2]/30 hover:shadow-[0_0_25px_rgba(10,102,194,0.1)]",
  },
  {
    name: "Email",
    icon: EmailIcon,
    href: `https://mail.google.com/mail/?view=cm&fs=1&to=${socialLinks.email}`,
    color: "hover:text-[#EA4335] hover:border-[#EA4335]/30 hover:shadow-[0_0_25px_rgba(234,67,53,0.1)]",
  },
  {
    name: "WhatsApp",
    icon: WhatsAppIcon,
    href: socialLinks.whatsapp,
    color: "hover:text-[#25D366] hover:border-[#25D366]/30 hover:shadow-[0_0_25px_rgba(37,211,102,0.1)]",
  },
  {
    name: "GitHub",
    icon: GithubIcon,
    href: socialLinks.github,
    color: "hover:text-text-primary hover:border-text-primary/20 hover:shadow-[0_0_25px_rgba(248,250,252,0.06)]",
  },
];

export default function Contact() {
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const toggleForm = () => {
    setShowForm((prev) => {
      const next = !prev;
      if (next) {
        setTimeout(() => {
          formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 100);
      }
      return next;
    });
  };

  return (
    <section id="contact" className="relative py-20 md:py-28 scroll-mt-20">
      {/* Background glowing orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(124, 58, 237, 0.08), transparent 60%)" }}
      />

      <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <AnimatedSection>
          {/* Heading */}
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Let's Build Something{" "}
            <span className="text-gradient-purple">Great</span>
          </h2>

          {/* Animated purple accent line */}
          <div className="flex items-center justify-center gap-2 mb-12">
            <span className="h-px bg-gradient-to-r from-transparent to-purple-600/60 accent-line-animate is-visible" />
            <span className="h-1.5 w-1.5 rounded-full bg-purple-600 shadow-[0_0_8px_rgba(124,58,237,0.6)] accent-dot-animate is-visible" />
            <span className="h-px bg-gradient-to-l from-transparent to-purple-600/60 accent-line-animate is-visible" />
          </div>
        </AnimatedSection>

        {/* Social Icons — staggered */}
        <div className="flex justify-center gap-4 md:gap-6 mb-12">
          {contactLinks.map((link, i) => {
            const Icon = link.icon;
            return (
              <AnimatedSection key={link.name} delay={100 + i * 60}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group w-14 h-14 md:w-16 md:h-16 rounded-xl border border-border-dark bg-midnight-800/50 flex items-center justify-center text-text-muted transition-all duration-250 hover:-translate-y-1 hover:scale-[1.08] ${link.color}`}
                  aria-label={link.name}
                >
                  <Icon size={24} className="transition-colors" />
                </a>
              </AnimatedSection>
            );
          })}
        </div>

        {/* CTA Button — reveals contact form directly below */}
        <AnimatedSection delay={350}>
          <div className="contact-cta-enter inline-block mb-4">
            <button
              onClick={toggleForm}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-purple text-white font-semibold text-base shadow-lg shadow-purple-600/20 hover:shadow-purple-600/40 hover:scale-[1.03] hover:brightness-110 active:scale-[0.97] transition-all duration-250 cursor-pointer"
            >
              Get In Touch
            </button>
          </div>
        </AnimatedSection>

        {/* Contact Form — appears below Get In Touch button */}
        {showForm && (
          <div ref={formRef} className="pt-4 pb-2">
            <ContactForm onClose={() => setShowForm(false)} />
          </div>
        )}
      </div>
    </section>
  );
}
