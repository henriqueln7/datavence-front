import React, {FormEvent, useEffect, useState} from 'react'
import {Link, useParams, useHistory} from "react-router-dom";
import api from "../../services/api";
import './styles.css';
type Project = {
  id: string;
  name: string;
  users: User[]
}

type User = {
  id: number;
  name: string;
  birthday: string;
}

const ProjectDetails: React.FC = () => {
  const { id } = useParams();
  const history = useHistory();
  const [project, setProject] = useState<Project | null>(null);
  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    if(project !== null) {
      const selectedIds = project.users.map(user => user.id);
      setSelectedUsers(selectedIds);
    }
  }, [project])

  useEffect(() => {
    api.get<Project>(`/projects/${id}`).then((response) => {
      setProject(response.data);
    })
  }, [id])
  useEffect(() => {
    api.get<User[]>("/users").then(response => setUsers(response.data));
  }, [])

  function handleClick(id: number) {
    if(selectedUsers.includes(id)) {
      const filteredUsers = selectedUsers.filter((user) => user !== id);
      setSelectedUsers(filteredUsers);
    } else {
      setSelectedUsers([...selectedUsers, id]);
    }
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    await api.post(`/projects/${id}/users`, selectedUsers);
    alert("Membros adicionados");
    history.goBack();
  }

  if (project === null) {
    return (
      <div>
        <h1>Nada por aqui...</h1>
        <Link to="/projects"> Voltar </Link>
      </div>
    )
  }

  return (
    <div>
      <h2>Nome do projeto: {project.name}</h2>
      <p>Para adicionar membros no projeto, basta clicar nos membros abaixo.</p>
      <h2>Membros do projeto: </h2>
      <div className="users-grid">
      {
        users.map((user) => (
          <li className={selectedUsers.includes(user.id) ? "selected" : ""} onClick={() => handleClick(user.id)}>
            <span>{user.name} </span>
          </li>
        ))
      }
      </div>
      <form>
        <button className="button-add-users" onSubmit={handleSubmit}>
          Adicionar membros ao projeto
        </button>
      </form>
    </div>
  );
}

export default ProjectDetails;
