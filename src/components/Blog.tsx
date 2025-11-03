// src/components/Blog.tsx
import { Card } from "@/components/ui/card";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import sketch1 from "@/assets/sketch-1.jpg"; // ✅ added

const Blog = () => {
  const navigate = useNavigate();

  const articles = [
    {
      id: 1,
      title: "The Art of Voice-Over: Finding Your Unique Sound",
      excerpt:
        "Exploring the techniques and practices that help voice-over artists develop their distinctive style and deliver compelling performances.",
      date: "March 15, 2024",
      category: "Voice-Over",
      image: sketch1, // ✅ added
      content: `
        Voice-over artistry is more than reading lines; it's about conveying emotion, tone, and authenticity.
        Finding your unique sound starts with understanding your natural voice and practicing modulation,
        pacing, and clarity. Successful voice-over artists blend technique with personal style to create
        memorable performances that resonate with listeners.
      `,
    },
    {
      id: 2,
      title: "Behind the Scenes: A Day in TV Production",
      excerpt:
        "An insider's look at what goes into creating compelling television content, from pre-production to the final broadcast.",
      date: "March 2, 2024",
      category: "Media",
      image: sketch1,
      content: `
        TV production is a collaborative process involving writers, directors, camera operators, and editors.
        Every detail—from lighting to sound—is meticulously planned to ensure the final product captivates the audience.
      `,
    },
    // ... more articles
  ];

  return (
    <section id="blog" className="py-20 md:py-32 bg-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4">
            Latest <span className="text-primary">Insights & Articles</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-sans">
            Reflections on PR strategy, media, communication, and professional
            growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {articles.map((article, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all cursor-pointer bg-card border-secondary/20 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              {/* ✅ Article Image */}
              <div className="h-56 w-full overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-bold bg-secondary text-primary rounded-full uppercase tracking-wider">
                    {article.category}
                  </span>
                  <div className="flex items-center text-sm text-secondary/70">
                    <Calendar className="w-4 h-4 mr-2" />
                    {article.date}
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-serif font-bold mb-3 group-hover:text-secondary transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>

                <Button
                  variant="default"
                  onClick={() =>
                    navigate(`/blog/${article.id}`, { state: { article } })
                  }
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-4 py-2 mt-2"
                >
                  Read Article
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
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
