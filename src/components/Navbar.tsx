import { useState, useEffect } from "react";
import { navLinks } from "../data/personal";
import { MenuIcon, CloseIcon, FileTextIcon } from "./ui/Icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track active section
  useEffect(() => {
    const sections = navLinks.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        }
      },
      { threshold: 0.3, rootMargin: "-80px 0px -40% 0px" }
    );
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleNavClick = () => setMobileOpen(false);

  return (
    <header
      className={`nav-enter fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "glass-strong border-b border-purple-600/15 shadow-lg shadow-midnight-900/50"
          : "bg-transparent"
        }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-20 md:h-22 flex items-center justify-end md:justify-center">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2 lg:gap-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative px-5 py-2.5 text-base md:text-lg font-medium tracking-wide transition-colors duration-300 group ${activeSection === link.href
                  ? "text-purple-400"
                  : "text-text-secondary hover:text-purple-400"
                }`}
            >
              {link.label}
              <span
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] rounded-full bg-purple-500 transition-all duration-300 ${activeSection === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
              />
            </a>
          ))}

          {/* Resume Button */}
          <a
            href="/Harish_GS_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-6 lg:ml-8 inline-flex items-center gap-2.5 px-6 py-2.5 text-base md:text-lg font-medium rounded-xl border border-purple-600/40 text-purple-400 hover:bg-purple-600/10 hover:border-purple-500/60 active:scale-[0.97] transition-all duration-250 shadow-sm"
          >
            <FileTextIcon size={18} />
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 top-20 z-40 transition-all duration-300 ${mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-midnight-900/90 backdrop-blur-md" onClick={handleNavClick} />

        {/* Menu Content */}
        <div
          className={`relative bg-midnight-800 border-b border-border-dark transition-transform duration-300 ${mobileOpen ? "translate-y-0" : "-translate-y-4"
            }`}
        >
          <div className="px-6 py-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className={`block px-4 py-3 text-base font-medium rounded-lg transition-all ${activeSection === link.href
                    ? "text-purple-400 bg-purple-600/10"
                    : "text-text-secondary hover:text-text-primary hover:bg-midnight-600/50"
                  }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4">
              <a
                href="/Harish_GS_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 text-base font-medium rounded-lg border border-purple-600/40 text-purple-400 hover:bg-purple-600/10 transition-all"
              >
                <FileTextIcon size={18} />
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
