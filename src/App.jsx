import { Profile, Skills, Certificates, SelectProyectType, Development, Experience, SectionDevelopment, Paginate } from "./Imports.jsx"
import "./components/css/proyects-select-1.css"
import { useState } from "react";

function App() {
  const [proyectType, setProyectType] = useState("responsivo");
  const [mainProyect, setMainProyect] = useState();
  const [page, setPage] = useState(2);
  const [maxPages, setMaxPages] = useState(4);

  return (
    <main id="portfolio">
      <Profile />
      <Skills />
      <Certificates />
      <SelectProyectType setProyectType={setProyectType} setPage={setPage} />
      <Development mainProyect={mainProyect} />
      <Experience />
      <SectionDevelopment proyectType={proyectType} page={page - 1} setMainProyect={setMainProyect} setMaxPages={setMaxPages} />
      <Paginate setPage={setPage} page={page} maxPages={maxPages} />
    </main>
  )
}

export default App
