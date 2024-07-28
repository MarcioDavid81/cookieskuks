import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <section>
        <p>Faça seu pedido pelo <a href="https://wa.me/5511999999999" target='_blank'>WhatsApp</a></p>
      </section>


        <div>
          <p>Feito com 💕 e 🍫 por <a href="https://futurodev-marcio.netlify.app/" target='_blank'>Marcio David - Web Developer</a></p>
        </div>

    </footer>
  );
}
export default Footer;