import React from 'react'
import '../css/Produtos.css'
import { Link } from 'react-router-dom'
import Tenis1 from '../assets/tenis1.avif'
import Tenis2 from '../assets/tenis2.avif'
import Tenis3 from '../assets/tenis3.avif'
import Tenis4 from '../assets/tenis4.avif'
import Bolsa from '../assets/bag.avif'
import Meias from '../assets/meias.avif'

const Produtos = () => {
    return (
        <div className='produtos'>

            <h1 className='sectionHeading'>Produtos WIN</h1>

            <div className='cardSection'>
                <Link>
                    <div className='card'>
                        <img src={Tenis1} className='cardImg' />
                        <p className='cardTitle'>Nike Winflo 10 Branco</p>
                        <p className='cardSubtitle'>Corrida</p>
                        <p className='cardPrice'>R$531,99</p>
                    </div>
                </Link>
                <Link>
                    <div className='card'>
                        <img src={Tenis2} className='cardImg' />
                        <p className='cardTitle'>Nike Air Pegasus 40 Premium</p>
                        <p className='cardSubtitle'>Corrida</p>
                        <p className='cardPrice'>R$940,49</p>
                    </div>
                </Link>
                <Link>
                    <div className='card'>
                        <img src={Tenis3} className='cardImg' />
                        <p className='cardTitle'>Nike Winflo 10 Preto</p>
                        <p className='cardSubtitle'>Corrida</p>
                        <p className='cardPrice'>R$408,49</p>
                    </div>
                </Link>
            </div>

            <div className='cardSection'>
                <Link>
                    <div className='card2'>
                        <img src={Bolsa} className='cardImg' />
                        <p className='cardTitle2'>Bolsa Nike Brasilia</p>
                        <p className='cardSubtitle2'>Acessórios</p>
                        <p className='cardPrice2'>R$237,49</p>
                    </div>
                </Link>
                <Link>
                    <div className='card2'>
                        <img src={Tenis4} className='cardImg' />
                        <p className='cardTitle2'>Nike In-Season TR 13</p>
                        <p className='cardSubtitle2'>Treino</p>
                        <p className='cardPrice2'>R$417,99,00</p>
                    </div>
                </Link>
                <Link>
                    <div className='card2'>
                        <img src={Meias} className='cardImg' />
                        <p className='cardTitle2'>Meia Nike Multiplier</p>
                        <p className='cardSubtitle2'>Corrida</p>
                        <p className='cardPrice2'>R$123,49</p>
                    </div>
                </Link>
            </div>

            <br></br>

        </div>
    )
}

export default Produtos
