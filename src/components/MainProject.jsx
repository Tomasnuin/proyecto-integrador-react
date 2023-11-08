const MainProject = ({ mainProyect }) => {
    return (
        <div className="development-frame">
            <img className="project-image"
                src={mainProyect.img}
                alt="Example project image" />
            <div className="project-info">
                <div className="project-tags-title">
                    <p className="project-tags">{mainProyect.etiquetas}</p>
                    <h2 className="project-title">{mainProyect.titulo}</h2>
                </div>
                <p className="project-description">
                    {mainProyect.descripcion}
                </p>
                <div className="project-buttons">
                    <button value={mainProyect.demo} className="button-demo" onClick={(e) => { window.alert(e.target.attributes["value"].value); }}>Demo</button>
                    <button value={mainProyect.code} className="button-code" onClick={(e) => { window.alert(e.target.attributes["value"].value); }}>Code</button>
                </div>
            </div>
        </div>
    )
}

export default MainProject