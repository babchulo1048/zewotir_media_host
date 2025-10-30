import { Card } from "@/components/ui/card";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const articles = [
    {
      title: "The Art of Voice-Over: Finding Your Unique Sound",
      excerpt: "Exploring the techniques and practices that help voice-over artists develop their distinctive style and deliver compelling performances.",
      date: "March 15, 2024",
      category: "Voice-Over",
    },
    {
      title: "Behind the Scenes: A Day in TV Production",
      excerpt: "An insider's look at what goes into creating compelling television content, from pre-production to the final broadcast.",
      date: "March 8, 2024",
      category: "Media",
    },
    {
      title: "Mastering Portrait Sketching: Tips for Beginners",
      excerpt: "Essential techniques and approaches for artists looking to improve their portrait sketching skills and capture authentic expressions.",
      date: "February 28, 2024",
      category: "Art",
    },
    {
      title: "Building Confidence on Camera",
      excerpt: "Practical strategies for developing natural on-camera presence and connecting authentically with your audience through the lens.",
      date: "February 20, 2024",
      category: "Media",
    },
  ];

  return (
    <section id="blog" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Latest <span className="text-primary">Articles</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto mb-8"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Insights and thoughts on media, voice-over, and visual arts
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {articles.map((article, index) => (
            <Card
              key={index}
              className="group hover:shadow-glow transition-all cursor-pointer bg-card border-primary/20 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full">
                    {article.category}
                  </span>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    {article.date}
                  </div>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                
                <Button
                  variant="ghost"
                  className="group-hover:text-primary transition-colors p-0 h-auto font-semibold"
                >
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
