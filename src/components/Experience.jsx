import { useEffect, useState } from "react";
import "./css/experience.css"

export const Experience = () => {
    const asyncFetch = async function (url) {
        const objResponse = await fetch(url);
        if (!objResponse.ok) return new Error(`Error en fetch: status ${objResponse.status}`);
        return objResponse.json();
    };

    const createExperience = function (experience) {
        return `<section class="experience-info experience-hide">
            <div class="experience-header">
                ${experience.icono}
                <div class="experience-job-title-duration">
                    <p class="experience-job-duration">${experience.fecha}</p>
                    <h2 class="experience-job-title">${experience.titulo}</h2>
                </div>
            </div>
            <p class="experience-job-description">${experience.descripcion}</p>
        </section>`;
    }

    const [exp, setExp] = useState();

    const renderExp = async () => {
        //console.log(exp);
        const seccionExperiencias = document.querySelector(".experience-body");
        if (seccionExperiencias && exp) {
            seccionExperiencias.innerHTML = "";
            for (let i = 0; i < exp.length; i++) {
                seccionExperiencias.innerHTML += createExperience(exp[i]);
            }
            seccionExperiencias.firstElementChild.classList.remove("experience-hide");
        }
    }

    useEffect(() => {
        const fetchExp = async () => {
            const certsData = await asyncFetch(`https://6513692e8e505cebc2e9d111.mockapi.io/api/portfolio/experiencia-certificados/experiencias`);
            setExp(certsData["experiencias"]);
            //const proyectsData = asyncFetch(`https://6513692e8e505cebc2e9d111.mockapi.io/api/portfolio/proyectos/responsivo`);
            //console.log("proyectsData: ", proyectsData);
        }
        fetchExp();
    }, []);

    renderExp();

    return (
        <section className="experience experience__mobile-view desktop-view">
            <h2 className="experience-title">Experiencia</h2>
            <div className="experience-body"></div>
        </section>
    )
}
export default Experience;