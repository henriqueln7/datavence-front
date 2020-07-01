import React, {ChangeEvent, FormEvent, useState} from 'react';
import './styles.css';
import api from "../../services/api";
import {useHistory} from "react-router-dom";


const CreateUser: React.FC = () => {

    const history = useHistory();

    const [inputData, setInputData] = useState({
        name: '',
        birthday: new Date()
    });

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        setInputData({...inputData, [event.target.name]: event.target.value });
    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        await api.post("/users", inputData);
        history.goBack();
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
