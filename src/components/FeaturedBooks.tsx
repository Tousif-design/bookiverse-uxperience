import { BookCard } from "./BookCard";

export const FeaturedBooks = () => {
  const featuredBooks = [
    {
      title: "The Midnight Library",
      author: "Matt Haig",
      description: "A thought-provoking novel about life's infinite possibilities",
      imageUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
      downloadUrl: "/downloads/midnight-library.pdf",
      category: "BBA",
    },
    {
      title: "The Silent Patient",
      author: "Alex Michaelides",
      description: "A psychological thriller that will keep you guessing",
      imageUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
      downloadUrl: "/downloads/silent-patient.pdf",
      category: "B.Com",
    },
    {
      title: "Educated",
      author: "Tara Westover",
      description: "A memoir about the transformative power of education",
      imageUrl: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e",
      downloadUrl: "/downloads/educated.pdf",
      category: "BCA",
    },
    {
      title: "Where the Crawdads Sing",
      author: "Delia Owens",
      description: "A beautiful story of resilience and survival",
      imageUrl: "https://images.unsplash.com/photo-1514894780887-121968d00567",
      downloadUrl: "/downloads/crawdads.pdf",
      category: "BA",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl font-bold text-primary mb-8">
          Featured Books
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredBooks.map((book) => (
            <BookCard key={book.title} {...book} />
          ))}
        </div>
      </div>
    </section>
  );
};