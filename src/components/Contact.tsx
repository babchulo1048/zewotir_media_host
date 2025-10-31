// src/components/Contact.tsx (REFINED)

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
// Added Calendar for the booking section
import {
  Mail,
  Linkedin,
  Youtube,
  Download,
  Calendar,
  MessageSquare,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
// Assuming you have these select components in your UI library
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryType: "", // New state field for the Select
    message: "",
  });

  // Placeholder Inquiry Types
  const inquiryTypes = [
    "PR Strategy Consultation",
    "Media Hosting Inquiry",
    "Voice-Over Booking",
    "Art Commission",
    "General Inquiry",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // NOTE: In a real app, integrate with an API endpoint here
    toast({
      title: "Inquiry Sent!",
      description:
        "Thank you for reaching out. I'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", inquiryType: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // New handler for the Select component
  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, inquiryType: value });
  };

  const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Youtube, label: "YouTube", href: "#" },
    { icon: Mail, label: "Email", href: "mailto:zewotir@example.com" },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      {" "}
      {/* Use defined background color */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4">
            {" "}
            {/* Used font-serif for authority */}
            Connect & <span className="text-primary">Collaborate</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto mb-8"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to discuss your next high-impact project? Contact me directly
            or book a consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Column 1: Direct Message Form (Focus on Efficiency) */}
          <Card className="p-6 sm:p-8 bg-card border-secondary/20 animate-slide-in">
            <h3 className="text-2xl font-serif font-semibold mb-6 text-secondary flex items-center">
              <MessageSquare className="w-6 h-6 mr-3 text-primary" />
              Send a Project Inquiry
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="border-border focus:ring-primary focus:border-primary"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
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
                  className="border-border focus:ring-primary focus:border-primary"
                />
              </div>

              {/* NEW: Inquiry Type Select */}
              <div>
                <label
                  htmlFor="inquiryType"
                  className="block text-sm font-medium mb-2"
                >
                  Inquiry Type
                </label>
                <Select
                  onValueChange={handleSelectChange}
                  value={formData.inquiryType}
                >
                  <SelectTrigger
                    id="inquiryType"
                    className="border-border focus:ring-primary focus:border-primary"
                  >
                    <SelectValue placeholder="Select one..." />
                  </SelectTrigger>
                  <SelectContent>
                    {inquiryTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message / Project Brief
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project and requirements..."
                  rows={5}
                  className="border-border focus:ring-primary focus:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-base py-6 transition-all duration-300"
              >
                Send Inquiry
              </Button>
            </form>
          </Card>

          {/* Column 2: Booking and Downloads (High-Value Resources) */}
          <div
            className="space-y-8 animate-slide-in"
            style={{ animationDelay: "0.2s" }}
          >
            {/* NEW: Calendar Embed Section */}
            <Card className="p-6 sm:p-8 bg-card border-secondary/20">
              <h3 className="text-2xl font-serif font-semibold mb-6 text-secondary flex items-center">
                <Calendar className="w-6 h-6 mr-3 text-primary" />
                Book a Consultation
              </h3>
              {/* Placeholder for Calendar Embed */}
              <div className="bg-muted/50 p-6 rounded-lg h-96 flex items-center justify-center border border-dashed border-border/80">
                <p className="text-muted-foreground text-center">
                  [**External Scheduling Widget Embed**]
                  <br />
                  Paste your Calendly/Acuity/etc. embed code here.
                </p>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                This is the fastest way to set up a meeting to discuss PR
                strategy, media work, or high-level projects.
              </p>
            </Card>

            {/* Resume Download */}
            <Card className="p-6 sm:p-8 bg-secondary/10 border-primary/20">
              {" "}
              {/* Slightly muted, but professional background */}
              <div className="flex items-start gap-4">
                <Download className="w-8 h-8 flex-shrink-0 mt-1 text-secondary" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-secondary">
                    Download My Resume/CV
                  </h3>
                  <p className="mb-4 text-muted-foreground">
                    A detailed overview of my experience, skills, and
                    achievements across all fields.
                  </p>
                  <Button
                    variant="primary" // Use primary for strong CTA
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    onClick={() => console.log("Download CV Action")}
                  >
                    Download CV (PDF)
                  </Button>
                </div>
              </div>
            </Card>

            {/* Social Connect (Reduced visibility since Footer also has it) */}
            <Card className="p-6 sm:p-8 bg-card border-primary/20">
              <h3 className="text-xl font-semibold mb-4">Direct Links</h3>
              <div className="space-y-3">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={index}
                      href={link.href}
                      className="flex items-center gap-3 text-secondary hover:text-primary transition-colors group"
                    >
                      <Icon className="w-5 h-5 text-primary" />
                      <span className="font-medium text-sm">{link.label}</span>
                    </a>
                  );
                })}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
