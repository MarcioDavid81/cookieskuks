import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header () {
    return (
        <header className={styles.header}>
            <div>
                <Link to="/">
                    <img src="public/logosf.png" alt="Logo Cookies Kuk's" />
                </Link>
            </div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/cardapio">Cardápio</Link>
                <Link to="/sobre">Quem Somos</Link>
                <Link to="/blog">Blog</Link>
            </nav>
                <Link to="/contato" className='btn'>
                    Contato
                </Link>
        </header>
    )
}
export default Header;