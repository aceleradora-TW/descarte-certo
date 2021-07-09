import React from 'react'

const Select = ({ options, name, onChange, placeholder }) => {
  return (
    <select onChange={onChange} name={name}>
      <option>{placeholder}</option>
      {options.map((option, i) => <option key={i} value={option.value}>{option.label}</option>)}
    </select>
  )
}


const ResidueTypeOption = ({ value, onChange, label }) => {
  return (
    <label>
      <input type="radio" value={value} name="residueMeasure" onChange={onChange} /> {label}
    </label>)
}

const Name = ({ onChange }) =>
  <input type="text" name="name" placeholder="Nome Completo" onChange={onChange} />

const Email = ({ onChange }) =>
  <input type="email" name="email" placeholder="Digite seu email" onChange={onChange} />

const Phone = ({ onChange }) =>
  <input type="text" name="phone" placeholder="(00) 0 0000-0000" onChange={onChange} />

const Quantity = ({ onChange }) =>
  <input type="number" name="residueAmount" placeholder="0" onChange={onChange} />

const Box = ({ title, children }) => {
  return (
    <div>
      <h3>{title}</h3>
      <div>
        {children}
      </div>
    </div>
  )
}

export const Residues = ({ onChange }) => {
  const placeholder = "Tipos de resíduos:"
  const options = [
    { value: "", label: "Somente Caliça" },
    { value: "", label: "Somente Gesso" },
    { value: "", label: "Somente Madeira" },
    { value: "", label: "Resíduos Misturados (Mistura de resíduo de obra)" },
  ]

  return (
    <Select options={options} name="residueType" placeholder={placeholder} onChange={onChange} />
  )
}

export const Access = ({ onChange }) => {
  const placeholder = "Acesso:"
  const options = [
    { value: "Escada", label: "Escada" },
    { value: "Elevador", label: "Elevador" },
    { value: "Terreo", label: "Terreo" },
    { value: "Outro", label: "Outro" },
  ]

  return (
    <Select options={options} name="accessType" placeholder={placeholder} onChange={onChange} />
  )
}

export const Region = ({ onChange }) => {
  const placeholder = "Região:"
  const options = [
    { value: "Porto Alegre - Centro", label: "Porto Alegre - Centro" },
    { value: "Porto Alegre - Sul", label: "Porto Alegre - Sul" },
    { value: "Porto Alegre - Norte", label: "Porto Alegre - Norte" },
    { value: "Porto Alegre - Leste", label: "Porto Alegre - Leste" },
  ]

  return (
    <Select options={options} name="region" placeholder={placeholder} onChange={onChange} />
  )
}

export const Floor = ({ onChange }) =>
  <input type="number" placeholder="Informe o andar" onChange={onChange} />

export const ResidueType = ({ onChange }) => {
  return (
    <Box title="Tipo de Coleta">
      <ResidueTypeOption value="Caçamba" label="Caçamba" onChange={onChange} />
      <ResidueTypeOption value="Sacos" label="Sacos (Padrão 50 Litros)" onChange={onChange} />
    </Box>
  )
}

export const ResidueQuantity = ({ onChange }) => {
  return (
    <Box title="Quantidade">
      <div>
        <Quantity onChange={onChange} />
      </div>
    </Box>
  )
}

export const Requester = ({ onChange }) => {
  return (
    <div className="requester">
      <div>
        <Name onChange={onChange} />
      </div>
      <div>
        <Phone onChange={onChange} />
        <Email onChange={onChange} />
      </div>
    </div>
  )
}

export const Terms = ({ onChange }) => <>Li e concordo</>