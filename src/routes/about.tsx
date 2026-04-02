import { createFileRoute } from "@tanstack/react-router";
import AnimatedSection from "../components/AnimatedSection";
import { Target, Eye, Lightbulb, Users, Award, Rocket } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — LucenEdge" },
      { name: "description", content: "Learn about LucenEdge — an AI-first technology company building intelligent systems for modern businesses." },
    ],
  }),
});

const timeline = [
  { year: "Foundation", title: "The Spark", desc: "LucenEdge was born from a vision to bridge the gap between AI potential and real-world business needs." },
  { year: "Growth", title: "Building the Core", desc: "Developed our first AI-powered service platforms and established presence in Gujarat." },
  { year: "Expansion", title: "Scaling Intelligence", desc: "Expanded to 11 service lines and opened our second office in Uttarakhand." },
  { year: "Today", title: "Network Intelligence", desc: "Operating as a fully integrated AI-first ecosystem, powering businesses across India." },
];

const values = [
  { icon: Target, title: "Mission-Driven", desc: "Every system we build serves a clear purpose — to make businesses smarter, faster, and more resilient." },
  { icon: Eye, title: "Transparent AI", desc: "We believe in AI that's explainable, auditable, and always supervised by human expertise." },
  { icon: Lightbulb, title: "Innovation First", desc: "We push boundaries daily, exploring new frontiers in AI, automation, and intelligent systems." },
  { icon: Users, title: "Human-Centered", desc: "Technology should amplify human potential, not replace it. Every solution keeps people at the center." },
  { icon: Award, title: "Excellence", desc: "We hold ourselves to the highest standards of quality, reliability, and performance." },
  { icon: Rocket, title: "Agility", desc: "We move fast, adapt quickly, and deliver results that matter — from prototype to production." },
];

function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-accent tracking-wide uppercase mb-3">About Us</p>
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground tracking-tight mb-6">
              The Evolution of<br />Intelligence Systems
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              LucenEdge operates like a network of intelligent systems. Every service is powered by AI 
              but monitored and refined by human experts — a hybrid between a tech lab, 
              command center, and futuristic operating system.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* Timeline */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-foreground text-center mb-16">Our Journey</h2>
        </AnimatedSection>
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-border" />
          {timeline.map((item, i) => (
            <AnimatedSection key={item.year} delay={i * 100}>
              <div className={`relative flex items-center mb-12 last:mb-0 ${i % 2 === 0 ? "justify-start" : "justify-end"}`}>
                <div className={`w-5/12 ${i % 2 === 0 ? "text-right pr-10" : "text-left pl-10"}`}>
                  <span className="text-xs font-bold text-accent tracking-widest uppercase">{item.year}</span>
                  <h3 className="text-xl font-bold text-foreground mt-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{item.desc}</p>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Our Core Values</h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 50}>
                <div className="p-6 rounded-2xl bg-surface-elevated border border-border/50 transition-all duration-300 hover:shadow-elevated">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <v.icon size={20} className="text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
