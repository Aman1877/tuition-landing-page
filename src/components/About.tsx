import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-24 px-4 md:px-6 lg:px-8 bg-[#f1f5f9]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center space-y-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0f172a]">
          🎓 About the Teacher
        </h2>

        <p className="text-muted-foreground text-lg leading-relaxed">
          With over{" "}
          <span className="font-semibold text-primary">
            20 years of experience
          </span>{" "}
          in personalized education, Ma'am has helped hundreds of students from
          5th to 12th standard excel in their academics. She has{" "}
          <span className="font-medium text-[#0f172a]">
            completed her B.Com with distinction
          </span>{" "}
          and specializes in subjects like{" "}
          <span className="font-medium">Maths</span>,{" "}
          <span className="font-medium">Science</span>,{" "}
          <span className="font-medium">Social Science</span>,{" "}
          <span className="font-medium">English</span>,{" "}
          <span className="font-medium">Gujarati</span>,{" "}
          <span className="font-medium">Hindi</span>,{" "}
          <span className="font-medium">Accountancy</span>,{" "}
          <span className="font-medium">Statistics</span>,{" "}
          <span className="font-medium">Economics</span>, and{" "}
          <span className="font-medium">Business Organization</span>. She blends
          modern teaching methods with traditional discipline to nurture
          confident learners.
        </p>
      </motion.div>
    </section>
  );
}
