// @ts-nocheck
import * as React from 'react'
//import { Link } from 'gatsby'
import Navbar from './navbarLayout/navbar'
import {
  title,
  container,
  heading
 } from './headCSS/layout.module.css'


const Layout = ({ pageTitle }:{pageTitle:string}) => {
  return (
    <div className={container}>
      <nav>
        <Navbar>
        </Navbar>
      </nav>
      <main>
        <h1 className={title}>{pageTitle}</h1>
      </main>
    </div>
  )
}
export default Layout