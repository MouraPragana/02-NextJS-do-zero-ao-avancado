import { useState } from "react";

export function App() {
  const [aluno, setAluno] = useState<string>("Sujeito Programador");

  function handleChangeName(name: string) {
    setAluno(name);
  }

  return (
    <div>
      <h1>Componente App</h1>
      <h2>Olá: {aluno}</h2>
      <button onClick={() => handleChangeName("Lucas Oliveira")}>
        Mudar Nome
      </button>
      <br />
    </div>
  );
}
