import React from 'react'
import './BenefitsStyles.css'
import Texts from './texts.json'

function BenefitsComponent() {
    return(
        <div>
            <div >
                <h1 id ="Beneficios" className="title">Benefícios da Plataforma</h1>
            </div>
            <div className="row">
                <div className="col-sm">
                    <div className="benefits-card">
                        <h3 className="title-card">{Texts.card1.title}</h3>
                        <p className="text-card">{Texts.card1.content}</p>
                    </div>
                    <div className="benefits-card">
                        <h3 className="title-card">{Texts.card2.title}</h3>
                        <p className="text-card">{Texts.card2.content}</p>
                    </div>
                    <div className="benefits-card">
                        <h3 className="title-card">Economia Circular </h3>
                        <p className="text-card">Com a utilização e retorno dos resíduos em novas construções, estamos colocando em prática o conceito de economia circular, que baseia-se na redução, reutilização, recuperação e reciclagem de materiais e energia, prolongando a vida útil destes recursos.</p>
                    </div> 
                </div>
                <div className="col-sm">
                    <div className="benefits-card">
                        <h3 className="title-card">Preservação Ambiental</h3>
                        <p className="text-card">Através da reciclagem dos resíduos coletados e a reinserção na cadeia de produção, estamos contribuindo com a diminuição de extração de novos recursos naturais.</p>
                    </div>
                    <div className="benefits-card">
                        <h3 className="title-card">Reciclagem</h3>
                        <p className="text-card">Nosso serviço conta com parceiros que trabalham com o beneficiamento e a reciclagem dos resíduos da construção civil coletados por nós. O processo da reciclagem garante o retorno destes resíduos a cadeia produtiva no setor da construção, como material chamado agregado reciclado. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BenefitsComponent;