import { motion } from "framer-motion";

export const Skills = ({ skills, lang }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 200 } }
  };

  return (
    <motion.section
      className="w-100 my-2 py-2"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <h2 className="h3 text-primary fw-bold text-capitalize text-center border-bottom my-2 py-2">
        {lang === "es" ? "Habilidades" : "Skills"}
      </h2>
      <div className="my-2">
        <p className="fw-bold my-2 text-uppercase text-muted small">
          {lang === "es" ? "Técnicas" : "Technical"}
        </p>
        <div className="d-flex flex-wrap gap-2 my-3">
          {skills.technical.map((s) => (
            <motion.span
              key={s}
              className="badge bg-light text-primary border"
              variants={badgeVariants}
              whileHover={{ scale: 1.05 }}
            >
              {s}
            </motion.span>
          ))}
        </div>
        <p className="fw-bold my-2 text-uppercase text-muted small">
          {lang === "es" ? "Blandas" : "Soft"}
        </p>
        <div className="d-flex flex-wrap gap-2 my-3">
          {skills.soft.map((s) => (
            <motion.span
              key={s}
              className="badge bg-light text-primary border"
              variants={badgeVariants}
              whileHover={{ scale: 1.05 }}
            >
              {s}
            </motion.span>
          ))}
        </div>
        <p className="fw-bold my-2 text-uppercase text-muted small">
          {lang === "es" ? "Idiomas" : "Languages"}
        </p>
        <div className="d-flex flex-wrap gap-2 my-3">
          {skills.languages.map((l, i) => (
            <motion.span
              key={i}
              className="badge bg-light text-primary border"
              variants={badgeVariants}
              whileHover={{ scale: 1.05 }}
            >
              {l.language}: {l.level}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

