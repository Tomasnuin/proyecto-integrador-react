const Project = ({ project }) => {
    if (!project) {
        return;
    }
    return (
        <section className="desktop-view development-portrait">
            <div className="development-frame-portrait">
                <img className="project-image" src={project.img} alt="Example project image" />
                <div className="project-info">
                    <div className="project-tags-title">
                        <p className="project-tags">{project.etiquetas}</p>
                        <h2 className="project-title">{project.titulo}</h2>
                    </div>
                    <p className="project-description">
                        {project.descripcion}
                    </p>
                    <div className="project-buttons">
                        <button value={project.demo} className="button-demo" onClick={(e) => { window.alert(e.target.attributes["value"].value); }}>Demo</button>
                        <button value={project.code} className="button-code" onClick={(e) => { window.alert(e.target.attributes["value"].value); }}>Code</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Project