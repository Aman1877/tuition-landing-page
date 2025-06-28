import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex items-center justify-center min-h-screen px-4 pt-8 md:pt-10 bg-[#d1faff]">
      <div className="max-w-4xl text-center space-y-6">
        <motion.h1
          className="text-4xl md:text-6xl font-bold tracking-tight text-[#023047]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Personalised Tuition for Students from 5th to 12th
        </motion.h1>

        <motion.p
          className="text-gray-700 text-lg md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Helping students build a strong academic foundation with expert
          guidance and care.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a href="#contact">
            <Button
              size="lg"
              className="bg-[#219ebc] text-white font-semibold px-6 py-3 rounded-2xl shadow-md hover:bg-[#1e88a8] hover:shadow-lg transition-all duration-300 ease-in-out"
            >
              Get in Touch
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
