import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Youtube, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Youtube, label: "YouTube", href: "#" },
    { icon: Mail, label: "Email", href: "mailto:zewotir@example.com" },
  ];

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto mb-8"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Interested in collaborating? Let's discuss your project
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-6 sm:p-8 bg-card border-primary/20 animate-slide-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="bg-secondary border-primary/20"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="bg-secondary border-primary/20"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project Inquiry"
                  className="bg-secondary border-primary/20"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project..."
                  rows={6}
                  className="bg-secondary border-primary/20 resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-accent hover:shadow-glow transition-all text-lg py-6"
              >
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8 animate-slide-in" style={{ animationDelay: "0.2s" }}>
            <Card className="p-6 sm:p-8 bg-card border-primary/20">
              <h3 className="text-2xl font-semibold mb-6">Connect With Me</h3>
              <div className="space-y-4">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={index}
                      href={link.href}
                      className="flex items-center gap-4 p-4 rounded-lg bg-secondary hover:bg-primary/10 transition-colors group"
                    >
                      <Icon className="w-6 h-6 text-primary" />
                      <span className="font-medium group-hover:text-primary transition-colors">
                        {link.label}
                      </span>
                    </a>
                  );
                })}
              </div>
            </Card>

            <Card className="p-6 sm:p-8 bg-gradient-accent border-0 text-primary-foreground">
              <div className="flex items-start gap-4">
                <Download className="w-8 h-8 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Download My Resume</h3>
                  <p className="mb-4 opacity-90">
                    Get a detailed overview of my experience, skills, and achievements.
                  </p>
                  <Button
                    variant="secondary"
                    className="bg-background text-foreground hover:bg-background/90"
                  >
                    Download CV (PDF)
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-6 sm:p-8 bg-card border-primary/20">
              <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
