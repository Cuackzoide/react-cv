import { motion } from "framer-motion";

export const Experience = ({ experience, lang }) => {
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
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.section
      className="w-100 my-4 py-2"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <h2 className="border-bottom pb-2 mb-4 text-primary fw-bold">
        {lang === "es" ? "Experiencia Profesional" : "Professional Experience"}
      </h2>
      <div className="row g-4">
        {experience.map((item, index) => (
          <motion.div
            key={index}
            className="col-12"
            variants={itemVariants}
          >
            <motion.div
              className="p-3 rounded-4 border-start border-4 border-primary bg-white shadow-sm h-100"
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
              }}
            >
              <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-1">
                <h5 className="fw-bold mb-0">{item.main_role}</h5>
                <span className="text-secondary small fw-medium bg-light px-2 py-1 rounded">
                  {formatDate(item.period.start)} —{" "}
                  {item.period.current
                    ? lang === "es"
                      ? "Presente"
                      : "Present"
                    : formatDate(item.period.end)}
                </span>
              </div>
              <p className="text-primary fw-semibold mb-2">{item.company}</p>
              <div className="d-flex flex-wrap gap-1 mb-3">
                {item.specialties?.map((spec, idx) => (
                  <span key={idx} className="badge bg-light text-primary border">
                    {spec}
                  </span>
                ))}
              </div>
              <ul className="text-muted small mb-0">
                {item.highlights?.map((bullet, idx) => (
                  <li key={idx} className="mb-1">{bullet}</li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
