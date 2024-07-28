import Container from "../../components/Container"
import Footer from "../../components/Footer"
import Header from "../../components/Header"

function Blog () {
    return (
        <>
            <Header />
            <section className="hero">
                <Container>
                        <h1>Blog</h1>
                        <p>Este é o conteúdo da página Blog</p>
                </Container>
            </section>
            <Footer />
        </>
    )
}

export default Blog