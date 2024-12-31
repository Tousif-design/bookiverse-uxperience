import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface BookCardProps {
  title: string;
  author: string;
  price: number;
  imageUrl: string;
}

export const BookCard = ({ title, author, price, imageUrl }: BookCardProps) => {
  return (
    <div className="group bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1">
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="font-serif font-bold text-lg mb-1 text-primary">{title}</h3>
        <p className="text-gray-600 mb-2">{author}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-primary">${price}</span>
          <Button size="sm" className="bg-secondary text-primary hover:bg-secondary/90">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};