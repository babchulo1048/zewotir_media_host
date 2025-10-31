import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
// import About from "@/components/About";
import AboutSnippet from "@/components/AboutSnippet";
import Portfolio from "@/components/Portfolio";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ContentPreviews from "@/components/ContentPreviews";
import Testimonials from "@/components/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        {/* <About /> */}
        {/* <Portfolio />
        <Blog /> */}
        {/* 2. Concise About Snippet and Stats */}
        <AboutSnippet />

        {/* 3. Preview Sections */}
        <ContentPreviews />

        <Testimonials />

        {/* 4. Testimonials (Next step in your plan) */}
        {/* <Testimonials /> */}
        {/* <Contact /> */}
      </main>
    </div>
  );
};

export default Index;
