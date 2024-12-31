import { Badge } from "@/components/ui/badge";
import { BookCard } from "@/components/BookCard";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Hero } from "@/components/Hero";
import { PeopleSection } from "@/components/PeopleSection";

const categories = [
  "B.Com",
  "BBA",
  "BCA",
  "BA",
  "Engineering",
  "Medical",
  "Law",
  "Arts",
];

const demoBooks = [
  {
    title: "Financial Accounting Basics",
    author: "Dr. Sarah Johnson",
    description: "A comprehensive guide to financial accounting principles",
    imageUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
    category: "B.Com",
    downloadUrl: "/path/to/file.pdf"
  },
  {
    title: "Business Strategy Fundamentals",
    author: "Michael Porter",
    description: "Learn the core concepts of business strategy",
    imageUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    category: "BBA",
    downloadUrl: "/path/to/file.pdf"
  },
  {
    title: "Introduction to Programming",
    author: "James Smith",
    description: "Master the basics of computer programming",
    imageUrl: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e",
    category: "BCA",
    downloadUrl: "/path/to/file.pdf"
  },
  {
    title: "Modern Literature",
    author: "Emily Brooks",
    description: "Explore contemporary literary masterpieces",
    imageUrl: "https://images.unsplash.com/photo-1514894780887-121968d00567",
    category: "BA",
    downloadUrl: "/path/to/file.pdf"
  },
];

const Categories = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const filteredBooks = demoBooks.filter((book) => {
    const matchesSearch = book.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(book.category);
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <div className="w-full md:w-64 space-y-4">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search books..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>

            <Collapsible
              open={isFilterOpen}
              onOpenChange={setIsFilterOpen}
              className="space-y-2"
            >
              <CollapsibleTrigger asChild>
                <Button
                  variant="outline"
                  className="flex items-center justify-between w-full"
                >
                  <span className="flex items-center">
                    <Filter className="h-4 w-4 mr-2" />
                    Filters
                  </span>
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-2">
                <div className="font-medium text-sm mb-2">Categories</div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Badge
                      key={category}
                      variant={
                        selectedCategories.includes(category)
                          ? "secondary"
                          : "outline"
                      }
                      className="cursor-pointer"
                      onClick={() => toggleCategory(category)}
                    >
                      {category}
                    </Badge>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBooks.map((book) => (
                <BookCard key={book.title} {...book} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <PeopleSection />
    </div>
  );
};

export default Categories;