import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";

const testimonials = [
  {
    name: "Zainab Mansuri",
    relation: "12th Commerce",
    feedback:
      "Mam's teaching style made Accountancy and Statistics so simple to understand. Her notes were life-saving before exams!",
  },
  {
    name: "Fatima Mansuri",
    relation: "10th Grade",
    feedback:
      "Science and Maths felt difficult at first, but now I’m confident and scoring well. Thank you, Mam!",
  },
  {
    name: "Ziyan Mansuri",
    relation: "11th Commerce",
    feedback:
      "Very friendly teaching environment. I never hesitate to ask questions now.",
  },
  {
    name: "Faraz Shaikh",
    relation: "10th Grade",
    feedback:
      "Mam explained all concepts with patience. Her revision sessions were very helpful for board prep.",
  },
  {
    name: "Preeti",
    relation: "10th Grade",
    feedback:
      "English and Grammar became my strong subjects thanks to her clear guidance.",
  },
  {
    name: "Hifza Bootwala",
    relation: "9th Grade",
    feedback:
      "From struggling with basics to topping class tests – all because of the personal attention Mam gave me.",
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

      {/* Horizontal scroll with scrollbar hidden using Tailwind */}
      <div className="flex gap-4 overflow-x-auto px-1 pb-2 [-ms-overflow-style:'none'] [scrollbar-width:'none'] [&::-webkit-scrollbar]:hidden">
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="min-w-[240px] max-w-[260px] flex-shrink-0 rounded-xl border border-[#e2e8f0] bg-white p-4 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1"
          >
            <div className="flex items-start gap-2 mb-3">
              <div className="p-2 bg-[#e0f2fe] rounded-full text-[#0ea5e9]">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold text-sm text-gray-800">
                  {item.name}
                </p>
                <p className="text-xs text-gray-500">{item.relation}</p>
              </div>
            </div>
            <p className="text-gray-700 text-sm leading-snug italic">
              “{item.feedback}”
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
