import React from 'react'
import '../css/Produtos.css'
import { Link } from 'react-router-dom'

const Produtos = () => {
    return (
        <div className='produtos'>

            <h1 className='sectionHeading'>Produtos</h1>

            <div className='cardSection'>
                <div className='card'>
                    <p className='cardTitle'>Título do produto</p>
                    <p className='cardSubtitle'>Corrida</p>
                    <p className='cardPrice'>R$832,00</p>
                </div>
                <div className='card'>
                    <p className='cardTitle'>Título do produto</p>
                    <p className='cardSubtitle'>Corrida</p>
                    <p className='cardPrice'>R$832,00</p>
                </div>
                <div className='card'>
                    <p className='cardTitle'>Título do produto</p>
                    <p className='cardSubtitle'>Corrida</p>
                    <p className='cardPrice'>R$832,00</p>
                </div>
            </div>

            <div className='cardSection'>
                <Link to='/sobre'>
                    <div className='card2'>
                        <p className='cardTitle2'>Título do produto</p>
                        <p className='cardSubtitle2'>Boxing</p>
                        <p className='cardPrice2'>R$832,00</p>
                    </div>
                </Link>
                
                <div className='card2'>
                    <p className='cardTitle2'>Título do produto</p>
                    <p className='cardSubtitle2'>Boxing</p>
                    <p className='cardPrice2'>R$832,00</p>
                </div>
                <div className='card2'>
                    <p className='cardTitle2'>Título do produto</p>
                    <p className='cardSubtitle2'>Boxing</p>
                    <p className='cardPrice2'>R$832,00</p>
                </div>
            </div>

            <br></br>

        </div>
    )
}

export default Produtos
