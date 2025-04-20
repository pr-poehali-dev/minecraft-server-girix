import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Server, Home, Info, Download, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavItem {
  label: string;
  href: string;
  icon: JSX.Element;
}

const navItems: NavItem[] = [
  { label: "Главная", href: "/", icon: <Home className="h-4 w-4 mr-2" /> },
  { label: "О сервере", href: "/about", icon: <Info className="h-4 w-4 mr-2" /> },
  { label: "Скачать", href: "/download", icon: <Download className="h-4 w-4 mr-2" /> },
  { label: "Сообщество", href: "/community", icon: <Users className="h-4 w-4 mr-2" /> },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-card/80 backdrop-blur-sm fixed w-full z-20 top-0 left-0 border-b border-border">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center">
          <Server className="h-8 w-8 text-primary mr-3" />
          <span className="minecraft-font self-center text-2xl font-semibold whitespace-nowrap">
            Girix
          </span>
        </Link>
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <span className="sr-only">Открыть меню</span>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
        <div className={`${isOpen ? "flex" : "hidden"} w-full md:flex md:w-auto flex-col md:flex-row md:items-center`}>
          <ul className="flex flex-col p-4 md:p-0 mt-4 md:mt-0 md:flex-row md:space-x-8 w-full">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link 
                  to={item.href} 
                  className="flex items-center py-2 px-3 hover:text-primary transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon}
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button className="mt-4 md:mt-0 minecraft-font">
            Играть сейчас
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;