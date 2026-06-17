import { motion } from "framer-motion";

export const AnalystSummary = ({ professionalProfile, lang }) => {
  const role = {
    id: "data_analyst",
    ...professionalProfile.roles.data_analyst,
  };
  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1, // Efecto de baraja dentro de cada tarjeta
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <motion.div
      className="row g-2"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div key={role.id} className="col-12" variants={itemVariants}>
        <motion.div
          className="bg-info-subtle rounded-3 p-3 h-100"
          variants={cardVariants}
        >
          <motion.h3
            className="text-primary text-center fw-bold"
            variants={childVariants}
          >
            {role.label}
          </motion.h3>
          <motion.p
            className="lead text-center text-primary fw-semibold my-2"
            variants={childVariants}
          >
            {role.summary}
          </motion.p>
          <div className="row g-2">
            <motion.div className="col-6" variants={childVariants}>
              <motion.div className="list-unstyled">
                {role.core_focus.map((focus, index) => (
                  <motion.p key={index} className="m-2">
                    <span className="bg-warning-subtle text-primary fs-6 fw-semibold p-1">
                      {focus}
                    </span>
                  </motion.p>
                ))}
              </motion.div>
            </motion.div>
            <motion.div
              className="col-6 d-flex justify-content-end align-items-center"
              variants={childVariants}
            >
              <span style={{ fontSize: "4rem" }}>📊</span>
            </motion.div>
          </div>
          <motion.h3 className="text-primary fw-semibold mb-2">
            {lang === "es" ? "Tecnologías:" : "Technologies:"}
          </motion.h3>
          <div className="mb-3 d-flex flex-wrap gap-2">
            {role.preferences.tecnologies.map((s) => (
              <span
                key={s.name}
                className="d-flex flex-column align-items-center badge bg-light text-primary border"
              >
                <img src={s.icon} alt={s.name} />
                {s.name}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
