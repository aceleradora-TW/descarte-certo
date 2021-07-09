import React, { useState } from "react"
import { post } from "../../services/client"
import { getPayload } from './adapters/order-adapter'
import { isEmpty, isBags } from './utils'
import {
  Requester,
  ResidueType,
  ResidueQuantity,
  Residues,
  Region,
  Access,
  Floor,
  Terms,
} from './components'
import './form.css'

const Form = ({ setOrder, setNextStep }) => {
  const [formState, setFormState] = useState({})
  const [errors, setErrors] = useState({})

  const [hasBags, setHasBags] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    // atualiza inserindo os dados no state do formulario
    setFormState({ ...formState, [name]: value })
    // se selecionou opção de sacos
    setHasBags(isBags(value))
    // se deixou algum campo do formulário vazio
    setErrors({ ...errors, [name]: isEmpty(value) })
  }

  const submit = (e) => {
    const { id } = e.target
    // post para estimate
    post("/estimate", getPayload(formState))
      .then(response => { 
        // setar informacoes que vieram do banco de dados no estado
        setOrder(response)
        //ir para o proximo passo
        setNextStep(id)
      })
  }

  return (
    <div className="order-form-container">

      <Requester onChange={handleChange} errors={errors} />

      <div className="order-residue-type-quantity">
        <ResidueType onChange={handleChange} errors={errors} />
        <ResidueQuantity onChange={handleChange} errors={errors} />
      </div>

      <div className="order-residue-residues-region">
        <Residues onChange={handleChange} errors={errors} />
        <Region onChange={handleChange} errors={errors} />
      </div>

      {hasBags ? (
        <div className="order-residue-access-floor">
          <Access onChange={handleChange} errors={errors} />
          <Floor onChange={handleChange} errors={errors} />
        </div>) : null}

      <Terms onChange={handleChange} />
      <button id="confirmOrder" onClick={submit}>Ver orçamento</button>

    </div>
  )
}

export default Form