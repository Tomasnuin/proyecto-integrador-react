function SelectProyectType({ setProyectType, setPage }) {

    return (
        <section id="proyects-select-1" className="mobile-view">
            <h2 id="proyects-select-title">Proyectos(3)</h2>
            <div className="buttons">
                <button onClick={({ target }) => {
                    setProyectType("responsivo");
                    setPage(2);
                    if (target.classList.value.includes("secondary-button")) {
                        const primaryBtn = document.querySelector(".primary-button");
                        primaryBtn.classList.add("secondary-button");
                        primaryBtn.classList.remove("primary-button");

                        target.classList.add("primary-button");
                        target.classList.remove("secondary-button");
                    }
                }} className="primary-button button-text-responsivo">
                    Responsivo
                </button>
                <button onClick={({ target }) => {
                    setProyectType("javascript");
                    setPage(2);
                    if (target.classList.value.includes("secondary-button")) {
                        const primaryBtn = document.querySelector(".primary-button");
                        primaryBtn.classList.add("secondary-button");
                        primaryBtn.classList.remove("primary-button");
                        target.classList.add("primary-button");
                        target.classList.remove("secondary-button");
                    }
                }} className="secondary-button button-text-js">
                    JavaScript
                </button>
                <button onClick={({ target }) => {
                    setProyectType("react");
                    setPage(2);
                    if (target.classList.value.includes("secondary-button")) {
                        const primaryBtn = document.querySelector(".primary-button");
                        primaryBtn.classList.add("secondary-button");
                        primaryBtn.classList.remove("primary-button");
                        target.classList.add("primary-button");
                        target.classList.remove("secondary-button");
                    }
                }} className="secondary-button button-text-react">
                    React
                </button>
            </div>
        </section>
    )
}

export default SelectProyectType