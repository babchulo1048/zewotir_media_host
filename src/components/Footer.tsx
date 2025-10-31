// src/components/Footer.tsx

import {
  Linkedin,
  Youtube,
  Mail,
  Send,
  Instagram,
  Twitter,
} from "lucide-react"; // Added Send, Instagram, Twitter
import { Input } from "@/components/ui/input"; // Assuming standard UI components
import { Button } from "@/components/ui/button"; // Assuming standard UI components

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Instagram, href: "#", label: "Instagram" }, // Added Instagram
  { icon: Twitter, href: "#", label: "Twitter/X" }, // Added Twitter
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    // Use the deep Navy color (Secondary) for professionalism, text is secondary-foreground (white/light)
    <footer className="bg-secondary text-secondary-foreground py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Grid (Changed to 4 columns to accommodate the newsletter) */}
        <div className="grid md:grid-cols-4 gap-12 mb-10 border-b border-secondary-foreground/20 pb-10">
          {/* Column 1: Branding and Philosophy */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-primary mb-3">
              Zewotir
            </h3>
            <p className="text-secondary-foreground/80 text-sm leading-relaxed">
              **PR Strategist**, TV Host, and **Media Personality** bringing
              stories to life with charisma and authority.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-secondary-foreground">
              Navigation
            </h4>
            <ul className="space-y-2 text-secondary-foreground/80 text-sm">
              <li>
                <a
                  href="#home"
                  className="hover:text-primary transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-primary transition-colors"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="hover:text-primary transition-colors"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="hover:text-primary transition-colors"
                >
                  Insights (Blog)
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact / Book
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Follow Me (Refined Icons) */}
          <div>
            <h4 className="font-bold mb-4 text-secondary-foreground">
              Connect
            </h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    // Icons styled with Gold accent color
                    className="text-primary hover:text-primary/70 transition-colors"
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
            {/* Added Email Link */}
            <div className="mt-4 flex items-center text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
              <Mail className="w-5 h-5 mr-2" />
              <a href="mailto:zewotir@example.com">zewotir@example.com</a>
            </div>
          </div>

          {/* Column 4: Newsletter Signup (NEW FEATURE) */}
          <div>
            <h4 className="font-bold mb-4 text-secondary-foreground">
              Get Updates
            </h4>
            <p className="text-sm text-secondary-foreground/80 mb-4">
              Receive exclusive insights on media trends and events.
            </p>
            <form className="flex space-x-2">
              <Input
                type="email"
                placeholder="Your email"
                // Inverted styling for dark background
                className="flex-grow bg-secondary/80 border-primary/50 text-secondary-foreground placeholder:text-secondary-foreground/60"
              />
              <Button
                variant="primary"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                type="submit"
              >
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-secondary-foreground/60 text-sm">
          <p>© {currentYear} Zewotir Desalegn Alemu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
