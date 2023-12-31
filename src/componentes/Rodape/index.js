import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='footer'>
            <section>
                <ul>
                    <li>
                        <a href='facebook.com' target="_blank" >
                            <img src='/imagens/fb.png' alt='Ícone do Facebook'/>
                        </a>
                    </li>
                    <li>
                        <a href='twitter.com' target='_blank'>
                            <img src='/imagens/tw.png' alt='Ícone do Twitter' />
                        </a>
                    </li>
                    <li>
                        <a href='instagram.com' target='_blank'>
                            <img src='/imagens/ig.png' alt='Ícone do Instagram' />
                        </a>
                    </li>
                </ul>
            </section>

            <section>
                <img src='/imagens/logo.png' alt='Logo do projeto Organo' />
            </section>

            <section>
                <p>
                    Desenvolvido por Christian Silva
                </p>
            </section>
        </footer>
    )
}

export default Rodape