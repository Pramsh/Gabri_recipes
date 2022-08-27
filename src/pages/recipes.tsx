import * as React from 'react'
import Recipe from '../components/recipe'
import Layout from '../components/navbar/layout'
const ShowRecipes = () => {
    return(
        <div>
           <Layout pageTitle='Le mie ricette'></Layout>
            <Recipe title="Cappelèèt"/>
            <Recipe title="Carbonara"/>
            <Recipe title="Tigelle"/>
        </div>
    )
}

export default ShowRecipes