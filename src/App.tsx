import { Nome } from "./components/Nome";

export function App() {
  return (
    <div>
      <h1>Componente App</h1>
      <Nome aluno="Lucas" idade={30} />
      <br />
      <Nome aluno="Jose Silva" idade={25} />
    </div>
  );
}
