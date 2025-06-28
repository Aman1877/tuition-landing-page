import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";

const testimonials = [
  {
    name: "Ravi Sharma",
    relation: "Parent of Class 8 Student",
    feedback:
      "Mam helped my daughter gain confidence in Maths. Her concepts are now much stronger and she enjoys studying!",
  },
  {
    name: "Anjali Mehta",
    relation: "Class 10 Student",
    feedback:
      "The board prep classes were very useful. I improved my scores in Science and English. Highly recommended!",
  },
  {
    name: "Karan Patel",
    relation: "Parent of Class 5 Student",
    feedback:
      "Very caring and disciplined teaching. My son actually looks forward to classes now.",
  },
  {
    name: "Sana Sheikh",
    relation: "Class 12 Student",
    feedback:
      "Mam explains every topic so clearly. I cracked my finals confidently thanks to her tuition.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0f172a]">
          ❤️ What Students & Parents Say
        </h2>
        <p className="text-lg text-gray-600 mt-3">
          Real words from families who’ve grown with our teaching.
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            className="rounded-2xl border border-[#e2e8f0] bg-white p-6 shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1"
          >
            <div className="flex items-start gap-3 mb-4">
              <div className="p-2 bg-[#e0f2fe] rounded-full text-[#0ea5e9]">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">{item.name}</p>
                <p className="text-sm text-gray-500">{item.relation}</p>
              </div>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed italic">
              “{item.feedback}”
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
