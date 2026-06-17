import { Skills } from "./Skills";
import { Certifications } from "./Certifications";
import { Education } from "./Education";

export const Sidebar = ({ cvData, lang, isOpen, onClose }) => {
  return (
    <>
      <div
        className={`offcanvas offcanvas-end bg-light text-dark ${isOpen ? "show" : ""}`}
        tabIndex="-1"
        style={{
          visibility: isOpen ? "visible" : "hidden",
          transition: "transform 0.3s ease-in-out",
          width: "350px",
        }}
      >
        <div className="p-3 d-flex justify-content-end border-bottom border-secondary">
          <button
            type="button"
            className="btn-close btn-close"
            onClick={onClose}
          ></button>
        </div>
        <div className="offcanvas-body d-flex flex-column gap-4">
          <Skills skills={cvData.skills} lang={lang} />
          <Certifications certifications={cvData.certifications} lang={lang} />
          <Education education={cvData.education} lang={lang} />
        </div>
      </div>
      {isOpen && (
        <div className="offcanvas-backdrop fade show" onClick={onClose}></div>
      )}
    </>
  );
};
