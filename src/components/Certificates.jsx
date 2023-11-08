import { useEffect, useState } from "react";
import "./css/certificates.css"

export const Certificates = () => {

    const asyncFetch = async function (url) {
        const objResponse = await fetch(url);
        if (!objResponse.ok) return new Error(`Error en fetch: status ${objResponse.status}`);
        return objResponse.json();
    };

    const createCertificate = function (certificate) {
        return `<section class="certificates-info certificates-hide">
                <img class="certificates-image"
                    src="${certificate.img}"
                    alt="Certificado de front-end">
                <div class="certificates-header">
                    <h2 class="certificates-description">${certificate.titulo}</h2>
                    <p class="certificates-duration">${certificate.fecha}</p>
                </div>
            </section>`;
    }

    const [certs, setCerts] = useState();

    const renderCerts = async () => {
        //console.log(certs);
        const seccionCertificados = document.querySelector("#certificates-frame");
        if (seccionCertificados && certs) {
            seccionCertificados.innerHTML = "";
            for (let i = 0; i < certs.length; i++) {
                seccionCertificados.innerHTML += createCertificate(certs[i]);
            }
            seccionCertificados.firstElementChild.classList.remove("certificates-hide");
        }
    }

    useEffect(() => {
        const fetchCerts = async () => {
            const certsData = await asyncFetch(`https://6513692e8e505cebc2e9d111.mockapi.io/api/portfolio/experiencia-certificados/certificados`);
            setCerts(certsData["certificados"]);
            //const expData = asyncFetch(`https://6513692e8e505cebc2e9d111.mockapi.io/api/portfolio/experiencia-certificados/experiencias`);
            //console.log("expData: ", expData["experiencias"]);
            //const proyectsData = asyncFetch(`https://6513692e8e505cebc2e9d111.mockapi.io/api/portfolio/proyectos/responsivo`);
            //console.log("proyectsData: ", proyectsData);

        }
        fetchCerts();
    }, []);

    renderCerts();

    return (
        <section className="certificates mobile-view">

            <h2 className="certificates-title">Certificados</h2>

            <div id="certificates-frame">

            </div>
        </section>
    )
}

export default Certificates