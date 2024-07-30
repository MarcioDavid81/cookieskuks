import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';
import MenuMobile from '../MenuMobile';
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
            <MenuMobile />
        </nav>
        </>
    )
}

export default Nav;