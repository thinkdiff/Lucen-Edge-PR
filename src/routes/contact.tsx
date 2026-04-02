import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import AnimatedSection from "../components/AnimatedSection";
import { Mail, Phone, MapPin, Send, Terminal, Loader2 } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — LucenEdge" },
      { name: "description", content: "Get in touch with LucenEdge. Offices in Ahmedabad, Gujarat and Uttarakhand." },
    ],
  }),
});

function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "", type: "company" });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formBody = new FormData();
      formBody.append("Type", formData.type === "company" ? "Company" : "Candidate");
      formBody.append("Name", formData.name);
      formBody.append("Email", formData.email);
      formBody.append("Company", formData.company);
      formBody.append("Message", formData.message);

      const scriptUrl = import.meta.env.VITE_GOOGLE_SHEET_WEB_APP_URL || "https://script.google.com/macros/s/AKfycbyHBc7CfUdoNRHewQBE1ofdg9gDcN68Uj8s0bQNiZO6jzVUlYEXjMTZrC0mmb2MhReb/exec";
      
      await fetch(scriptUrl, {
        method: "POST",
        mode: "no-cors",
        body: formBody,
      });

      // Google Apps Script returns an opaque response (CORS), so we cannot read response.json()
      // If the fetch doesn't throw a network error, we assume success.
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", company: "", message: "", type: "company" });
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 pb-20">
      <section className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              <Terminal size={14} />
              Secure Communication Channel
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground tracking-tight mb-4">
              Initialize Contact
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Enter our secure system terminal. We'll respond within 24 hours.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
          <AnimatedSection className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="p-8 rounded-3xl bg-surface-elevated border border-border/50 glow-border space-y-5">
              <div className="flex gap-3 mb-6">
                {["company", "candidate"].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setFormData({ ...formData, type })}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      formData.type === type
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {type === "company" ? "Company" : "Candidate"}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/30 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/30 transition-all"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">Company</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/30 transition-all"
                  placeholder="Company name"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/30 transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-primary text-primary-foreground font-semibold transition-all hover:opacity-90 glow-border disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Transmitting...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Transmit Message
                  </>
                )}
              </button>
            </form>
          </AnimatedSection>

          <AnimatedSection delay={200} className="lg:col-span-2 space-y-6">
            <div className="p-6 rounded-2xl bg-surface-elevated border border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Mail size={18} className="text-accent" />
                </div>
                <h3 className="font-semibold text-foreground">Email</h3>
              </div>
              <a href="mailto:hr@headhuntersolutions.com" className="text-sm text-accent hover:underline">hr@headhuntersolutions.com</a>
            </div>

            <div className="p-6 rounded-2xl bg-surface-elevated border border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Phone size={18} className="text-accent" />
                </div>
                <h3 className="font-semibold text-foreground">Phone</h3>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>+91-9286469473</p>
                <p>+91-6354666048</p>
                <p>+91-9884731607</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-surface-elevated border border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <MapPin size={18} className="text-accent" />
                </div>
                <h3 className="font-semibold text-foreground">Offices</h3>
              </div>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div>
                  <p className="font-medium text-foreground">Ahmedabad</p>
                  <p>Gujarat, India</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Uttarakhand</p>
                  <p>India</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
