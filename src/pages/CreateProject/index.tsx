import React, {FormEvent, useState} from 'react';
import './styles.css'
import api from "../../services/api";

const CreateProject: React.FC = () => {

  const [name, setName] = useState('');

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    await api.post("/projects", { name });
  }
  return (
    <div id="page-create-project">

      <form onSubmit={handleSubmit}>
        <h1>Cadastro de novo projeto</h1>

        <fieldset>
          <div className="field">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              name="name"
              placeholder="Nome do projeto"
              onChange={event => setName(event.target.name)}
              required
              autoFocus
            />
          </div>
        </fieldset>
          <button type="submit">
          Cadastrar novo projeto
        </button>
      </form>
    </div>
  )
}
export default CreateProject;
