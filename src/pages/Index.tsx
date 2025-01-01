import { Hero } from "@/components/Hero";
import { FeaturedBooks } from "@/components/FeaturedBooks";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <FeaturedBooks />
    </div>
  );
};

export default Index;