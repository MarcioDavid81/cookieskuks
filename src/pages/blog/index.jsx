import Container from "../../components/Container"
import Footer from "../../components/Footer"
import Hero from "../../components/Hero"
import NewHeader from "../../components/NewHeader"
import Slide from "../../components/Slide"
import styles from "./Blog.module.css"

function Blog () {
    return (
        <>
            <NewHeader />
                <Hero />
                <Container>
                        <div className={styles.blog}>
                            <h1>Blog</h1>
                            <p>Este é o conteúdo da página Blog</p>
                        </div>
                        <Slide />
                </Container>
            <Footer />
        </>
    )
}

export default Blog