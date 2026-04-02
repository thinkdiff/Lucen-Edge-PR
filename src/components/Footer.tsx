import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";

const serviceLinks = [
  { label: "OCaaS", to: "/services" },
  { label: "SaaS Solutions", to: "/services" },
  { label: "Infrastructure", to: "/services" },
  { label: "Automation", to: "/services" },
  { label: "AI Agents", to: "/services" },
  { label: "Custom Dev", to: "/services" },
];

const companyLinks = [
  { label: "About", to: "/about" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-2.5">
                <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 overflow-hidden ring-1 ring-white/20 shadow-elevated">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-80 mix-blend-overlay"></div>
                  <span className="relative text-primary-foreground font-black text-xs tracking-wider">LE</span>
                </div>
                <span className="text-xl font-black tracking-tight text-primary-foreground">
                  LUCEN<span className="text-white/60">EDGE</span>
                </span>
              </div>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              AI-first technology company powering intelligent systems for modern businesses.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm tracking-wide uppercase text-primary-foreground/80">Services</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm tracking-wide uppercase text-primary-foreground/80">Company</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm tracking-wide uppercase text-primary-foreground/80">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Mail size={14} className="mt-1 text-primary-foreground/40" />
                <div className="text-sm text-primary-foreground/50">
                  <a href="mailto:hr@headhuntersolutions.com" className="hover:text-primary-foreground transition-colors">hr@headhuntersolutions.com</a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone size={14} className="mt-1 text-primary-foreground/40" />
                <div className="text-sm text-primary-foreground/50 space-y-1">
                  <p>+91-9286469473</p>
                  <p>+91-6354666048</p>
                  <p>+91-9884731607</p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="mt-1 text-primary-foreground/40" />
                <div className="text-sm text-primary-foreground/50 space-y-1">
                  <p>Ahmedabad, Gujarat</p>
                  <p>Uttarakhand</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/40">© 2026 LucenEdge. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
