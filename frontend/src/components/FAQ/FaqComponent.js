import React from 'react'
import { Accordion, Card, Button } from "react-bootstrap";
import Icone from '../images/icon-faq-novo.png'
import imgFaq from '../images/img-faq.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import './FaqStyle.css'
import { string } from 'prop-types';

function FaqComponent() {
    return (

        <div className="div col-6">
            <h1 id="anchorFAQ" className="title">FAQ</h1>
            <Accordion >
                {/* Card 1 */}
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="" eventKey="0">
                            Como sei que meu volume de resíduo é pequeno ou grande volume? <img src={Icone} className="iconFaq" />
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>Se você tem a quantidade de resíduo de construção civil suficiente para encher uma caçamba, considera-se grande volume. As caçambas geralmente usadas na área urbana possuem o tamanho de 3 a 4 m3.
                        Mas se a quantidade gerada não é suficiente para encher uma caçamba e pode-se utilizar alguns sacos para o descarte, este volume é considerado pequeno. Em Porto Alegre é considera-se até 0,5m3/dia, o equivalente a 20 sacos de cimento, como gerador pessoa física.
                        É importante ressaltar que o destino dos resíduos de pequenos geradores físicos é direcionado para as UDC’s  - Unidades de Descarte Certo de Porto Alegre e que por lei (Lei 10.847/2010 c/c Decreto 18.481/2013) podem receber até 0,5m3/dia de resíduo por cidadão. Já os resíduos de caçambas, transportadas por serviço de tele-entulho devem ser destinados para empresas licenciadas para receber resíduos de construção.</Card.Body>
                    </Accordion.Collapse>
                </Card>

                {/* Card 2 */}
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="" eventKey="1">
                            Preciso separar os resíduos domésticos dos meus resíduos da obra?  <img src={Icone} className="iconFaq" />
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>Como previsto na Política Nacional de Resíduos Sólidos (Lei 12305/2010) todo gerador de resíduos deve separá-los na origem da geração, descartando os diferentes materiais para destinações finais adequadas para cada um deles, viabilizando o reaproveitamento e a reciclagem.
                        Para a logística atual da 5Marias, procure priorizar a separação dos seguintes materiais:
                        Caliças:  materiais cimentícios e cerâmicos de obra, argamassa, solo e similares;
                        Gesso: placas e sobras de forro de gesso, drywall e similares compostos de gesso;
                        Madeiras: ripas, sobras de móveis, serragem, compensados, chapas, assoalhos e similares;
                        Recicláveis: Papel, papelão, plásticos, metais, vidros, tubulações pvc, fiação elétrica e outros.
                        Necessitando realizar o descarte de materiais que não estejam citados acima, consulte nosso atendimento por whatsapp.
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                {/* Card 3 */}
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="" eventKey="2">
                            É mais caro misturado?  <img src={Icone} className="iconFaq" />
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>Sim, quando os resíduos removidos estão misturados, necessitam passar uma etapa de separação antes de chegar ao seu destino final, gerando custos extras de mão-de-obra e logística.  A separação correta facilita o reaproveitamento e a reciclagem dos materiais, viabilizando a economia circular.
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                {/* Card 4 */}
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="" eventKey="3">
                            Quais as formas de pagamento?  <img src={Icone} className="iconFaq" />
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                        <Card.Body>Aceitamos transferências bancárias, cash ou cartão.
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                {/* Card 5 */}
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="" eventKey="4">
                            Para onde vão os resíduos coletados?  <img src={Icone} className="iconFaq" />
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="4">
                        <Card.Body>Os resíduos coletados pelo serviço da 5Marias são destinados a empresas parceiras licenciadas e autorizadas para receber, beneficiar, reaproveitar, reciclar, tratar ou depositar os diferentes resíduos de acordo com as normativas legais.
                        Além das empresas licenciadas para grandes volumes ou geradores pessoa jurídica, temos como parceiras as UDC’s - Unidades de Descarte Certo da Prefeitura de Porto Alegre que recebem os resíduos em pequeno volume de pessoas físicas.
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                {/* Card 6 */}
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="" eventKey="5">
                            Como sei se o meu resíduo foi para o descarte certo?  <img src={Icone} className="iconFaq" />
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="5">
                        <Card.Body>Todas as coletas realizadas através do serviço da 5Marias, são monitoradas e garantem a destinação correta aos locais licenciados e/ou autorizados.
                        O cliente de pequenos volumes recebe ao final do descarte o CDF - Certificado de Destinação Final, a garantia de descarte correto do resíduo.
                        Já os clientes que fazem uso de caçambas, recebem uma cópia do MTRCC - Manifesto de Transporte de Resíduos da Construção Civil, documento obrigatório e comprobatório pro descarte correto para grandes volumes.
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                {/* Card 7 */}
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="" eventKey="6">
                            Minha região é atendida?  <img src={Icone} className="iconFaq" />
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="6">
                        <Card.Body>Atendimento para a cidade de Porto Alegre e Canoas. Consultar outras regiões.
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

            </Accordion>

            <img src={imgFaq} className="imgFaq" />
        </div >


    )
}
export default FaqComponent



