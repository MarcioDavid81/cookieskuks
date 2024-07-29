import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';
function Nav () {
    return (
        <>
        <nav className={styles.navbar}>
            <Link to="/">Home</Link>
            <Link to="/cardapio">Cardápio</Link>
            <Link to="/sobre">Quem Somos</Link>
            <Link to="/blog">Blog</Link>
        </nav>

        <nav className={styles.navmobile}>
            <Link to="/">Home</Link>
            <Link to="/cardapio">Cardápio</Link>
            <Link to="/sobre">Quem Somos</Link>
            <Link to="/blog">Blog</Link>

        </nav>
        </>
    )
}

export default Nav;