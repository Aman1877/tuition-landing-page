import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <motion.footer
      className="bg-background py-10 px-4 md:px-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-3 text-sm text-muted-foreground">
        {/* Column 1: Info */}
        <div>
          <h3 className="text-base font-semibold text-foreground mb-2">
            Tuition by Sumaiya Abdul Rehman
          </h3>
          <p>
            Helping students from 5th to 12th achieve academic success with
            personalized attention and care.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-2">
          <h4 className="font-medium text-foreground">Quick Links</h4>
          <nav className="flex flex-col space-y-1">
            <a href="#home" className="hover:text-foreground">
              Home
            </a>
            <a href="#about" className="hover:text-foreground">
              About
            </a>
            <a href="#classes" className="hover:text-foreground">
              Classes
            </a>
            <a href="#testimonials" className="hover:text-foreground">
              Testimonials
            </a>
            <a href="#contact" className="hover:text-foreground">
              Contact
            </a>
          </nav>
        </div>

        {/* Column 3: Contact with Icons */}
        <div className="space-y-3">
          <h4 className="font-medium text-foreground">Contact</h4>

          <div className="flex items-start gap-2">
            <Mail className="w-4 h-4 mt-1 text-gray-600" />
            <a
              href="mailto:sumaiya.tuition@gmail.com"
              className="hover:underline"
            >
              tution54@gmail.com
            </a>
          </div>

          <div className="flex items-start gap-2">
            <Phone className="w-4 h-4 mt-1 text-gray-600" />
            <a href="tel:+918000898815" className="hover:underline">
              +91 80008 98815
            </a>
          </div>

          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 mt-1 text-gray-600" />
            <p>Dhalgarwad, Near Vegetable Market, Ahmedabad, Gujarat 380001</p>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Tuition by Sumaiya Abdul Rehman. All rights
        reserved.
      </div>
    </motion.footer>
  );
}
