import './banner.css'

interface BannerProps {
    enderecoImagem: string
    textoAlternativo?: string
}
// o ?: foi colocado para dizer que é opcional, se não passar ele, tudo bem

const Banner = ({ enderecoImagem, textoAlternativo }: BannerProps) => {
    // JSX
    return (
        <header className="banner">
            {/* <img src="" alt="O banner principal da página do Organo"/> */}
            <img src={enderecoImagem} alt={textoAlternativo} />
        </header>
    )
}

export default Banner