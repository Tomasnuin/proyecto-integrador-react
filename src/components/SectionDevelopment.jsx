import { useEffect, useState } from "react";
import "./css/development.css"
import Project from "./Project";

export const SectionDevelopment = ({ proyectType, page, setMainProyect, setMaxPages }) => {
    const asyncFetch = async function (url) {
        const objResponse = await fetch(url);
        if (!objResponse.ok) return new Error(`Error en fetch: status ${objResponse.status}`);
        return objResponse.json();
    };

    const [projects, setProjects] = useState();

    useEffect(() => {
        const fetchExp = async () => {
            const certsData = await asyncFetch(`https://6513692e8e505cebc2e9d111.mockapi.io/api/portfolio/proyectos/${proyectType}`);
            setProjects(certsData.proyectos);
            setMaxPages(Math.ceil(certsData.proyectos.length / 3));
            setMainProyect(certsData.proyectos[0]);
            //const proyectsData = asyncFetch(`https://6513692e8e505cebc2e9d111.mockapi.io/api/portfolio/proyectos/responsivo`);
            //console.log("proyectsData: ", proyectsData);
        }
        fetchExp();
    }, [setProjects, proyectType, setMainProyect, setMaxPages]);
    /*
    `<section class="mobile-view desktop-view development-portrait">
        <div class="development-frame-portrait">
            <img class="project-image"
                src="${proyecto.img}"
                alt="Example project image">
            <div class="project-info">
                <div class="project-tags-title">
                    <p class="project-tags">${proyecto.etiquetas}</p>
                    <h2 class="project-title">${proyecto.titulo}</h2>
                </div>
                <p class="project-description">
                    ${proyecto.descripcion}
                </p>
                <div class="project-buttons">
                    <button value="${proyecto.demo}" class="button-demo">Demo</button>
                    <button value="${proyecto.code}" class="button-code">Code</button>
                </div>
            </div>
        </div>
    </section>`
    */

    return (
        <div id="section-development" className="development-hide">
            <Project project={projects ? projects[page * 3] : ""} />
            <Project project={projects ? projects[page * 3 + 1] : ""} />
            <Project project={projects ? projects[page * 3 + 2] : ""} />
        </div>
    )
}

export default SectionDevelopment;