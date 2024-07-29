import Container from "../../components/Container"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Slide from "../../components/Slide"
import styles from "./Cardapio.module.css"

function Cardapio () {
    return (
        <>
            <Header />
                <Slide />
                <Container>
                        <div className={styles.cardapio}>
                            <h1>Cardápio</h1>
                            <p>Este é o conteúdo da página Cardápio</p>
                        </div>
                </Container>
            <Footer />
        </>
    )
}

export default Cardapio