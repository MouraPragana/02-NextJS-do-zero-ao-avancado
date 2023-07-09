import { ChangeEvent, FormEvent, useState } from "react";

interface Iuser {
  nome: string;
  email: string;
  idade: string;
}

export function App() {
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [idade, setIdade] = useState<string>("");
  const [user, setUser] = useState({ nome: "", email: "", idade: "" } as Iuser);

  function handleRegister(e: FormEvent) {
    e.preventDefault();
    alert("Usuario registrado com sucesso !");
    setUser({ email, idade, nome });
  }

  return (
    <div>
      <form onSubmit={handleRegister}>
        <h1>Cadastrando usuário</h1>
        <label>Nome:</label>
        <br />
        <input
          placeholder="Digite seu nome"
          value={nome}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setNome(e.target.value)
          }
        />
        <br />

        <label>Email:</label>
        <br />
        <input
          placeholder="Digite seu email"
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
        <br />

        <label>Idade:</label>
        <br />
        <input
          placeholder="Digite sua idade"
          value={idade}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setIdade(e.target.value)
          }
        />
        <br />

        <button type="submit">Registrar</button>
      </form>
      <br />
      <br />

      <div>
        <span>Bem vindo: {user.nome}</span>
        <br />
        <span>Idade: {user.idade}</span>
        <br />
        <span>Email: {user.email}</span>
      </div>
    </div>
  );
}
