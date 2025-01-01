import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-primary text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold">BookStore</h3>
            <p className="text-sm text-gray-300">
              Connecting students through knowledge sharing and collaborative learning.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-secondary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/books" className="hover:text-secondary transition-colors">Books</Link>
              </li>
              <li>
                <Link to="/people" className="hover:text-secondary transition-colors">People</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-secondary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-secondary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold">Study Fields</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/books?field=bcom" className="hover:text-secondary transition-colors">B.Com</Link>
              </li>
              <li>
                <Link to="/books?field=bba" className="hover:text-secondary transition-colors">BBA</Link>
              </li>
              <li>
                <Link to="/books?field=bca" className="hover:text-secondary transition-colors">BCA</Link>
              </li>
              <li>
                <Link to="/books?field=ba" className="hover:text-secondary transition-colors">BA</Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:info@bookstore.com" className="hover:text-secondary transition-colors">
                  info@bookstore.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+1234567890" className="hover:text-secondary transition-colors">
                  +123 456 7890
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span>123 Book Street, Library City</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>&copy; {new Date().getFullYear()} BookStore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};