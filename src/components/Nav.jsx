import {Link} from 'react-router-dom'
import React from 'react'
import '../css/Base.css'
import '../css/Nav.css'
import Trofeu from '../assets/trofeu.png'
import Lupa from '../assets/lupa.png'
import Coracao from '../assets/coracao.png'
import Carrinho from '../assets/carrinho.png'

const Nav = () => {
    return (
        <div className='navBar'>
            <img src={Trofeu} className='logoImg' />
            <Link to='/' className='navLink'>Home</Link>
            <Link to='/produtos' className='navLink'>Produtos</Link>
            <Link to='/contato' className='navLink'>Contato</Link>
            <div className='searchBox'>
                <img src={Lupa} className='searchImg' />
                <input type='text' placeholder='Buscar' className='searchInput' />
            </div>
            <div className='navBuy'>
                <img src={Coracao} className='coracaoImg' />
                <img src={Carrinho} className='carrinhoImg' />
            </div>
        </div>
    )
}

export default Nav
