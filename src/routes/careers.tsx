import { createFileRoute } from "@tanstack/react-router";
import AnimatedSection from "../components/AnimatedSection";
import { Zap, Globe, Heart, Rocket, Code2, Brain } from "lucide-react";

export const Route = createFileRoute("/careers")({
  component: CareersPage,
  head: () => ({
    meta: [
      { title: "Careers — LucenEdge" },
      { name: "description", content: "Join LucenEdge — an elite tech environment building AI-powered intelligent systems." },
    ],
  }),
});

const perks = [
  { icon: Brain, title: "AI-First Culture", desc: "Work with cutting-edge AI technology every day" },
  { icon: Rocket, title: "Fast Growth", desc: "Accelerate your career in a high-growth environment" },
  { icon: Globe, title: "Remote-Friendly", desc: "Flexible work from our Gujarat or Uttarakhand offices" },
  { icon: Heart, title: "Great Benefits", desc: "Competitive compensation and comprehensive benefits" },
  { icon: Code2, title: "Tech Stack", desc: "Work with the latest tools and technologies" },
  { icon: Zap, title: "Impact", desc: "Your work directly powers intelligent business solutions" },
];

const openings = [
  { role: "Senior AI Engineer", team: "AI Agents", location: "Ahmedabad", type: "Full-time" },
  { role: "Full Stack Developer", team: "Custom Dev", location: "Remote", type: "Full-time" },
  { role: "DevOps Engineer", team: "Infrastructure", location: "Ahmedabad", type: "Full-time" },
  { role: "HR Specialist", team: "HR & Staffing", location: "Uttarakhand", type: "Full-time" },
  { role: "Digital Marketing Lead", team: "AI Marketing", location: "Remote", type: "Full-time" },
];

function CareersPage() {
  return (
    <div className="pt-24 pb-20">
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-accent tracking-wide uppercase mb-3">Careers</p>
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground tracking-tight mb-6">
              Join the Intelligence<br />Network
            </h1>
            <p className="text-lg text-muted-foreground">
              We're building the future of AI-powered business solutions. 
              Join an elite tech environment where your work shapes intelligent systems.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* Perks */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {perks.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 50}>
              <div className="p-6 rounded-2xl bg-surface-elevated border border-border/50 transition-all duration-300 hover:shadow-elevated">
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <p.icon size={20} className="text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Openings */}
      <section className="py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Open Positions</h2>
          </AnimatedSection>
          <div className="space-y-4">
            {openings.map((job, i) => (
              <AnimatedSection key={job.role} delay={i * 50}>
                <div className="p-5 rounded-2xl bg-surface-elevated border border-border/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all hover:shadow-elevated hover:glow-border">
                  <div>
                    <h3 className="font-semibold text-foreground">{job.role}</h3>
                    <p className="text-sm text-muted-foreground">{job.team} · {job.location} · {job.type}</p>
                  </div>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdRFn9-TiumRZyC_ebG1wH41BmaqrI9cM1BWZT6drYSROttJw/viewform?usp=header"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium transition-all hover:opacity-90"
                  >
                    Apply Now
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={300}>
            <p className="text-center text-sm text-muted-foreground mt-10">
              Don't see your role? Send your resume to{" "}
              <a href="mailto:hr@headhuntersolutions.com" className="text-accent hover:underline">
                hr@headhuntersolutions.com
              </a>
            </p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
