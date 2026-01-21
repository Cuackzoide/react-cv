import React from 'react'
import { motion } from 'framer-motion';

export const Summary = ({ professionalProfile }) => {
    const roles = [
        { id: "data_analyst", ...professionalProfile.roles.data_analyst },
        { id: "web_developer", ...professionalProfile.roles.web_developer }
    ];
    const containerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.2,
                duration: 0.6,
                when: "beforeChildren",
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 }
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.3,
                when: "beforeChildren",
                staggerChildren: 0.1  // Efecto de baraja dentro de cada tarjeta
            }
        }
    };

    const childVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
    };
    return (
        <motion.div
            className='row g-2'
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            {roles.map((role) => (
                <motion.div key={role.id} className='col-12 col-lg-6' variants={itemVariants}>
                    <motion.div
                        className='bg-success-subtle rounded-3 p-3 h-100'
                        variants={cardVariants}
                    >
                        <motion.h3 className="text-primary fw-bold" variants={childVariants}>
                            {role.label}
                        </motion.h3>
                        <motion.p className="lead" variants={childVariants}>
                            {role.summary}
                        </motion.p>
                        <div className="row g-2">
                            <motion.div className="col-6" variants={childVariants}>
                                <ul className="list-unstyled">
                                    {role.core_focus.map((focus, index) => (
                                        <li className="badge bg-light text-primary border mb-1" key={index}>
                                            {focus}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                            <motion.div className="col-6 d-flex justify-content-end align-items-center" variants={childVariants}>
                                <span style={{ fontSize: '4rem' }}>{role.id === "data_analyst" ? "📊" : "💻"}</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            ))}
        </motion.div>
    );
};
