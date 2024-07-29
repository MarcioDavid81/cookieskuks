import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Container from '../../components/Container';
import styles from './Home.module.css';
import Slide from '../../components/Slide';


function Home () {
    return (
        <>
            <Header />
            <Slide />
                <Container>
                    <div className={styles.home}>
                        <h1>Home</h1>
                        <p>Este é o conteúdo da página Home</p>
                    </div>
                </Container>
            <Footer />
        </>
    )
}

export default Home;