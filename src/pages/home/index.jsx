import Footer from "../../components/Footer";
import Container from "../../components/Container";
import styles from "./Home.module.css";
import Hero from "../../components/Hero";
import Header from "../../components/Header";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Container>
        <section className={styles.home}>
          <section className={styles.intro}>
            <h1>
              Origem do Cookie: Conheça a história do pequeno bolo que ganhou o
              mundo
            </h1>
            <p>
              Que os cookies são uma sobremesa deliciosa não há dúvida.
              Entretanto, você já parou para pensar na história do cookie? De
              onde será que surgiu essa iguaria tão gostosa que conquistou o
              mundo todo? E afinal, quem criou os cookies e foi o responsável
              por fazer com que ele chegasse até nós? É isso e muito mais o que
              você vai aprender hoje. Acompanhe!
            </p>
          </section>
          <section className={styles.history}>
            <h2>
              História do cookie: a origem da receita vem dos biscoitos lá da
              Idade Média
            </h2>
            <p>
              Pois bem, muito antes dos cookies surgirem, os biscoitos já faziam
              sucesso na sociedade durante a Idade Média. Na época, eles eram
              consumidos pelas pessoas como pequenos pães. Entretanto, a
              diferença deles para os pães é que os biscoitos eram assados duas
              vezes. Essa técnica era usada para evitar com que os alimentos
              estragassem mais rápido – e, também, é o motivo pelo qual os
              biscoitos são conhecidos por ter uma textura mais “durinha” do que
              a do pão. Inclusive, o nome biscoito origina dessa prática, já
              que, no latim, “bis” significa dois (ou duas vezes) e coctus
              significa cozido. Com o tempo, os biscoitos começaram a ficar mais
              populares na Europa, entretanto, os cookies, conforme conhecemos
              hoje, demoraram um pouco mais até surgirem.
            </p>
            <h2>Mas afinal: quem criou os cookies?</h2>
            <p>
              Há indícios de que o início da história do cookie vem de quando os
              cozinheiros britânicos, lá no século XVII, iam preparar bolos. Na
              hora de fazer a receita, antes de eles efetivamente colocarem o
              bolo todo para assar, eles separavam um pedaço da massa e a
              colocavam no forno para testar a temperatura. Assim, eles
              descobriram que a massa de teste, após ser assada, tornava-se um
              delicioso biscoitinho. Ademais, além de perceberem que o biscoito
              combinava muito bem com quando era consumido juntamente com o
              tradicional chá britânico, eles também chegaram a conclusão que
              essa seria uma ótima forma de não desperdiçar as sobras de massa
              que seriam jogadas fora. Isso fez com que o “teste de temperatura
              do forno” deixasse de ser feito apenas com essa função e os
              pedaços de massa passaram a ser feitos propositalmente em busca de
              assar os biscoitos. Assim, não demorou muito tempo para que fosse
              criada uma palavra para se referir a este novo doce que surgiu. O
              termo “cookie”, como conhecemos hoje, na verdade vem da palavra
              originária da língua holandesa “koekje”. Koekje pronuncia-se
              “cukiê” e significa pequeno bolo. A palavra, então. foi adotada
              pelos ingleses. Eles passaram a chamar com esse termo os “pequenos
              bolos” – ou seja, aquele pedaço de massa que anteriormente era
              usado apenas para verificar a temperatura do forno, – e, logo, os
              doces se tornaram os queridinhos do momento. Já populares no
              continente europeu, os “Koekjes” chegaram nos Estados Unidos não
              muito tempo depois, devido à colonização inglesa. E foi lá que
              eles ficaram mais parecidos com a receita de cookies que
              conhecemos hoje.
            </p>
            <h2>A história do cookie americano</h2>
            <p>
              Sim, a origem do cookie vem lá da Europa. Mas por que associamos
              tanto o cookie com a culinária americana? Pois bem: foi no
              continente americano que a receita do doce foi aperfeiçoada e se
              tornou mais parecida com a que conhecemos hoje. E quem começou
              essa história de sucesso foi a americana Ruth Graves Wakefield lá
              na década de 1930. Ruth era dona da pousada Toll House Inn, que
              ficava em Massachusetts, entre Boston e New Bedford. O local era
              conhecido por servir refeições frescas e caseiras. Um dia, para
              surpreender os clientes locais, Ruth decidiu cortar e misturar uma
              barra de chocolate em uma receita de biscoitos. Os pedaços de
              chocolate derreteram com o calor do forno, mas se mantiveram
              isolados na massa, sem se incorporarem a ela. Assim, nasceu o
              primeiro cookie da história com as deliciosas gotinhas de
              chocolate derretido. Não precisamos nem dizer que o sucesso da
              receita foi gigante, não é mesmo? Inclusive, há indícios de que o
              sucesso da receita foi tão grande que foi por causa dele que a
              Nestlé começou a fabricar o primeiro chocolate em gotas do
              mercado. E é por isso que, mesmo com os biscoitos sendo
              originários lá da Europa e com o termo “cookie” ter surgido
              inicialmente no idioma holandês, nós associamos os cookies com a
              culinária americana. Afinal, o cookie, conforme conhecemos hoje em
              dia, foi criado nos Estados Unidos.
            </p>
            <h2>A popularização dos cookies</h2>
            <p>
              Após a criação dos cookies americanos, o doce se tornou um grande
              queridinho ao redor do mundo. Prático, – já que você come o doce
              com a mão e não precisa de talheres e/ou prato para se deliciar, –
              podendo ser encontrado de diversos tamanhos e extremamente
              saboroso, o cookie já nasceu fadado ao sucesso! E, se antes as
              receitas da sobremesa eram feitas apenas com pedaços de chocolate
              na massa, hoje é possível encontrar cookies com preparos dos mais
              diversos. Existem aqueles preparados especialmente para pessoas
              com alimentação mais restritiva – como intolerantes à glúten e/ou
              à lactose, veganos, pessoas que seguem uma alimentação mais
              saudável e buscam cookies preparados com massas mais “fitness”,
              com menos açúcar – até, é claro, os cookies feitos com
              ingredientes diversos na massa e recheados com sabores diferentes.
              Por fim, agora que você já sabe a história dos cookies, não ficou
              com água na boca para comer um desses doces? Ademais, saiba que
              não importa qual é o seu gosto, com certeza existe um cookie que
              vai agradar o seu paladar e deixar o seu dia mais doce. Quer ver
              só? Então confira o cardápio da{" "}<Link to="/cardapio">Cookies 
              Kuk’s </Link> e surpreenda-se com as diversas possibilidades 
              deliciosas de cookies que você pode experimentar. Opções não faltam!
            </p>
          </section>
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
