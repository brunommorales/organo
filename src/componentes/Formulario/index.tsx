import React from 'react'
import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import IColaborador from '../../compartilhado/interface/IColaborador'
import './formulario.css'

interface FormularioProps {
    aoColaboradorCadastrado: (colaborador: IColaborador) => void;
    times: string[]

}

const Formulario = (props: FormularioProps) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const [data, setData] = useState('')

    const aoSalvar = (evento: React.FormEvent<HTMLFormElement>) => {
        // descobri o tipo do evento usando o evento lá embaixo
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time,
            data
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className="formulario">
            <form onSubmit={evento => aoSalvar(evento)}>
                {/* passei o evento => para verificar qual era o tipo do evento acontecendo, pra passar pra const aoSalvar */}
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <CampoTexto
                    label='Data de entrada no time'
                    placeholder=''
                    valor={data}
                    aoAlterado={valor => setData(valor)}
                    tipo='date'
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Time"
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario