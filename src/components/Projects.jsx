import { motion } from "framer-motion";

export const Projects = ({ projects, lang }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
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
      <h2 className="h2 text-primary fw-bold text-center border-bottom pb-2 mb-4">
        {lang === "es" ? "Proyectos Destacados" : "Featured Projects"}
      </h2>
      <div className="row g-4">
        {projects.map((project) => (
          <motion.div
            key={project.slug}
            className="col-12"
            variants={itemVariants}
          >
            <motion.div
              className="card h-100 shadow-sm border-0 border-start border-4 border-primary overflow-hidden"
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
              }}
            >
              <div className="card-body">
                <h5 className="fw-bold mb-3">{project.name}</h5>
                <div className="mb-3 d-flex flex-wrap gap-2">
                  {project.stack.map((s) => (
                    <span
                      key={s}
                      className="badge bg-light text-primary border"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <p className="small text-muted mb-4">{project.description}</p>
                <div className="d-flex gap-3">
                  <motion.a
                    href={project.github}
                    className="btn btn-secondary w-25"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    GitHub
                  </motion.a>
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      className="btn btn-primary w-25"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
