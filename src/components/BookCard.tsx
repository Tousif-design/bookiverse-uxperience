import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface BookCardProps {
  title: string;
  author: string;
  description: string;
  imageUrl: string;
  downloadUrl: string;
}

export const BookCard = ({ title, author, description, imageUrl, downloadUrl }: BookCardProps) => {
  const { toast } = useToast();

  const handleDownload = () => {
    // In a real application, check if user is logged in here
    const isLoggedIn = false; // This would come from your auth context

    if (!isLoggedIn) {
      toast({
        title: "Login Required",
        description: "Please sign up or log in to download this book.",
        variant: "destructive",
      });
      return;
    }

    // Trigger download
    window.open(downloadUrl, '_blank');
  };

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
        <p className="text-gray-700 text-sm mb-4 line-clamp-2">{description}</p>
        <div className="flex justify-end">
          <Button 
            onClick={handleDownload}
            className="bg-primary hover:bg-primary/90"
          >
            <Download className="h-4 w-4 mr-2" />
            Download
          </Button>
        </div>
      </div>
    </div>
  );
};