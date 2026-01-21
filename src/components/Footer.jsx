export const Footer = ({ profile, contact, lang }) => {

    return (
        <div className="bg-primary-subtle shadow-sm ">
            <div className="container-fluid py-4">
                <div className="col-12 d-flex flex-row justify-content-between">
                    <h5 className="mb-1 fw-bold">{profile.name}</h5>
                    <div className="d-flex flex-wrap justify-content-center gap-2">
                        {contact.main.map((item, idx) => (
                            <a
                                key={idx}
                                href={item.url}
                                className="btn btn-sm btn-outline-primary rounded-pill"
                            >
                                {item.value}
                            </a>
                        ))}
                        {contact.social.map((link, idx) => (
                            <a
                                key={idx}
                                href={link.url}
                                target="_blank"
                                rel="noreferrer"
                                className="btn btn-sm btn-primary rounded-pill"
                            >
                                {link.platform}
                            </a>
                        ))}
                    </div>
                    <p className="fw-semibold mb-0 text-black">
                        {lang === "es"
                            ? "Desarrollado con React & Bootstrap"
                            : "Built with React & Bootstrap"}
                    </p>
                </div>
            </div>
        </div>
    );
};
