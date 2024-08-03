import Container from "../../components/Container"
import Footer from "../../components/Footer"
import Hero from "../../components/Hero"
import Header from "../../components/Header"
import styles from "./Contato.module.css"
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs"
import { useState } from "react"
import emailjs from "@emailjs/browser"

function Contato () {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    function sendEmail(e) {
        e.preventDefault()
        
        if (name === "" || email === "" || message === "") {
            alert("Preencha todos os campos")
            return;
        }

        const templateParams = {
            to_name: "Cookies Kuk's",
            from_name: name,
            email: email,
            message: message
        }

        emailjs.send('service_07vuvcg', 'template_29axrnk', templateParams, 'EMIWyQZbAfJhq9zmI')
            .then(() => {
                alert("Mensagem enviada com sucesso!")
                setName("")
                setEmail("")
                setMessage("")
            }, () => {
                alert("Ocorreu um erro ao enviar a mensagem")
            });
    }

    return (
        <>
            <Header />
            <Hero />
            <Container>
                <div className={styles.contato}>
                    <h2>Contato</h2>
                    <p>Entre em contato conosco através do formulário abaixo:</p>
                    <form className={styles.form} onSubmit={sendEmail}>
                        <input
                            className={styles.input}
                            type="text"
                            placeholder="Nome"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />

                        <input
                            className={styles.input}
                            type="email"
                            placeholder="E-mail"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                        <textarea
                            className={styles.textarea}
                            placeholder="Mensagem"
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                        />
                        <button type="submit">Enviar</button>
                    </form>
                    <h2>Ou se Preferir</h2>
                    <p>Acesse uma de nossas redes socias:</p>
                    <div className={styles.social}>
                        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                        <BsFacebook />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                        <BsInstagram />
                        </a>
                        <a href="https://www.whatsapp.com" target="_blank" rel="noreferrer">
                        <BsWhatsapp />
                        </a>
                    </div>
                </div>
            </Container>
            <Footer />
        </>
    )
}

export default Contato;