import { motion } from "framer-motion";

export const Certifications = ({ certifications, lang }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 }
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
        {lang === "es" ? "Certificados" : "Certifications"}
      </h2>
      {certifications.map((cert, index) => (
        <motion.div
          key={index}
          className="d-flex justify-content-between align-items-center m-2 p-2 rounded bg-tertiary shadow-sm transition-all"
          variants={itemVariants}
          whileHover={{ x: 5, backgroundColor: "rgba(0,0,0,0.1)" }}
        >
          <div>
            <div className="fw-bold small">{cert.title}</div>
            <div className="text-muted" style={{ fontSize: "0.8rem" }}>
              {cert.issuer}
            </div>
          </div>
          {cert.certification.is_certified && (
            <motion.a
              href={cert.certification.url}
              className="btn btn-secondary p-1 px-3 rounded-pill small"
              style={{ fontSize: "0.75rem" }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {lang === "es" ? "Ver" : "View"}
            </motion.a>
          )}
        </motion.div>
      ))}
    </motion.section>
  );
};
