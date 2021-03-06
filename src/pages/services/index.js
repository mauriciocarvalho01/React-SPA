import React from 'react';



export default function Services() {
    return (
        <section className="resume-section" id="atendimento">
            <div className="resume-section-content">
                <h2 className="mb-5">Atendimento</h2>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">presencialmente e online</h3>
                        <div className="subheading mb-3">Adolescentes, adultos e idosos</div>
                        <p>Realizo atendimentos em psicoterapia, presencialmente e online, tendo como público adolescentes, adultos e idosos.</p>
                    </div>
                    <div className="flex-shrink-0">
                        <span className="text-primary">
                        <a className="h3" href="#about">Dúvidas</a>
                        </span>
                    </div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">Observação</h3>
                        <div className="subheading mb-3">COVID-19</div>
                        <p>Atualmente, devido ao contexto da pandemia e à necessidade de preservar a saúde do público, os atendimentos online estão tendo prioridade sobre os atendimentos presenciais. Em 2021 será criado um plano de transição para os atendimentos presenciais, de acordo com o contexto futuro e interesse de cada pessoa.
Observação: É possível realizar os atendimentos presencialmente, caso seja entendido que seja necessário.
</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
