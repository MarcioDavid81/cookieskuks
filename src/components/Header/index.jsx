import styles from './Header.module.css';
import Button from '../Button';
import Logo from '../Logo';
import Nav from '../Navigation';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useEffect, useState } from "react";
import MenuMobile from '../MenuMobile';
import { GrClose } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { MdOutlineMenuBook } from 'react-icons/md';
import { RiInformation2Fill } from 'react-icons/ri';
import { IoNewspaper } from 'react-icons/io5';
import { TbMailFilled } from 'react-icons/tb';



function Header () {

    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    useEffect(() => {
        if (showMenu) {
            document.querySelector('body').style.overflow = 'hidden';
        } else {
            document.querySelector('body').style.overflow = 'auto';
        }
    }, [showMenu]);

    return (
        <>
            <header className={styles.header}>
                <div className={styles.menu_desktop}>
                    <Logo />
                    <Nav />
                    <Button />
                    
                </div>

                <div className={styles.menu_mobile}>
                    <Logo />
                    <GiHamburgerMenu onClick={toggleMenu}  className={styles.openMenu} />
                    <MenuMobile onClick={toggleMenu} />
                    <nav 
                        className={`${styles.menumobile} ${showMenu ? styles.show : ''}`}
                        onClick={toggleMenu}
                    >
                        <GrClose className={styles.close}/>
                        <Link to="/"><FaHome /> Home</Link>
                        <Link to="/cardapio"><MdOutlineMenuBook /> Cardápio</Link>
                        <Link to="/sobre"><RiInformation2Fill /> Quem Somos</Link>
                        <Link to="/blog"><IoNewspaper /> Blog</Link>
                        <Link to="/contato"><TbMailFilled /> Contato</Link>
                    </nav>
                </div>
            </header>
        </>
    )
}
export default Header;