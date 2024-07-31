import styles from './Header.module.css';
import Button from '../Button';
import Logo from '../Logo';
import Nav from '../Navigation';
import { GiHamburgerMenu } from 'react-icons/gi';




function Header () {

    return (
        <>
            <header className={styles.header}>
                <Logo />
                <Nav />
                <Button />
                <GiHamburgerMenu  className={styles.openMenu} />
            </header>
        </>
    )
}
export default Header;