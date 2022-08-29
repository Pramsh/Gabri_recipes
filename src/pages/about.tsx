import  React from 'react'
import Layout from '../components/headLayout/layout'
 const AboutPage = () => {
    return(
        <main>
            <Layout pageTitle='About'></Layout>
                <p>Ciao a voi, sono Gabriela, una cuoca, ma non solo.</p>
                <p>Qui troverete l'estratto di quel che era il mio esordio su internet, adesso però fatto con tecnologie superiori C:</p>
            <h2>Da qui a lì</h2>
                <p>La mia gran specialità è la pasticceria, per cui ancora non ho un sito, ma presto lo troverete online, nel frattempo vi lascio qua sotto i miei Social</p>
                <a href="https://www.instagram.com/sablehomebakery/">Instagram</a>
        </main>
    )
}

export default AboutPage

export const Head = () => (
<>
    <title>About Me</title>
    <meta name='description' content="Let me tell something more about me"/>
</>
)