import React from 'react'
import './index.css'

function Benefits() {
    return(
        <div>
            <div >
                <h1 className="title">Benefícios da Plataforma</h1>
            </div>
            <div className="row">
                <div className="col-6" >
                    <div>
                        <h3>Garantia do descarte certo</h3>
                        <p>Todo resíduo que é coletado através de nossos serviços tem a garantia da destinação final correta e adequada, realizada apenas em locais licenciados e regularizados pelos órgãos ambientais responsáveis.</p>
                    </div>
                    <div>
                        <h3>Limpeza Urbana </h3>
                        <p>Garantindo que o descarte seja feito apenas em locais corretos, nós estamos evitando que estes resíduos sejam descartados em vias públicas ou em áreas impróprias da cidade,  contribuindo assim, com a limpeza urbana e sua manutenção</p>
                    </div>
                    <div>
                        <h3>Economia Circular </h3>
                        <p>Com a utilização e retorno dos resíduos em novas construções, estamos colocando em prática o conceito de economia circular, que baseia-se na redução, reutilização, recuperação e reciclagem de materiais e energia, prolongando a vida útil destes recursos.</p>
                    </div> 
                </div>
                <div className="col-6" >
                    <div>
                        <h3>Preservação Ambiental</h3>
                        <p>Através da reciclagem dos resíduos coletados e a reinserção na cadeia de produção, estamos contribuindo com a diminuição de extração de novos recursos naturais.</p>
                    </div>
                    <div>
                        <h3>Reciclagem</h3>
                        <p>Nosso serviço conta com parceiros que trabalham com o beneficiamento e a reciclagem dos resíduos da construção civil coletados por nós. O processo da reciclagem garante o retorno destes resíduos a cadeia produtiva no setor da construção, como material chamado agregado reciclado. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Benefits;