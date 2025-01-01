import { Hero } from "@/components/Hero";
import { FeaturedBooks } from "@/components/FeaturedBooks";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <FeaturedBooks />
      <Footer />
    </div>
  );
};

export default Index;