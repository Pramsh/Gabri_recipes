//import { RecipeType } from "../typings"
import * as React from 'react'
import { RecipeType } from '../typings'
const Recipe = (props:RecipeType) => {
    return(
        <div>
        <h4>{props.title}</h4>
        </div>
    )
}

export default Recipe