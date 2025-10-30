import { Award, Users, Briefcase, Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const stats = [
    { icon: Briefcase, value: "10+", label: "Years Experience" },
    { icon: Star, value: "500+", label: "Projects Completed" },
    { icon: Users, value: "50+", label: "Satisfied Clients" },
    { icon: Award, value: "15+", label: "Awards Won" },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-primary">Mr. Zik</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-accent mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6 animate-slide-in">
              <h3 className="text-2xl font-semibold text-primary">Professional Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                With over a decade of experience in the media industry, I have established myself 
                as a versatile professional capable of engaging audiences through multiple creative mediums. 
                My career spans television hosting, voice-over work, and visual arts, allowing me to bring 
                a unique perspective to every project.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                As a TV host, I have led numerous successful programs, bringing energy and authenticity 
                to every broadcast. My voice-over work has brought life to countless commercials, 
                documentaries, and corporate presentations, while my sketch artistry adds another 
                dimension to my creative portfolio.
              </p>
            </div>

            <div className="space-y-6 animate-slide-in" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-2xl font-semibold text-primary">Mission & Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                My mission is to create meaningful connections through storytelling, whether through 
                the camera lens, behind the microphone, or with pencil and paper. I believe in the 
                power of authentic communication and artistic expression to inspire, inform, and entertain.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I strive to bring professionalism, creativity, and passion to every project, ensuring 
                that each piece of work not only meets but exceeds expectations. My diverse skill set 
                allows me to approach challenges from multiple angles, delivering innovative solutions 
                that resonate with audiences.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card
                  key={index}
                  className="p-6 text-center hover:shadow-glow transition-all bg-card border-primary/20 animate-fade-in"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
