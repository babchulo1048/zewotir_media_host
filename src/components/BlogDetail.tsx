// src/components/BlogDetail.tsx
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import sketch1 from "@/assets/sketch-1.jpg"; // ✅ added

const BlogDetail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const article = state?.article;

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center">
        <p className="text-muted-foreground text-lg">Article not found.</p>
      </div>
    );
  }

  return (
    <section className="py-20 md:py-32 bg-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <Button
          variant="ghost"
          className="flex items-center mb-6 text-secondary hover:text-primary"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back to Articles
        </Button>

        {/* ✅ Article Banner Image */}
        <div className="rounded-2xl overflow-hidden mb-8 shadow-md">
          <img
            src={article.image || sketch1}
            alt={article.title}
            className="w-full h-80 object-cover"
          />
        </div>

        <Card className="p-6 sm:p-10 bg-card shadow-lg border border-secondary/20">
          <span className="inline-block px-3 py-1 text-xs font-bold bg-secondary text-primary rounded-full uppercase tracking-wider mb-4">
            {article.category}
          </span>

          <h1 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
            {article.title}
          </h1>

          <p className="text-sm text-muted-foreground mb-6">{article.date}</p>

          <div className="prose max-w-none text-muted-foreground leading-relaxed whitespace-pre-line">
            {article.content}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default BlogDetail;
