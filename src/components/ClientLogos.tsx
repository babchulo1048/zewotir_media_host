// src/components/ClientLogos.tsx

import { Card } from "@/components/ui/card";

// *** ACTION NEEDED: Replace these placeholders with actual organization names ***
const partnerLogos = [
  "Leading Media Outlet",
  "International NGO",
  "Government Ministry",
  "Major Event Host",
  "Corporate Partner",
];

const ClientLogos = () => {
  return (
    <div className="mb-16">
      <h3 className="text-xl font-semibold text-center text-muted-foreground mb-10 tracking-wide uppercase">
        Trusted by Top Organizations and Brands
      </h3>

      {/* Logos/Names Grid */}
      <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 opacity-70 max-w-4xl mx-auto">
        {partnerLogos.map((name, index) => (
          <div key={index} className="h-10 flex items-center justify-center">
            {/* If you use real logo images, replace this span with an <img> tag */}
            <span className="text-gray-500 font-bold text-lg">{name}</span>
          </div>
        ))}
      </div>

      {/* Testimonial Block (Client requested quotes/testimonials) */}
      <Card className="mt-12 p-6 max-w-4xl mx-auto bg-primary/5 border-primary/20">
        <p className="italic text-lg text-center text-gray-700">
          "Zewotir's strategic communication and professional hosting are assets
          to any high-profile event. A true expert in his field."
        </p>
      </Card>
    </div>
  );
};

export default ClientLogos;
