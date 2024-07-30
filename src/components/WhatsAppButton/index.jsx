import styles from './WAButton.module.css';

function WaButton() {
  return (
    <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">
        <button className={styles.wabutton}>Chama no Zap</button>
    </a>
  );
}

export default WaButton;