import "./css/skills.css"

export const Skills = () => {
    return (
        <section id="skills" className="mobile-view">
            <h2 id="skills-title">Skills</h2>
            <div id="skills-list">
                <ul className="skills-ul">
                    <li>HTML <span className="gray-bar"><span className="skill-bar-html"></span></span></li>
                    <li>CSS <span className="gray-bar"><span className="skill-bar-css"></span></span></li>
                </ul>
                <ul className="skills-ul">
                    <li>JS <span className="gray-bar"><span className="skill-bar-js"></span></span></li>
                    <li>React <span className="gray-bar"><span className="skill-bar-react"></span></span></li>
                </ul>
            </div>
        </section>
    )
}

export default Skills;

