import { ShoppingCart, Search, Menu, User, LogIn, Home, UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn] = useState(false);
  const [userField] = useState("bcom"); // This would come from auth context in real app

  const getAvatarUrl = (field: string) => {
    const avatarMap = {
      bcom: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
      bca: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
      bba: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
      ba: "https://images.unsplash.com/photo-1501286353178-1ec871214838"
    };
    return avatarMap[field as keyof typeof avatarMap] || avatarMap.bcom;
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link to="/" className="font-serif text-2xl font-bold text-primary">
              BookStore
            </Link>
            <Link to="/" className="hidden md:flex items-center gap-2 text-gray-600 hover:text-primary transition-colors">
              <Home className="h-4 w-4" />
              Home
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative w-64">
              <Input
                type="search"
                placeholder="Search books..."
                className="pl-10"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <Link
              to="/books"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Books
            </Link>
            <Link
              to="/people"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              People
            </Link>
            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="relative">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={getAvatarUrl(userField)} />
                      <AvatarFallback>
                        <UserCircle className="h-6 w-6" />
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem>
                    <Link to="/profile" className="flex items-center w-full">
                      Profile Settings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/settings" className="flex items-center w-full">
                      Account Settings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center gap-4">
                <Link to="/profile">
                  <Button variant="ghost" size="icon" className="relative">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={getAvatarUrl("bcom")} />
                      <AvatarFallback>
                        <UserCircle className="h-6 w-6" />
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </Link>
                <Link to="/login">
                  <Button variant="default" className="flex items-center gap-2">
                    <LogIn className="h-4 w-4" />
                    Sign In
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <Input type="search" placeholder="Search books..." />
              <Link
                to="/"
                className="text-gray-600 hover:text-primary px-2 flex items-center gap-2"
              >
                <Home className="h-4 w-4" />
                Home
              </Link>
              <Link
                to="/books"
                className="text-gray-600 hover:text-primary px-2"
              >
                Books
              </Link>
              <Link
                to="/people"
                className="text-gray-600 hover:text-primary px-2"
              >
                People
              </Link>
              {isLoggedIn ? (
                <Link
                  to="/profile"
                  className="text-gray-600 hover:text-primary px-2 flex items-center gap-2"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={getAvatarUrl(userField)} />
                    <AvatarFallback>
                      <UserCircle className="h-6 w-6" />
                    </AvatarFallback>
                  </Avatar>
                  Profile
                </Link>
              ) : (
                <div className="space-y-2">
                  <Link to="/profile" className="block">
                    <Button variant="ghost" className="w-full flex items-center gap-2">
                      <UserCircle className="h-4 w-4" />
                      Profile
                    </Button>
                  </Link>
                  <Link to="/login">
                    <Button variant="default" className="w-full flex items-center gap-2">
                      <LogIn className="h-4 w-4" />
                      Sign In
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};