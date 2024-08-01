import Container from "../../components/Container"
import Footer from "../../components/Footer"
import Hero from "../../components/Hero"
import Header from "../../components/Header"
import Slide from "../../components/Slide"
import styles from "./Sobre.module.css"

function Sobre () {
    return (
        <>
            <Header />
            <Hero />
            <Container>
                <div className={styles.sobre}>
                    <h1>Sobre</h1>
                    <p>Este é o conteúdo da página Sobre</p>
                </div>
                <Slide />
            </Container>
            <Footer />
        </>
    )
}

export default Sobre;