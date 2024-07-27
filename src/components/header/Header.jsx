import './header.css'

function Header() {

    return (
            <header>
                <div className="container">
                    <section className='logo'>
                        <a href=""><img src="src\assets\imgs\logosf.png" alt="Logo Cookies Kuk's" /></a>
                    </section>
            
                    <section className='menu-desktop'>
                        <nav>
                            <ul>
                                <li><a href="#inicio">Home</a></li>
                                <li><a href="#cardapio">Cardápio</a></li>
                                <li><a href="#sobre">Quem Somos</a></li>
                                <li><a href="#receitas">Receitas</a></li>
                            </ul>
                        </nav>
                    </section>

                    <section className='btn-contato'>
                        <a href="#"><button>Contato</button></a>
                    </section>


                    <section className='menu-mobile'>
                        <nav>
                            <ul>
                                <li><a href="#inicio">Home</a></li>
                                <li><a href="#cardapio">Cardápio</a></li>
                                <li><a href="#sobre">Quem Somos</a></li>
                                <li><a href="#receitas">Receitas</a></li>
                            </ul>
                        </nav>
                    </section>
                </div>
            </header>
    )
}

export default Header