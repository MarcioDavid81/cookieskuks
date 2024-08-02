import Container from "../../components/Container"
import Footer from "../../components/Footer"
import Hero from "../../components/Hero"
import Header from "../../components/Header"
import styles from "./Sobre.module.css"

function Sobre () {
    return (
        <>
            <Header />
            <Hero />
            <Container>
                <section className={styles.sobre}>
                    <article>
                        <h2>Nossa História</h2>
                        <hr />
                        <p>Bem-vindos à cookies Kuk’s, um sonho que começou a se delinear em 2023, quando decidimos unir nossas paixões pela gastronomia e pela arte de criar momentos doces e memoráveis. Tudo começou na simplicidade de nossa própria cozinha, onde exploramos receitas tradicionais e experimentamos combinações únicas de ingredientes frescos e de alta qualidade. Movidos pelo desejo de compartilhar esses sabores reconfortantes com amigos e familiares, nasceu a ideia de transformar nossa paixão em um negócio. Assim, em 2023, com muito amor e dedicação, demos vida à cookies Kuk’s.</p>
                    </article>

                    <article>
                        <h2>Nossa Missão</h2>
                        <hr />
                        <p>Na essência de nossa missão está o compromisso de oferecer a você, nosso estimado cliente, uma experiência única de sabor e qualidade. Cada cookie que sai de nossa fábrica é uma expressão de nosso cuidado artesanal, desde a seleção dos melhores ingredientes até o processo de produção meticuloso. Acreditamos que os momentos compartilhados ao redor de uma mesa, com uma xícara de café quente e um delicioso cookie, são preciosos. Por isso, buscamos não apenas satisfazer seu paladar, mas também criar memórias afetuosas que perdurarão por toda a vida.</p>
                    </article>
                    
                    <article>
                        <h2>Nossa Dedicação</h2>
                        <hr />
                        <p>Em nossa fábrica, cada cookie é mais do que um produto, é o resultado de nossa paixão, criatividade e compromisso com a excelência. Valorizamos a confiança que você deposita em nós ao escolher nossos produtos para adoçar seus momentos especiais, e nos esforçamos para superar suas expectativas a cada mordida. Aqui na cookies Kuk’s, estamos empenhados em tornar sua experiência conosco verdadeiramente excepcional. Desde 2023, temos o privilégio de compartilhar nossa paixão pela culinária com pessoas como você, e esperamos continuar adoçando suas vidas por muitos anos.
                        Obrigado por fazer parte dessa jornada conosco.</p>
                    </article>
                </section>
            </Container>
            <Footer />
        </>
    )
}

export default Sobre;