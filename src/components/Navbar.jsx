import { motion, useScroll, useSpring } from "framer-motion";
import duck from "../assets/img/duck_icon.jpg";
import CV_ES from "/src/data/OLIVER_BARRA_CV_ES.pdf";
import CV_EN from "/src/data/OLIVER_BARRA_CV_EN.pdf";

export const Navbar = ({ lang, setLang, onToggleSidebar }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <nav className="navbar bg-primary-subtle sticky-top shadow-sm mb-4 d-print-none p-0">
      <div className="container-fluid py-2">
        <a
          className="navbar-brand d-flex align-items-center"
          href="https://github.com/cuackzoide"
        >
          <img
            src={duck}
            alt="Logo"
            width="30"
            height="24"
            className="d-inline-block align-text-top me-2"
          />
          <span className="fw-bold">Cuackzoide</span>
        </a>

        <div className="d-flex gap-2">
          <a
            className="btn btn-sm btn-dark"
            href={lang === "es" ? CV_ES : CV_EN}
            download={
              lang === "es"
                ? "OLIVER_BARRA_CV_ES.pdf"
                : "OLIVER_BARRA_CV_EN.pdf"
            }
          >
            <span className="fw-bold">
              {lang === "es" ? "Descargar CV" : "Download CV"}
            </span>
          </a>

          {/* Selector de Idioma */}
          <button
            className="btn btn-sm btn-dark"
            onClick={() => setLang(lang === "es" ? "en" : "es")}
          >
            {lang === "es" ? "EN" : "ES"}
          </button>
          {/* Mobile Sidebar Toggle */}
          <button
            className="btn btn-sm btn-outline-secondary d-lg-none"
            onClick={onToggleSidebar}
            aria-label="Toggle Sidebar"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Scroll Progress Bar */}
      <motion.div
        className="bg-primary"
        style={{
          scaleX,
          height: "4px",
          transformOrigin: "0%",
          width: "100%",
          position: "absolute",
          bottom: 0,
          left: 0,
        }}
      />
    </nav>
  );
};
