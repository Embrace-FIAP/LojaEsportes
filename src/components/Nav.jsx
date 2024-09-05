import {Link} from 'react-router-dom'
import React from 'react'

const Nav = () => {
    return (
        <>
            <Link to='/'>Home</Link>
            <Link to='/produtos'>Produtos</Link>
            <Link to='/contato'>Contato</Link>
        </>
    )
}

export default Nav
