import { createFileRoute } from "@tanstack/react-router";
import { services } from "../data/services";
import AnimatedSection from "../components/AnimatedSection";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services — LucenEdge" },
      { name: "description", content: "Explore LucenEdge's 11 intelligent service lines spanning AI, SaaS, infrastructure, automation, and more." },
    ],
  }),
});

function ServicesPage() {
  return (
    <div className="pt-24 pb-20">
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <AnimatedSection>
          <div className="text-center">
            <p className="text-sm font-semibold text-accent tracking-wide uppercase mb-3">Services</p>
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground tracking-tight mb-4">
              Our Intelligent<br />Service Ecosystem
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              11 interconnected service lines, each powered by AI and refined by human expertise.
            </p>
          </div>
        </AnimatedSection>
      </section>

      <section className="max-w-7xl mx-auto px-6 space-y-20">
        {services.map((service, i) => (
          <AnimatedSection key={service.id} delay={50}>
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}>
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-semibold mb-4">
                  <service.icon size={14} />
                  {service.theme}
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">
                  {service.title}
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-3 text-sm text-foreground">
                      <CheckCircle2 size={16} className="text-accent shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-secondary via-background to-secondary/50 border border-border/50 glow-border flex items-center justify-center">
                  <div className="text-center">
                    <service.icon size={64} className="text-accent/30 mx-auto mb-3" strokeWidth={1} />
                    <p className="text-xs text-muted-foreground">{service.visual}</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </section>
    </div>
  );
}
