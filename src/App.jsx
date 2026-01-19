import React, { useState } from "react";
import dataEs from "./data/cvData_es.json";
import dataEn from "./data/cvData_en.json";
import "bootstrap/dist/css/bootstrap.min.css";

// Importación de componentes
import { Navbar } from "./components/Navbar";
import { Header } from "./components/Headers";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Sidebar } from "./components/Sidebar";
import { Footer } from "./components/Footer";

function App() {
  const [lang, setLang] = useState("es");
  const [role, setRole] = useState("web_developer");
  const [showSidebar, setShowSidebar] = useState(false);

  const cvData = lang === "es" ? dataEs : dataEn;
  return (
    <div className="d-flex flex-column min-vh-100 app-wrapper">
      <Navbar
        lang={lang}
        setLang={setLang}
        onToggleSidebar={() => setShowSidebar(!showSidebar)}
      />
      <div className="container m-auto p-2">
        <div className="row">
          <header className="col-12">
            <Header profile={cvData.profile} contact={cvData.contact} lang={lang} />
          </header>
          <main className="col-12 col-lg-9 mt-2">
            <Experience experience={cvData.experience} lang={lang} />
            <Projects projects={cvData.projects} activeRole={role} lang={lang} />
          </main>

          {/* Desktop Sidebar (visible on lg+) */}
          <aside className="col-lg-3 d-none d-lg-block py-3">
            <Sidebar cvData={cvData} lang={lang} activeRole={role} />
          </aside>
        </div>

        {/* Mobile Sidebar (Offcanvas) */}
        <div
          className={`offcanvas offcanvas-end ${showSidebar ? "show" : ""}`}
          tabIndex="-1"
          style={{ visibility: showSidebar ? "visible" : "hidden" }}
        >
          <header className="offcanvas-header">
            <h5 className="offcanvas-title">Sidebar</h5>
            <button
              type="button"
              className="btn-close"
              onClick={() => setShowSidebar(false)}
            ></button>
          </header>
          <section className="offcanvas-body">
            <Sidebar cvData={cvData} lang={lang} activeRole={role} />
          </section>
        </div>

        {/* Backdrop */}
        {showSidebar && (
          <div
            className="offcanvas-backdrop fade show"
            onClick={() => setShowSidebar(false)}
          ></div>
        )}
      </div>
      {/* Footer (Full Width) */}
      <Footer
        profile={cvData.profile}
        contact={cvData.contact}
        lang={lang} />
    </div>
  );
}

export default App;
