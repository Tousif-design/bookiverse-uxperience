import { ShoppingCart, Search, Menu, User, LogIn } from "lucide-react";
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

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn] = useState(false); // This will be connected to auth later

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-serif text-2xl font-bold text-primary">
            BookStore
          </Link>

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
              to="/categories"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Categories
            </Link>
            <Link
              to="/people"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              People
            </Link>
            {isLoggedIn ? (
              <>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <User className="h-5 w-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Link to="/profile" className="flex items-center">
                        Profile
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link to="/settings" className="flex items-center">
                        Settings
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>Logout</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button variant="ghost" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 bg-secondary text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    0
                  </span>
                </Button>
              </>
            ) : (
              <Button variant="default" className="flex items-center gap-2">
                <LogIn className="h-4 w-4" />
                Sign In
              </Button>
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
                to="/categories"
                className="text-gray-600 hover:text-primary px-2"
              >
                Categories
              </Link>
              <Link
                to="/people"
                className="text-gray-600 hover:text-primary px-2"
              >
                People
              </Link>
              {isLoggedIn ? (
                <>
                  <Link
                    to="/profile"
                    className="text-gray-600 hover:text-primary px-2"
                  >
                    Profile
                  </Link>
                  <Button variant="ghost" className="justify-start">
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Cart (0)
                  </Button>
                </>
              ) : (
                <Button variant="default" className="flex items-center gap-2">
                  <LogIn className="h-4 w-4" />
                  Sign In
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};