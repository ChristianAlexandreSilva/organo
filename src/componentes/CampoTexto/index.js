import './CampoTexto.css'

const CampoTexto = (props) => {

    const placeholderModificada = `${props.placeholder}...`

    const aoDigitado = (e) => {
        props.aoAlterado(e.target.value)
    }

    return (
        <div className='box__texto'>
            <label className='campo__texto'>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} className='digite__texto' placeholder={placeholderModificada} />
        </div>
    )
}

export default CampoTexto