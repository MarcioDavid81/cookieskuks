import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../Logo";
import styles from "./NewHeader.module.css";
import { Link } from "react-router-dom";
import Button from "../Button";
import { useState } from "react";



function NewHeader() {

    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

  return (
    <>
        <header className={styles.new_header}>
            <Logo />
            <nav
                className={`${styles.new_navbar} ${showMenu ? styles.show : ''}`}
                onClick={toggleMenu}
            >
                <Link to="/">Home</Link>
                <Link to="/cardapio">Cardápio</Link>
                <Link to="/sobre">Quem Somos</Link>
                <Link to="/blog">Blog</Link>
            </nav>
            <Button />
            <GiHamburgerMenu
                onClick={toggleMenu}
                className={styles.open_menu}
            />
        </header>
    </>
  );
}

export default NewHeader;