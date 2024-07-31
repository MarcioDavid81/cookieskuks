import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Container from '../../components/Container';
import styles from './Home.module.css';
import Slide from '../../components/Slide';
import Hero from '../../components/Hero';


function Home () {

    return (
        <>
            <Header />
            <Hero />
                <Container>
                    <div className={styles.home}>
                        <h1>Home</h1>
                        <p>Este é o conteúdo da página Home</p>
                    </div>
                    <Slide />
                </Container>
            <Footer />
        </>
    )
}

export default Home;