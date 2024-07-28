import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Container from '../../components/Container';

function Home () {
    return (
        <>
            <Header />
                <Container>
                <h1>Home</h1>
                <p>Este é o conteúdo da página Home</p>
                </Container>
            <Footer />
        </>
    )
}

export default Home;