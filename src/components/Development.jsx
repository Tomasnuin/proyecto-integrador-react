import "./css/development.css"
import MainProject from './MainProject';

export const Development = ({ mainProyect }) => {
    //console.log("MainProject", mainProyect);
    return (
        <section className="development section-development__mobile-view desktop-view development-portrait-2">
            <MainProject mainProyect={mainProyect ? mainProyect : ""} />
        </section>
    )
}

export default Development;