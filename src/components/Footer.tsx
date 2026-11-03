import { personal, socialLinks } from "../data/personal";
import {
  GithubIcon,
  LinkedInIcon,
  EmailIcon,
  WhatsAppIcon,
} from "./ui/Icons";
import AnimatedSection from "./ui/AnimatedSection";

const footerSocials = [
  { icon: GithubIcon, href: socialLinks.github, label: "GitHub" },
  { icon: LinkedInIcon, href: socialLinks.linkedin, label: "LinkedIn" },
  { icon: EmailIcon, href: `https://mail.google.com/mail/?view=cm&fs=1&to=${socialLinks.email}`, label: "Email" },
  { icon: WhatsAppIcon, href: socialLinks.whatsapp, label: "WhatsApp" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-border-dark/40 bg-midnight-900">
      {/* Animated top gradient line */}
      <div
        className="absolute top-0 left-0 right-0 h-px footer-gradient-animate"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.3), transparent, rgba(168,85,247,0.2), transparent)",
          backgroundSize: "200% 100%",
        }}
      />

      {/* Subtle purple glow behind footer */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full blur-[100px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(124, 58, 237, 0.05), transparent 60%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-16">
        <AnimatedSection>
          <div className="flex flex-col items-center text-center gap-6">
            {/* Name */}
            <p className="font-heading text-xl font-bold text-text-primary">
              {personal.name}
            </p>

            {/* Tagline */}
            <p className="text-text-muted text-sm max-w-md">
              Building the future, one commit at a time.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {footerSocials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-text-muted hover:text-purple-400 hover:bg-purple-600/10 hover:-translate-y-0.5 hover:scale-[1.08] transition-all duration-250"
                    aria-label={s.label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>

            {/* Divider */}
            <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-border-dark to-transparent" />

            {/* Copyright */}
            <p className="text-text-muted/60 text-xs">
              © 2026 {personal.name}. All rights reserved.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  );
}
