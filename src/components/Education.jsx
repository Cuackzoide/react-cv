import { motion } from "framer-motion";

export const Education = ({ education, lang }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const parts = dateStr.split("-");
    const date = new Date(parts[0], parts[1] - 1);
    const options = { month: "long", year: "numeric" };
    const formatted = date.toLocaleDateString(lang === "es" ? "es-ES" : "en-US", options);
    return formatted.charAt(0).toUpperCase() + formatted.slice(1);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.section
      className="w-100 my-4 py-2"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <h2 className="h3 text-primary fw-bold text-capitalize text-center border-bottom my-2 py-2">
        {lang === "es" ? "Educación" : "Education"}
      </h2>
      {education.map((item, index) => (
        <motion.div
          key={index}
          className="mb-4 p-2 rounded bg-tertiary shadow-sm transition-all"
          variants={itemVariants}
          whileHover={{ x: 5, backgroundColor: "rgba(0,0,0,0.1)" }}
        >
          <div className="fw-bold">{item.field}</div>
          <div className="text-primary small fw-semibold">
            {item.institution}
          </div>
          <div className="text-muted small">
            {item.degree} | {formatDate(item.period.start)} —{" "}
            {item.period.current
              ? lang === "es"
                ? "(En curso)"
                : "(In progress)"
              : item.period.end
                ? formatDate(item.period.end)
                : lang === "es"
                  ? "(No finalizado)"
                  : "(Unfinished)"}
          </div>
        </motion.div>
      ))}
    </motion.section>
  );
};
