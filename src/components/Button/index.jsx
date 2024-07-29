import { Link } from "react-router-dom"
import styles from "./Button.module.css"

function Button () {
    return (
        <Link to="/contato">
            <button className={styles.button}>
                Contato
            </button>
        </Link>
    )
}

export default Button