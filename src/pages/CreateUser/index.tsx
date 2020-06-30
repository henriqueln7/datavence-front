import React, {ChangeEvent, FormEvent, useState} from 'react';
import './styles.css';
import api from "../../services/api";

const CreateUser: React.FC = () => {
    const [inputData, setInputData] = useState({
        name: '',
        username: '',
        password: '',
        birthday: new Date()
    });

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        setInputData({...inputData, [event.target.name]: event.target.value });
    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        await api.post("/users", inputData);
    }

    return (
        <div id="page-create-user">

            <form onSubmit={handleSubmit}>
                <h1>Cadastro de novo usuário</h1>

                <fieldset>
                    <legend>
                        <h2>Dados</h2>
                    </legend>

                    <div className="field">
                        <label htmlFor="name">Nome</label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Nome"
                          onChange={handleInputChange}
                          required
                          autoFocus
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="username">Nome de usuário</label>
                        <input
                          type="text"
                          name="username"
                          id="username"
                          onChange={handleInputChange}
                          required
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="whatsapp">Senha</label>
                        <input
                          type="password"
                          name="password"
                          placeholder="Senha"
                          onChange={handleInputChange}
                          id="password"
                          required
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="birthday">Data de nascimento</label>
                    </div>
                    <input
                      type="date"
                      name="birthday"
                      id="birthday"
                      onChange={handleInputChange}
                    />
                </fieldset>
                <button type="submit">
                    Cadastrar novo usuário
                </button>
            </form>
        </div>
    )
}

export default CreateUser;
