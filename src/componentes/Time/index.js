import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
    const fundoCss = { backgroundColor: props.corDoFundo }

    return (
        // pode ser utilizado também o && para comparações booleanas
        props.colaboradores.length > 0 ? <section className='time' style={fundoCss}>
            <h3 style={{ borderColor: props.corDestaque }}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador corDeFundo={props.corDestaque} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} />)}
            </div>

        </section>
        : ''
    )
}

export default Time