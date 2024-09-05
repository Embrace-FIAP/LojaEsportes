import {Link} from 'react-router-dom'
import React from 'react'
import '../css/Base.css'
import '../css/Nav.css'
import Trofeu from '../assets/trofeu.png'

const Nav = () => {
    return (
        <div className='navBar'>
            <img src={Trofeu} className='logoImg' />
            <h1 className='logo'>Champions</h1>
            <Link to='/' className='navLink'>Home</Link>
            <Link to='/produtos' className='navLink'>Produtos</Link>
            <Link to='/contato' className='navLink'>Contato</Link>
        </div>
    )
}

export default Nav
