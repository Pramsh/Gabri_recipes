import * as React from 'react'

 const AboutPage = () => {
    return(
        <main>
            <h1>About Me!</h1>
                <p>Ciao a voi, sono Gabriela, una cuoca, ma non solo.</p>
                <p>Qui troverete l'estratto di quel che era il mio esordio su internet, adesso però fatto con tecnologie superiori C:</p>
            <h2>Da qui a lì</h2>
                <p>La mia gran specialità è la pasticceria, per cui ancora non ho un sito, ma presto lo troverete online, nel frattempo vi lascio qua sotto i miei Social</p>
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