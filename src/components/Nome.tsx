interface INome {
  aluno: string;
  idade: number;
}

export function Nome({ aluno, idade }: INome) {
  return (
    <span>
      Bem vindo: {aluno} - Idade: {idade} anos
    </span>
  );
}
