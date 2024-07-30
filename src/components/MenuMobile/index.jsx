import { Link } from 'react-router-dom';
import styles from './MenuMobile.module.css';
import { GrClose } from 'react-icons/gr';

function MenuMobile () {
    return (
        <div>
            <GrClose className={styles.close} />
            <nav className={styles.menumobile}>
                <Link to="/">Home</Link>
                <Link to="/cardapio">Cardápio</Link>
                <Link to="/sobre">Quem Somos</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/contato">Contato</Link>
            </nav>
        </div>
    )
}

export default MenuMobile;