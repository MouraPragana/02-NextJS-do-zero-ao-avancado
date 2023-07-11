import { useEffect, useState } from "react";
import "./style.css";

interface INutri {
  id: number;
  titulo: string;
  capa: string;
  subtitulo: string;
  categoria: string;
}

export function App() {
  const [nutri, setNutri] = useState<INutri[]>([]);

  useEffect(() => {
    function loadApi() {
      const url = "https://sujeitoprogramador.com/rn-api/?api=posts";
      fetch(url).then((result) => {
        result.json().then((json) => {
          setNutri(json);
        });
      });
    }

    loadApi();
  }, []);

  return (
    <div className="container">
      <header>
        <strong>React Nutri</strong>
      </header>
      {nutri.map((item) => {
        return (
          <article key={item.id} className="post">
            <strong className="titulo">{item.titulo}</strong>
            <img className="capa" src={item.capa} alt={item.titulo} />
            <p className="subtitulo">{item.subtitulo}</p>
            <p className="categoria">Categoria: {item.categoria}</p>
            <a className="botao" href="*">
              Acessar
            </a>
          </article>
        );
      })}
    </div>
  );
}
