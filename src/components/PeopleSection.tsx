import { Button } from "@/components/ui/button";
import { UserPlus, MessageCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const demoUsers = [
  {
    id: "USER001",
    name: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    description: "B.Com student | Book enthusiast",
  },
  {
    id: "USER002",
    name: "Michael Chen",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    description: "BBA student | Business Strategy",
  },
  {
    id: "USER003",
    name: "Emily Rodriguez",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    description: "BCA student | Tech lover",
  },
];

export const PeopleSection = () => {
  const { toast } = useToast();

  const handleConnect = (userId: string) => {
    // In a real application, check if user is logged in here
    toast({
      title: "Login Required",
      description: "Please sign up or log in to connect with other users.",
      variant: "destructive",
    });
  };

  const handleMessage = (userId: string) => {
    // In a real application, check if user is logged in here
    toast({
      title: "Login Required",
      description: "Please sign up or log in to message other users.",
      variant: "destructive",
    });
  };

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold text-primary mb-8">
          Connect with Others
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {demoUsers.map((user) => (
            <div
              key={user.id}
              className="bg-white rounded-lg shadow-md p-6 space-y-4"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-lg">{user.name}</h3>
                  <p className="text-sm text-gray-600">ID: {user.id}</p>
                </div>
              </div>
              <p className="text-gray-700">{user.description}</p>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => handleConnect(user.id)}
                >
                  <UserPlus className="h-4 w-4 mr-2" />
                  Connect
                </Button>
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => handleMessage(user.id)}
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Message
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};