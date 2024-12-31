import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-primary/90 text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight">
              Discover Your Next
              <br />
              Favorite Book
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              Explore our vast collection of books across all genres. From
              bestsellers to rare finds, we have something for every reader.
            </p>
            <div className="space-x-4">
              <Button
                size="lg"
                className="bg-secondary text-primary hover:bg-secondary/90"
              >
                Browse Books
              </Button>
              <Button size="lg" variant="outline" className="text-white">
                View Categories
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
                alt="Books"
                className="rounded-lg shadow-xl transform -rotate-6"
              />
              <img
                src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6"
                alt="Books"
                className="absolute -bottom-4 -right-4 w-2/3 rounded-lg shadow-xl transform rotate-6"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};