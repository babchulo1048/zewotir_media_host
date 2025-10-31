// src/components/About.tsx (Full Component)

import {
  Award,
  Target,
  BookOpen,
  Mic,
  Palette,
  Zap,
  ArrowRight,
  User,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/z-1.jpeg"; // Assuming a high-quality, professional full profile image

const coreValues = [
  {
    icon: Target,
    title: "Strategic Impact",
    description:
      "Focusing on media projects that deliver tangible, measurable results and influence.",
  },
  {
    icon: BookOpen,
    title: "Cultural Integrity",
    description:
      "Committed to authentic, respectful representation across all media platforms.",
  },
  {
    icon: Award,
    title: "Professional Excellence",
    description:
      "Maintaining the highest standards in delivery, hosting, and production.",
  },
];

const expertise = [
  "Media Strategy & PR Consulting",
  "Live Event Hosting (MC)",
  "Authoritative Voice-Over",
  "Television & Production",
  "Communication Coaching",
  "Visual Arts & Sketching",
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4">
            My <span className="text-primary">Professional Journey</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto font-sans">
            A blend of media strategy, captivating voice artistry, and deep
            cultural insight.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Column 1: Profile and Bio Summary */}
          <div className="lg:col-span-1 space-y-8 animate-slide-in">
            <Card className="p-0 overflow-hidden border-secondary/20">
              <img
                src={profileImage}
                alt="Zewotir Desalegn Alemu professional media portrait"
                className="w-full h-auto object-cover border-b-4 border-primary"
              />
              <div className="p-6">
                <h3 className="text-2xl font-serif font-bold text-secondary mb-3">
                  Zewotir Desalegn Alemu
                </h3>
                <p className="text-primary font-semibold text-lg mb-4">
                  Media Strategist | TV Host | Voice Artist
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  With over a decade navigating the broadcast landscape, Zewotir
                  specializes in crafting compelling narratives and driving
                  strategic communication across diverse media channels. His
                  work is defined by an authoritative voice and an unwavering
                  commitment to professional integrity.
                </p>
              </div>
            </Card>
          </div>

          {/* Column 2: Key Expertise and Values */}
          <div
            className="lg:col-span-2 space-y-10 animate-slide-in"
            style={{ animationDelay: "0.2s" }}
          >
            {/* Core Values Section */}
            <div>
              <h3 className="text-3xl font-serif font-bold text-secondary mb-6 flex items-center">
                <User className="w-7 h-7 mr-3 text-primary" />
                Core Values
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {coreValues.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <Card
                      key={index}
                      className="p-5 bg-secondary/5 border-secondary/20 text-center hover:shadow-lg transition-shadow"
                    >
                      <Icon className="w-8 h-8 mx-auto text-primary mb-3" />
                      <h4 className="font-semibold text-lg mb-1 text-secondary">
                        {value.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {value.description}
                      </p>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Expertise Section */}
            <div>
              <h3 className="text-3xl font-serif font-bold text-secondary mb-6 flex items-center">
                <Zap className="w-7 h-7 mr-3 text-primary" />
                Key Areas of Expertise
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {expertise.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center text-lg text-secondary"
                  >
                    <ArrowRight className="w-4 h-4 mr-3 text-primary flex-shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Resume CTA */}
            <Card className="p-8 bg-secondary border-0 text-secondary-foreground flex flex-col md:flex-row justify-between items-center mt-10">
              <div className="mb-4 md:mb-0">
                <h4 className="text-2xl font-serif font-bold text-primary-foreground">
                  Ready for Collaboration?
                </h4>
                <p className="text-secondary-foreground/80">
                  Download my detailed profile for a complete view of my career
                  and accomplishments.
                </p>
              </div>
              <Button
                asChild
                variant="default"
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <a href="#contact">Download Full CV</a>
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
