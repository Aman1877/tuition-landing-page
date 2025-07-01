import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useScrollSection } from "@/context/ScrollContext";
import clsx from "clsx";
import { motion } from "framer-motion";
import { BookOpen, Home, Info, Menu, MessageSquare, Phone } from "lucide-react";
import { useState } from "react";

const links = [
  { label: "Home", href: "#home", icon: <Home className="w-5 h-5" /> },
  { label: "About", href: "#about", icon: <Info className="w-5 h-5" /> },
  {
    label: "Classes",
    href: "#classes",
    icon: <BookOpen className="w-5 h-5" />,
  },
  {
    label: "Testimonials",
    href: "#testimonials",
    icon: <MessageSquare className="w-5 h-5" />,
  },
  { label: "Contact", href: "#contact", icon: <Phone className="w-5 h-5" /> },
];

export default function Navbar() {
  const activeSection = useScrollSection();
  const [open, setOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      className="fixed top-0 z-50 w-full bg-[#8ecae6] shadow-md text-gray-900 backdrop-blur"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a
          href="#home"
          className="text-lg md:text-2xl font-bold tracking-wide text-indigo-700 hover:text-indigo-900 transition"
        >
          Sumaiya Tuition Classes
        </a>

        {/* Desktop Nav */}
        <nav className="hidden gap-6 text-sm font-medium md:flex">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className={clsx(
                "transition-colors",
                activeSection === link.href.slice(1)
                  ? "text-indigo-700 font-semibold"
                  : "text-gray-700 hover:text-indigo-600"
              )}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger>
              <Menu className="h-6 w-6 text-gray-800" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-gradient-to-br from-[#edf6f9] to-[#8ecae6] text-gray-800 shadow-lg rounded-l-3xl px-6 pt-10 pb-6"
            >
              <nav className="flex flex-col space-y-6 animate-slide-in">
                {links.map((link, index) => (
                  <motion.button
                    key={link.href}
                    onClick={() => {
                      scrollToSection(link.href);
                      setOpen(false);
                    }}
                    className={clsx(
                      "text-left text-lg font-medium flex items-center gap-3",
                      activeSection === link.href.slice(1)
                        ? "text-indigo-700 font-semibold"
                        : "text-gray-700 hover:text-indigo-600"
                    )}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {link.icon}
                    {link.label}
                  </motion.button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
