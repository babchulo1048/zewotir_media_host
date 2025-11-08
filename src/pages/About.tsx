import {
  Award,
  Target,
  BookOpen,
  Mic,
  Palette,
  Zap,
  ArrowRight,
  User,
  Lightbulb,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/z-1.jpeg";
import { Helmet } from "react-helmet"; // ✅ SEO meta tag support

const coreValues = [
  {
    icon: Target,
    title: "Strategic Impact",
    description:
      "Focusing on media projects that deliver measurable results, shaping narratives that influence perception and action.",
  },
  {
    icon: BookOpen,
    title: "Cultural Integrity",
    description:
      "Dedicated to authentic, respectful storytelling that reflects Ethiopian values and connects globally.",
  },
  {
    icon: Award,
    title: "Professional Excellence",
    description:
      "Committed to the highest standards in presentation, hosting, and communication delivery.",
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
      {/* ✅ SEO Metadata */}
      <Helmet>
        <title>
          About Zewotir D. Alemu | Ethiopian Media Host & PR Strategist
        </title>
        <meta
          name="description"
          content="Learn more about Zewotir D. Alemu, an Ethiopian PR strategist, media host, and voice artist known for impactful storytelling, media strategy, and professional excellence in Addis Ababa and beyond."
        />
        <meta
          name="keywords"
          content="Ethiopia media host, PR strategist Addis Ababa, voice-over Ethiopia, Amharic MC, Zewotir Alemu, media consultant Ethiopia, communications expert"
        />
        <link rel="canonical" href="https://www.zewotir.com/about" />
        <meta
          property="og:title"
          content="About Zewotir D. Alemu | Media Host & PR Strategist"
        />
        <meta
          property="og:description"
          content="Discover Zewotir D. Alemu’s professional journey in PR, communications, and media strategy, empowering organizations through storytelling and cultural insight."
        />
        <meta property="og:type" content="profile" />
      </Helmet>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4">
            My <span className="text-primary">Professional Journey</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto font-sans">
            A blend of media strategy, captivating voice artistry, and deep
            cultural insight — helping Ethiopian and global organizations
            communicate with clarity and purpose.
          </p>
        </div>

        {/* --- START: Main Content Grid --- */}
        <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto mb-16">
          {/* Profile and Bio Summary */}
          <div className="lg:col-span-1 space-y-8 animate-slide-in">
            <Card className="p-0 overflow-hidden border-secondary/20">
              <img
                src={profileImage}
                alt="Zewotir D. Alemu, Ethiopian Media Host and PR Strategist portrait"
                className="w-full h-auto object-cover border-b-4 border-primary"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-2xl font-serif font-bold text-secondary mb-3">
                  Zewotir Desalegn Alemu
                </h3>
                <p className="text-primary font-semibold text-lg mb-4">
                  Media Strategist | TV Host | Voice Artist
                </p>
                <p className="text-muted-foreground text-base leading-relaxed">
                  With over a decade of experience in Ethiopia’s broadcast
                  industry, Zewotir specializes in shaping media strategies that
                  inspire trust and drive results. His approach blends
                  creativity, cultural awareness, and precise communication to
                  help organizations tell stories that truly resonate.
                </p>
              </div>
            </Card>
          </div>

          {/* Core Values + Expertise */}
          <div
            className="lg:col-span-2 space-y-10 animate-slide-in"
            style={{ animationDelay: "0.2s" }}
          >
            {/* Core Values */}
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

            {/* Expertise */}
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
                <h4 className="text-2xl font-serif font-bold text-primary">
                  Ready for Collaboration?
                </h4>
                <p className="text-secondary-foreground/80">
                  Download my detailed profile for a complete view of my
                  professional achievements and collaborations across Ethiopia’s
                  media landscape.
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

        {/* Journey & Impact */}
        <div className="max-w-7xl mx-auto pt-8 border-t border-gray-200">
          <Card className="p-8 border-primary/20 bg-primary/5">
            <h3 className="text-2xl font-serif font-bold text-primary mb-4 flex items-center">
              <BookOpen className="w-6 h-6 mr-3" />
              My Journey & Impact
            </h3>
            <p className="text-gray-700 text-base mb-6 leading-relaxed italic">
              My career has been defined by the balance between creative
              expression and strategic communication. From my beginnings in
              Ethiopian broadcast media to consulting for organizations seeking
              clarity and authenticity, I’ve learned that impactful messaging is
              the cornerstone of influence and trust.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h4 className="font-bold text-secondary mb-3 text-lg">
                  Key Achievements
                </h4>
                <ul className="list-disc list-inside space-y-2 text-base text-gray-700">
                  <li>
                    <strong>Broadcast Reach:</strong> Hosted leading programs on
                    Ethiopian television reaching national and diaspora
                    audiences.
                  </li>
                  <li>
                    <strong>Strategic PR:</strong> Managed communication
                    strategy for high-profile clients and public campaigns.
                  </li>
                  <li>
                    <strong>High-Profile MC:</strong> Served as master of
                    ceremonies for national events, conferences, and brand
                    launches.
                  </li>
                </ul>
              </div>

              <div className="md:col-span-1 border-l md:pl-8 border-primary/30 mt-4 md:mt-0">
                <h4 className="font-bold text-primary mb-3 flex items-center text-lg">
                  <Lightbulb className="w-5 h-5 mr-2" /> A Personal Note
                </h4>
                <div className="p-4 bg-primary/10 rounded-lg">
                  <p className="text-sm text-gray-800">
                    <strong>Fun Fact:</strong> When I’m not on set or behind the
                    mic, I explore the world through sketching and visual arts —
                    a creative discipline that sharpens my storytelling and
                    design thinking.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
