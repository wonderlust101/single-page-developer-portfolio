import Button from "../../../components/Button";

import "./Projects.scss";

type project = {
    title: string;
    tools: string[];
    projectUrl: string;
    codeUrl: string;
}

const projects: project[] = [
    {
        "title"     : "Design Portfolio",
        "tools"     : ["HTML", "CSS"],
        "projectUrl": "#",
        "codeUrl"   : "#"
    },
    {
        "title"     : "E-Learning Landing Page",
        "tools"     : ["HTML", "CSS"],
        "projectUrl": "#",
        "codeUrl"   : "#"
    },
    {
        "title"     : "Todo Web App",
        "tools"     : ["HTML", "CSS", "Javascript"],
        "projectUrl": "#",
        "codeUrl"   : "#"
    },
    {
        "title"     : "Entertainment Web App",
        "tools"     : ["HTML", "CSS", "Javascript"],
        "projectUrl": "#",
        "codeUrl"   : "#"
    },
    {
        "title"     : "Memory Game",
        "tools"     : ["HTML", "CSS", "Javascript"],
        "projectUrl": "#",
        "codeUrl"   : "#"
    },
    {
        "title"     : "Art Gallery Showcase",
        "tools"     : ["HTML", "CSS", "Javascript"],
        "projectUrl": "#",
        "codeUrl"   : "#"
    },
];

export default function Projects() {
    return (
        <section className="projects">
            <header className="projects__header">
                <h2>Projects</h2>
                <Button variant="button--green">Contact Me</Button>
            </header>

            <ul className="projects__projects-list">
                {projects.map((project, index) => (
                    <li key={index} className="projects__project">
                        <picture>
                            <source srcSet={`./images/thumbnail-project-${index + 1}-large.webp`} media='(min-width: 48rem)'/>
                            <img
                                className="projects__project-img"
                                src={`./images/thumbnail-project-${index + 1}-small.webp`}
                                alt={`Preview of ${project.title}`}
                            />
                        </picture>

                        <div className="projects__project-text">
                            <h3 className="projects__project-title">{project.title}</h3>

                            <ul className="projects__tools">
                                {project.tools.map((tool) => (
                                    <li><p className="projects__project-tools">{tool}</p></li>
                                ))}
                            </ul>
                        </div>

                        <div className="projects__buttons">
                            <Button variant="button--green">View Project</Button>
                            <Button variant="button--green">View Code</Button>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}