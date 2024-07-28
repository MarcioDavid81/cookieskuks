import Container from "../../components/Container"
import Footer from "../../components/Footer"
import Header from "../../components/Header"

function Cardapio () {
    return (
        <>
            <Header />
            <section className="hero">
                <Container>
                        <h1>Cardápio</h1>
                        <p>Este é o conteúdo da página Cardápio</p>
                </Container>
            </section>
            <Footer />
        </>
    )
}

export default Cardapio