import { BookCard } from "./BookCard";

export const FeaturedBooks = () => {
  const featuredBooks = [
    {
      title: "The Midnight Library",
      author: "Matt Haig",
      price: 24.99,
      imageUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
    },
    {
      title: "The Silent Patient",
      author: "Alex Michaelides",
      price: 19.99,
      imageUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    },
    {
      title: "Educated",
      author: "Tara Westover",
      price: 22.99,
      imageUrl: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e",
    },
    {
      title: "Where the Crawdads Sing",
      author: "Delia Owens",
      price: 21.99,
      imageUrl: "https://images.unsplash.com/photo-1514894780887-121968d00567",
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