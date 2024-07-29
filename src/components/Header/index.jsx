import styles from './Header.module.css';
import Button from '../Button';
import Logo from '../Logo';
import Nav from '../Navigation';

function Header () {
    return (
        <header className={styles.header}>
            <Logo />
            <Nav />
            <Button />
        </header>
    )
}
export default Header;