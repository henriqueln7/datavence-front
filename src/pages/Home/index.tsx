import React from "react";

import './styles.css';

const Home: React.FC = () => {
    return (
        <div id="page-home">
            <div className="content">
                <header>

                </header>

                <main>
                    <h1>Seu marketplace de coleta de resíduos.</h1>
                    <p>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</p>

                    <a href="/create-point">
                        <span>
                        </span>
                        <strong>Cadastre um ponto de coleta</strong>
                    </a>
                </main>
            </div>
        </div>
    )
}

export default Home;
