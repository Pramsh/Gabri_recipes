// @ts-nocheck
import React from "react";
import HomepageFrame from "./nav_frames/home_page_frame";
import Recipesframe from "./nav_frames/recipes_frame";
import Aboutframe from "./nav_frames/about_frame";
import { nav_links,nav_link_item} from '../css/navbar.module.css'
const Navbar = () => {
    return(
    <nav>
        <ul className={nav_links}>
            <li className={nav_link_item}><HomepageFrame></HomepageFrame></li>
            <li className={nav_link_item}><Recipesframe></Recipesframe></li>
            <li className={nav_link_item}><Aboutframe></Aboutframe></li>
        </ul>
    </nav>
    )
}

export default Navbar