import { motion } from "framer-motion";
import avatar_ia from "../assets/img/avatar_ia.jpeg";

export const Header = ({ profile, contact }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <motion.div
      className="w-100 p-3 mb-3 bg-success-subtle rounded-3"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="row flex-row align-items-center g-3 g-lg-5">
        <motion.div className="col-6 col-md-4 col-lg-3" variants={itemVariants}>
          <img
            src={avatar_ia}
            alt="Avatar IA"
            className="img-fluid rounded shadow-sm"
          />
        </motion.div>
        <div className="col-6 col-md-8 col-lg-9">
          <motion.h1 className="display-5 fw-bold text-start mb-4" variants={itemVariants}>
            {profile.name}
          </motion.h1>
          <motion.p className="lead text-primary fw-semibold" variants={itemVariants}>
            {profile.title}
          </motion.p>
          <div className="d-flex flex-wrap justify-content-start gap-2">
            {contact.social.map((link, idx) => (
              <motion.a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary rounded-pill"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.platform}
              </motion.a>
            ))}
            {contact.main.map((item, idx) => (
              <motion.a
                key={idx}
                href={item.url}
                className="btn btn-outline-primary rounded-pill"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.value}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

