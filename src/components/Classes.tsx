import { motion } from "framer-motion";
import { BookOpenCheck } from "lucide-react";

const allSubjects = [
  "Maths",
  "Science",
  "Social Science",
  "English",
  "Gujarati",
  "Hindi",
  "Accountancy",
  "Statistics",
  "Economics",
  "Business Organization",
];

const features = [
  {
    title: "Board Preparation",
    description: "Targeted preparation for SSC, CBSE, and ICSE board exams.",
  },
  {
    title: "Weekly Tests & Reports",
    description:
      "Progress tracking through tests and parent reports every week.",
  },
  {
    title: "Concept Clarity",
    description: "Focus on strong fundamentals through practice and examples.",
  },
  {
    title: "Language Excellence",
    description: "Improvement in grammar, writing and comprehension skills.",
  },
];

export default function Classes() {
  return (
    <section className="py-24 px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0f172a]">
          📚 Subjects & Features
        </h2>
        <p className="text-lg text-gray-600 mt-3">
          Building confidence through personalized, engaging classes for every
          student.
        </p>
      </motion.div>

      {/* Subject Scrollable Row */}
      <div className="overflow-x-auto whitespace-nowrap py-4 mb-12 scrollbar-hide">
        <div className="flex space-x-4 px-2">
          {allSubjects.map((subject, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="inline-block bg-white rounded-xl border border-gray-300 shadow-sm px-5 py-3 text-sm font-medium text-gray-800 hover:shadow-md transition"
            >
              {subject}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            className="rounded-2xl border border-[#cbd5e1] bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#e0f2fe] text-[#0ea5e9] mb-4 mx-auto">
              <BookOpenCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 text-center mb-2">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-600 text-center">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
