import React, {useEffect, useState} from 'react'
import api from "../../services/api";
import {Link} from "react-router-dom";
import './styles.css'

type Project = {
  id: number;
  name: string;
}

type Props = {
  project: Project
}

const ProjectListItem: React.FC<Props> = (props) => {
  const {project} = props;
  return (
    <div className="project-list-card">

      <span className="project-list-title">{project.name}</span>
      <Link to={`/projects/${project.id}`} className="project-list-link"> Visualizar projeto e seus membros</Link>
    </div>
  )
}

const ProjectList: React.FC = () => {

  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    api.get<Project[]>("/projects").then((response) => {
      setProjects(response.data);
    })
  }, [])

  return (
    <div>
      <h2 className="title">Lista de projetos</h2>

      <div className="users-grid">
        {
          projects.map((project) => (
            <ProjectListItem project={project}/>
          ))
      }
      </div>

    </div>
  );
}

export default ProjectList;
