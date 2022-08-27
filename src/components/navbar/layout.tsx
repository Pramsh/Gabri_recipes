// @ts-nocheck
import * as React from 'react'
//import { Link } from 'gatsby'
import Navbar from './navbar'
import {
  title,
  container,
  heading,
  nav_links,
  nav_link_item,
  nav_link_text
 } from '../css/layout.module.css'


const Layout = ({ pageTitle }:{pageTitle:string}) => {
  return (
    <div className={container}>
      <nav>
        <Navbar></Navbar>
      </nav>
      <main>
        <h1 className={title}>{pageTitle}</h1>
      </main>
    </div>
  )
}
export default Layout