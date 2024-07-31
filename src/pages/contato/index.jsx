import Container from "../../components/Container"
import Footer from "../../components/Footer"
import Hero from "../../components/Hero"
import NewHeader from "../../components/NewHeader"
import Slide from "../../components/Slide"
import styles from "./Contato.module.css"

function Contato () {
    return (
        <>
            <NewHeader />
            <Hero />
            <Container>
                <div className={styles.contato}>
                    <h1>Contato</h1>
                    <p>Este é o conteúdo da página Contato</p>
                </div>
                <Slide />
            </Container>
            <Footer />
        </>
    )
}

export default Contato