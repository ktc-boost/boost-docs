import { Button } from "@/shared/components/shadcn/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About Docs", href: "#about-docs" },
  // { label: "Quick Search", href: "#quick-search" },
  // { label: "Help", href: "#help" },
];

const MainNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav
      id="main-nav"
      aria-label="Main Navigation"
      className="fixed top-0 left-0 w-screen bg-gray-100 shadow-sm z-50"
    >
      <div className="px-6 md:px-0 max-w-7xl mx-auto flex items-center justify-between py-3">
        <div className="text-xl font-bold text-boost-blue">
          BOOST <strong className="text-gray-900">Dev Docs</strong>
        </div>

        <div className="hidden md:flex space-x-12">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-gray-700 hover:text-boost-blue transition"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <Button
            variant="boostBlue"
            className="rounded-full"
            onClick={() => {
              window.open("https://boost.ai.kr", "_blank");
            }}
          >
            BOOST 서비스로 이동
          </Button>
        </div>

        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-gray-100 shadow-md flex flex-col items-center py-4 space-y-4 px-6">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="text-gray-700 hover:text-boost-blue text-lg transition w-full"
            >
              {item.label}
            </button>
          ))}

          <Button
            onClick={() => {
              setIsOpen(false);
              window.open("https://boost.ai.kr", "_blank");
            }}
            variant="boostBlue"
            className="w-full"
          >
            BOOST 서비스로 이동
          </Button>
        </div>
      )}
    </nav>
  );
};

export default MainNavigation;
