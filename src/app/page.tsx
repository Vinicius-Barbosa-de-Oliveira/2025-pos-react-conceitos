"use client";

const Titulo = () => <h1>React - Conceitos básicos</h1>;

const SubTitulo = () => (<h2>Lista de tarefas</h2>);

const tarefa = () => (<h3>Projeto PIU</h3>);

const Cabecalho = () => (
  <>
    <Titulo />
    <SubTitulo />
    <tarefa />
  </>
);

const Home = () => {
  return <Cabecalho />;
}

export default Home;
