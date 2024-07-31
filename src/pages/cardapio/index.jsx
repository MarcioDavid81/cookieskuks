import Container from "../../components/Container"
import Footer from "../../components/Footer"
import Hero from "../../components/Hero"
import NewHeader from "../../components/NewHeader"
import Slide from "../../components/Slide"
import styles from "./Cardapio.module.css"

function Cardapio () {
    return (
        <>
            <NewHeader />
                <Hero />
                <Container>
                        <div className={styles.cardapio}>
                            <h1>Cardápio</h1>
                            <p>Este é o conteúdo da página Cardápio</p>
                        </div>
                        <Slide />
                </Container>
            <Footer />
        </>
    )
}

export default Cardapio