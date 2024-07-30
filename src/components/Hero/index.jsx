/* eslint-disable react/no-unescaped-entities */
import Container from '../Container'
import styles from './Hero.module.css'

function Hero () {
    return (
        <div className={styles.hero}>
            <Container>
            <div className={styles.outer}>
                <div className={styles.details}>
                    <h2 className={styles.title}>Bem vindo ao<br></br>
                    <span>Cookies Kuk's!</span></h2>
                    <p className={styles.description}>Que tal adoçar o seu dia com um delicioso Cookie?</p>
                </div>
            </div>
            </Container>
        </div>
    )
}

export default Hero