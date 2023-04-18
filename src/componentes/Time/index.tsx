import IColaborador from '../../compartilhado/interface/IColaborador'
import Colaborador from '../Colaborador'
import './time.css'

interface TimeProps {
    corPrimaria: string
    corSecundaria: string
    nome: string
    colaboradores: IColaborador[]
}

const Time = (props: TimeProps) => {
    const css = { backgroundColor: props.corSecundaria }

    return (
        // se o array não tiver vazio, retorna a section, se tiver vazio retorna fragmente
        (props.colaboradores.length > 0) ? <section className='time' style={css}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador =>
                    <Colaborador
                        corDeFundo={props.corPrimaria}
                        key={colaborador.nome}
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem}
                        data={colaborador.data}
                    />)}
            </div>
        </section>
            : <></>
    )
}

export default Time