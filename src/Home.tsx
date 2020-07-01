import React from 'react'
import {Link} from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div>
      <p> Para acessar as respectivas páginas do sistema, acesse: </p>
      <Link to="/projects"> Ver lista de projetos </Link> <br/>
      <Link to="/create-user"> Criar usuário </Link> <br/>
      <Link to="/create-project"> Criar projeto </Link> <br/>
    </div>
  );
}

export default Home;
