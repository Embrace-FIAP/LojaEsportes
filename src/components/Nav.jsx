import {Link} from 'react-router-dom'
import React from 'react'
import '../css/Base.css'
import '../css/Nav.css'

const Nav = () => {
    return (
        <div className='navBar'>
            <Link to='/'>Home</Link>
            <Link to='/produtos'>Produtos</Link>
            <Link to='/contato'>Contato</Link>
        </div>
    )
}

export default Nav
