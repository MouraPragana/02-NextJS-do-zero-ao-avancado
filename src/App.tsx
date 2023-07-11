import { ChangeEvent, FormEvent, useState } from "react";

export function App() {
  const [input, setInput] = useState<string>("");
  const [tarefas, setTarefas] = useState<string[]>([
    "Pagar a conta de luz",
    "Estudar ReactTS",
  ]);

  function handleRegister(e: FormEvent) {
    e.preventDefault();
    setTarefas((oldState) => [...oldState, input]);
    setInput("");
  }

  return (
    <div>
      <form onSubmit={handleRegister}>
        <label>Nome da tarefa:</label>
        <br />
        <input
          placeholder="Digite uma tarefa"
          value={input}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setInput(e.target.value)
          }
        />
        <br />
        <button type="submit">Registrar</button>
      </form>

      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}
