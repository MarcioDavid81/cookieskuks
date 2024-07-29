import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo () {
    return (
        <Link to="/">
            <img src="public/logosf.png" alt="Logo Cookies Kuk's" className={styles.logo} />
        </Link>
    )
}

export default Logo;