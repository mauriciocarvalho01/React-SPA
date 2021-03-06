import React from 'react';



export default function Contact() {
    return (
        <section className="resume-section" id="contato">
            <div className="resume-section-content">
                <h2 className="mb-5">CONTATOS</h2>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">Horários de atendimento:</h3>
                        <div className="subheading mb-3">Segunda a Sexta, das 8:00 às 20:00</div>
                        <p>Confira os horários de atendimento e locais para atendimentos presenciais!</p>
                    </div>
                    <div className="flex-shrink-0">
                        <span className="text-primary">
                        <a className="h3" href="#about">Dúvidas</a>
                        </span>
                    </div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">Locais para atendimentos</h3>
                        <div className="subheading mb-3">presenciais</div>
                        <p><span className="subheading mb-3">Sala ABC,</span>
                            &nbsp;R. Catequese, 1171, Centro, Santo André/SP.
                        </p>
                    </div>
                </div>
                <div className="social-icons">
                        <a className="social-icon" href="#"><i className="fab fa-whatsapp"></i></a>
                        <a className="social-icon" href="#"><i className="fab fa-instagram"></i></a>
                        <a className="social-icon" href="#"><i className="fab fa-facebook-f"></i></a>
                    </div>
            </div>
        </section>
    );
}
