import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Zap, Globe, Shield, ChevronRight } from "lucide-react";
import { services } from "../data/services";
import AnimatedSection from "../components/AnimatedSection";

const HeroScene = lazy(() => import("../components/three/HeroScene"));

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "LucenEdge — AI-First Technology Company" },
      { name: "description", content: "LucenEdge powers intelligent systems for modern businesses. AI-first solutions spanning SaaS, infrastructure, automation, and custom development." },
    ],
  }),
});

function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <Suspense fallback={<div className="absolute inset-0 bg-background" />}>
          <HeroScene />
        </Suspense>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 text-sm font-medium text-muted-foreground">
              <Zap size={14} className="text-accent" />
              AI-First Technology Platform
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-6">
              <span className="text-foreground">Intelligent</span>
              <br />
              <span className="text-gradient-primary">Systems.</span>
              <br />
              <span className="text-foreground">Real</span>{" "}
              <span className="text-gradient-cyber">Impact.</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              We build AI-powered solutions monitored and refined by human experts. 
              A hybrid between a tech lab, command center, and futuristic operating system.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-base transition-all duration-300 hover:opacity-90 glow-border"
              >
                Explore Services <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl glass font-semibold text-base text-foreground transition-all duration-300 hover:bg-secondary"
              >
                Get in Touch
              </Link>
            </div>
          </AnimatedSection>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-float">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1.5">
            <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <AnimatedSection>
        <section className="py-12 border-y border-border/50">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "11+", label: "Service Lines" },
              { value: "AI", label: "Powered Core" },
              { value: "24/7", label: "Monitoring" },
              { value: "2", label: "Office Locations" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-gradient-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* Services Grid */}
      <section className="py-24 sm:py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-accent tracking-wide uppercase mb-3">Our Ecosystem</p>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
                11 Intelligent Service Lines
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Every service is powered by AI but monitored and refined by human experts.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <AnimatedSection key={service.id} delay={i * 50}>
                <Link
                  to="/services"
                  className="group block p-6 rounded-2xl bg-surface-elevated border border-border/50 transition-all duration-500 hover:shadow-elevated hover:glow-border hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
                    <service.icon size={22} className="text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{service.description}</p>
                  <div className="mt-4 inline-flex items-center text-sm font-medium text-accent gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ChevronRight size={14} />
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why LucenEdge */}
      <section className="py-24 sm:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div>
                <p className="text-sm font-semibold text-accent tracking-wide uppercase mb-3">Why LucenEdge</p>
                <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight mb-6">
                  A Network of<br />Intelligent Systems
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Every solution we build operates like a living system — continuously learning, 
                  adapting, and optimizing. AI handles the heavy lifting while human experts 
                  ensure quality and strategic direction.
                </p>
                <div className="space-y-4">
                  {[
                    { icon: Zap, text: "AI-powered automation across all services" },
                    { icon: Globe, text: "Multi-location presence in Gujarat & Uttarakhand" },
                    { icon: Shield, text: "Enterprise-grade compliance & security" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                        <item.icon size={16} className="text-accent" />
                      </div>
                      <span className="text-sm text-foreground">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="relative">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-secondary to-background p-8 glow-border">
                  <div className="w-full h-full rounded-2xl bg-surface-elevated shadow-elevated flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto rounded-2xl bg-primary flex items-center justify-center mb-4">
                        <span className="text-3xl font-bold text-primary-foreground">LE</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Intelligent by design</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight mb-6">
              Ready to Build the Future?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Partner with LucenEdge to transform your business with AI-powered solutions 
              that scale, adapt, and deliver real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-base transition-all duration-300 hover:opacity-90 glow-border"
              >
                Start a Project <ArrowRight size={18} />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-border bg-surface-elevated font-semibold text-base text-foreground transition-all duration-300 hover:bg-secondary"
              >
                Learn About Us
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
