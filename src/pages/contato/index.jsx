import Container from "../../components/Container"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Slide from "../../components/Slide"
import styles from "./Contato.module.css"

function Contato () {
    return (
        <>
            <Header />
            <Slide />
            <Container>
                <div className={styles.contato}>
                    <h1>Contato</h1>
                    <p>Este é o conteúdo da página Contato</p>
                </div>
            </Container>
            <Footer />
        </>
    )
}

export default Contato