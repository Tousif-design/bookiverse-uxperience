import { useState } from "react";
import { BookCard } from "@/components/BookCard";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { PeopleSection } from "@/components/PeopleSection";

const categories = ["B.Com", "BBA", "BCA", "BA"];

const books = [
  {
    title: "Financial Management",
    author: "Dr. Sarah Johnson",
    description: "Comprehensive guide to financial management principles",
    imageUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
    downloadUrl: "/downloads/financial-management.pdf",
    category: "B.Com",
  },
  {
    title: "Business Strategy",
    author: "Michael Porter",
    description: "Essential business strategy concepts and frameworks",
    imageUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    downloadUrl: "/downloads/business-strategy.pdf",
    category: "BBA",
  },
  {
    title: "Programming Fundamentals",
    author: "James Smith",
    description: "Introduction to computer programming concepts",
    imageUrl: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e",
    downloadUrl: "/downloads/programming.pdf",
    category: "BCA",
  },
  {
    title: "Arts & Culture",
    author: "Emily Brooks",
    description: "Exploring contemporary arts and culture",
    imageUrl: "https://images.unsplash.com/photo-1514894780887-121968d00567",
    downloadUrl: "/downloads/arts-culture.pdf",
    category: "BA",
  },
];

const Books = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBooks = books.filter((book) => {
    const matchesCategory = !selectedCategory || book.category === selectedCategory;
    const matchesSearch = book.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
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

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-medium text-lg mb-3">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Badge
                    key={category}
                    variant={
                      selectedCategory === category ? "secondary" : "outline"
                    }
                    className="cursor-pointer"
                    onClick={() =>
                      setSelectedCategory(
                        selectedCategory === category ? null : category
                      )
                    }
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
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

      <PeopleSection selectedField="all" />
    </div>
  );
};

export default Books;