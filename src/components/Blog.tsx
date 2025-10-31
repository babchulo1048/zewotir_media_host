// src/components/Blog.tsx (UPDATED)

import { Card } from "@/components/ui/card";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button"; // Button component

const Blog = () => {
  const articles = [
    {
      title: "The Art of Voice-Over: Finding Your Unique Sound",
      excerpt:
        "Exploring the techniques and practices that help voice-over artists develop their distinctive style and deliver compelling performances.",
      date: "March 15, 2024",
      category: "Voice-Over",
    },
    {
      title: "Behind the Scenes: A Day in TV Production",
      excerpt:
        "An insider's look at what goes into creating compelling television content, from pre-production to the final broadcast.",
      date: "Mastering Portrait Sketching: Tips for Beginners",
      category: "Media",
    },
    {
      title: "Mastering Portrait Sketching: Tips for Beginners",
      excerpt:
        "Essential techniques and approaches for artists looking to improve their portrait sketching skills and capture authentic expressions.",
      date: "February 28, 2024",
      category: "Art",
    },
    {
      title: "Building Confidence on Camera",
      excerpt:
        "Practical strategies for developing natural on-camera presence and connecting authentically with your audience through the lens.",
      date: "February 20, 2024",
      category: "PR Strategy", // Adjusted category for strategic keywords
    },
  ];

  return (
    // Use secondary/10 for a professional, light background contrast
    <section id="blog" className="py-20 md:py-32 bg-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          {/* Applied font-serif for section title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4">
            Latest <span className="text-primary">Insights & Articles</span>
          </h2>
          {/* Used Primary color for the separator */}
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-sans">
            Reflections on PR strategy, media, communication, and professional
            growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {" "}
          {/* Increased gap for cleaner look */}
          {articles.map((article, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all cursor-pointer bg-card border-secondary/20 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between mb-4">
                  {/* Category Tag: Use Secondary color as background, Primary text accent */}
                  <span className="inline-block px-3 py-1 text-xs font-bold bg-secondary text-primary rounded-full uppercase tracking-wider">
                    {article.category}
                  </span>
                  <div className="flex items-center text-sm text-secondary/70">
                    <Calendar className="w-4 h-4 mr-2" />
                    {article.date}
                  </div>
                </div>

                {/* Applied font-serif for article titles */}
                <h3 className="text-xl sm:text-2xl font-serif font-bold mb-3 group-hover:text-secondary transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Refined CTA Button: Using fixed 'default' variant (Gold) for strong action */}
                <Button
                  variant="default"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-4 py-2 mt-2"
                >
                  Read Article
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <a
            href="/blog"
            className="text-secondary font-semibold hover:text-primary transition-colors flex items-center justify-center text-lg"
          >
            View All Insights
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
