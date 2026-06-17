import React, { useState } from "react";
import dataEs from "./data/cvData_es.json";
import dataEn from "./data/cvData_en.json";
import "bootstrap/dist/css/bootstrap.min.css";

// Importación de componentes
import { Navbar } from "./components/Navbar";
import { Header } from "./components/Headers";
import { WebSummary } from "./components/WebSummary";
import { AnalystSummary } from "./components/AnalystSummary";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Sidebar } from "./components/Sidebar";
import { Footer } from "./components/Footer";

function App() {
  const [lang, setLang] = useState("es");
  const cvData = lang === "es" ? dataEs : dataEn;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="d-flex flex-column min-vh-100 app-wrapper">
      <Sidebar
        cvData={cvData}
        lang={lang}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      <Navbar
        lang={lang}
        setLang={setLang}
        onOpenSidebar={() => setIsSidebarOpen(true)}
      />
      <div className="container m-auto p-2">
        <div className="row">
          <header className="col-12">
            <Header
              profile={cvData.profile}
              contact={cvData.contact}
              lang={lang}
            />
          </header>
          <main className="col-12 mt-2">
            <WebSummary
              professionalProfile={cvData.professional_profile}
              lang={lang}
            />
            <Projects projects={cvData.projects} lang={lang} />
            <AnalystSummary
              professionalProfile={cvData.professional_profile}
              lang={lang}
            />
            <Experience experience={cvData.experience} lang={lang} />
          </main>
        </div>
      </div>
      {/* Footer (Full Width) */}
      <Footer profile={cvData.profile} contact={cvData.contact} lang={lang} />
    </div>
  );
}

export default App;
