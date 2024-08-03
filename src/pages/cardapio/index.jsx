/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import Container from "../../components/Container"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Hero from "../../components/Hero"
import styles from "./Cardapio.module.css"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useLayoutEffect, useRef } from "react"

function Cardapio () {

    const el = useRef();
    const tl = useRef();

    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(() => {        
        gsap.to("#cookie", {
            x: 0,
            opacity: 1,
            rotate: "0deg",
            scrollTrigger: {
                trigger: "#items",
                start: "top 600px",
                end: "bottom 700px",
               scrub: true
            }
        })

        return () => {
            gsap.killTweensOf("#cookie")
        }
    }, [])

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            tl.current = gsap.timeline({
                scrollTrigger: {
                    trigger: "#model_1",
                    start: "top 700px",
                    end: "bottom 800px",
                    scrub: true
                }
            })
            .fromTo("#model_1", {
                y: 160,
                opacity: 0
            }, {
                y: 0,
                opacity: 1
            })
        }, el);

        return () => {
            gsap.killTweensOf("#model_1")
        }
    }, [])
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            tl.current = gsap.timeline({
                scrollTrigger: {
                    trigger: "#model_2",
                    start: "top 700px",
                    end: "bottom 800px",
                    scrub: true
                }
            })
            .fromTo("#model_2", {

                opacity: 0
            }, {
                opacity: 1
            })
        }, el);

        return () => {
            gsap.killTweensOf("#model_1")
        }
    }, [])

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            tl.current = gsap.timeline({
                scrollTrigger: {
                    trigger: "#model_3",
                    start: "top 700px",
                    end: "bottom 800px",
                    scrub: true
                }
            })
            .fromTo("#model_3", {
                y: 160,
                opacity: 0
            }, {
                y: 0,
                opacity: 1
            })
        }, el);

        return () => {
            gsap.killTweensOf("#model_3")
        }
    }, [])

    return (
        <>
            <Header />
            <Hero />
            <Container>
                <div className={styles.cardapio}>
                    <section id="items" className={styles.items}>
                        <div className={styles.items_content}>
                            <h2>Edição Especial de Inverno</h2>
                            <p>Cookie de churros, peça já o seu</p>
                            <img id="cookie" className={styles.cookie} src="./abacaxi.jpg" alt="" />
                        </div>
                    </section>

                    <section className={styles.models_container}>

                        <h2>Qual seu cookie favorito?</h2>

                        <div className={styles.models_content} ref={el}>

                            <div className={styles.models_item} id="model_1">
                                <img className={styles.cookie} src="./kinder.jpg" alt="" />
                                <span className={styles.models_tag}>Kinder</span>
                                <h4 className={styles.models_title}>Massa fofinha e muito chocolate Kinder</h4>
                                <p className={styles.models_description}>Por apenas <strong>R$8,00</strong></p>
                            </div>
                   
                            <div className={styles.models_item} id="model_2">
                                <img className={styles.cookie} src="./mms.jpg" alt="" />
                                <span className={styles.models_tag}>MM's</span>
                                <h4 className={styles.models_title}>Massa fofinha e muito MM's</h4>
                                <p className={styles.models_description}>Por apenas <strong>R$8,00</strong></p>
                            </div>
              
                            <div className={styles.models_item} id="model_3">
                                <img className={styles.cookie} src="./limao.jpg" alt="" />
                                <span className={styles.models_tag}>Torta de Limão</span>
                                <h4 className={styles.models_title}>Massa fofinha e muito recheio</h4>
                                <p className={styles.models_description}>Por apenas <strong>R$8,00</strong></p>
                            </div>

                        </div>
                    </section>
                </div>
            </Container>
            <Footer />
        </>
    )
}

export default Cardapio;