import styles from './WAButton.module.css';
import { FaWhatsapp } from "react-icons/fa";

function WaButton() {
  return (
    <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">
        <button className={styles.wabutton}><FaWhatsapp className={styles.waicon}/></button>
    </a>
  );
}

export default WaButton;