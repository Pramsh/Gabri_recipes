
// Step 1: Import React
import * as React from 'react'
import {Link } from 'gatsby'
import Layout from '../components/navbar/layout'
// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Homepage"></Layout>
      <h2>Benvenuto sulla pagina delle ricette di GabriZuppaInglese!</h2>
        <p>Qua trovererai tutte le ricette collezionate durante la mia prima presenza online!</p>
        <Link to="/recipes">Clicca qui per le ricette</Link>
        <br/>
      <Link to="/about">Clicca qua per sapere qualcosa di più su di me!</Link>   
    </main>
  )
}
// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>


// Step 3: Export your component
export default IndexPage