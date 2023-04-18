import React from 'react'

import './CampoTexto.css'

interface CampoTextoProps {
    aoAlterado: (valor: string) => void
    placeholder: string
    label: string
    valor: string
    obrigatorio?: boolean
    tipo?: 'text' | 'password' | 'date' | 'email' | 'number'
}

const CampoTexto = ({ aoAlterado, label, placeholder, valor, obrigatorio = false, tipo = 'text' } : CampoTextoProps) => {

    const placeholderModificada = `${placeholder}...` 

    const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(evento.target.value)
    // ali no evento: foi o resultado do tipo passado pelo tsx no onChange abaixo
    }

    return (
        <div className="campo-texto">
            <label>
                {label}
            </label>
            <input 
                value={valor} 
                onChange={aoDigitado}
                // passar o evento =>  aqui no onCHange pra saber qual o tipo do evento
                required={obrigatorio} 
                placeholder={placeholderModificada}
                type={tipo}
            />
        </div>
    )
}

export default CampoTexto