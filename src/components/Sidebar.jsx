import React from "react";
import { Skills } from "./Skills";
import { Certifications } from "./Certifications";
import { Education } from "./Education";

export const Sidebar = ({ cvData, lang, activeRole }) => {
    return (
        <>
            <Skills skills={cvData.skills} lang={lang} />
            <Certifications
                certifications={cvData.certifications}
                activeRole={activeRole}
                lang={lang}
            />
            <Education education={cvData.education} lang={lang} />
        </>
    );
};
