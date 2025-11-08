import { Helmet } from "react-helmet"; // ✅ for SEO metadata
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
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
      {/* ✅ SEO Metadata */}
      <Helmet>
        <title>
          Zewotir D. Alemu | Ethiopian PR Strategist, TV Host & Media
          Professional
        </title>
        <meta
          name="description"
          content="Zewotir D. Alemu is an Ethiopian PR strategist, media host, and communications expert helping organizations amplify their message through storytelling, public relations, and voice performance."
        />
        <meta
          name="keywords"
          content="Ethiopia media host, Amharic and English MC, voice-over Ethiopia, PR strategist Addis Ababa, Zewotir Alemu, media personality Ethiopia"
        />
        <link rel="canonical" href="https://www.zewotir.com/" />
        <meta
          property="og:title"
          content="Zewotir D. Alemu | PR Strategist & TV Host"
        />
        <meta
          property="og:description"
          content="Professional Ethiopian media host and PR strategist delivering impactful storytelling and media communications."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <main>
        <Hero />
        <AboutSnippet />
        <ContentPreviews />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
