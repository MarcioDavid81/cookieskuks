import Container from "../../components/Container"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Slide from "../../components/Slide"
import styles from "./Sobre.module.css"

function Sobre () {
    return (
        <>
            <Header />
            <Slide />
            <Container>
                <div className={styles.sobre}>
                    <h1>Sobre</h1>
                    <p>Este é o conteúdo da página Sobre</p>
                </div>
            </Container>
            <Footer />
        </>
    )
}

export default Sobre