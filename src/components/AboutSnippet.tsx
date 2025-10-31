// src/components/About.tsx (ADAPTED FOR HOMEPAGE SNIPPET)

import { Award, Users, Briefcase, Star, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom"; // Assuming you use react-router for navigation

const stats = [
  { icon: Briefcase, value: "10+", label: "Years Experience" },
  { icon: Star, value: "500+", label: "Projects Completed" },
  { icon: Users, value: "50+", label: "Satisfied Clients" },
  { icon: Award, value: "15+", label: "Awards Won" },
];

const AboutSnippet = () => {
  return (
    // Remove the original padding and background to integrate better with surrounding sections
    <section id="about-snippet" className="py-20 md:py-32 bg-brand-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* 1. Concise "About" Snippet */}
          <div className="text-center mb-10 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4">
              A Storyteller{" "}
              <span className="text-primary">In Every Medium</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed mb-8">
              {/* This is the key "concise snippet" */}
              With over a decade of experience, I am a versatile professional
              who creates meaningful connections through strategic communication
              and authentic artistic expression.
            </p>

            {/* 2. Read More CTA (Linking to the full About page) */}
            <Button
              asChild
              variant="secondary" // Using Navy (Secondary) for a professional look
              className="text-lg px-6 py-6"
            >
              <Link to="/about">
                Read My Full Biography
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>

          {/* 3. Stats Grid (Keep this for instant credibility) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card
                  key={index}
                  className="p-6 text-center hover:shadow-glow transition-all bg-card border-secondary/20 animate-fade-in"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <Icon className="w-8 h-8 text-secondary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-secondary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSnippet; // Renamed export for clarity in Index.tsx
