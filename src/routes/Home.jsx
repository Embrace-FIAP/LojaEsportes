import React from 'react'
import '../css/Base.css'
import '../css/Home.css'
import Video from '../assets/homevideo.mp4'
import Boxe from '../assets/boxead.jpg'
import Corrida from '../assets/runad.jpg'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <div className='home'>
                <div className="overlay"></div>
                <video src={Video} autoPlay loop muted />
                <div className='title'>
                    <h1>WIN</h1>
                </div>
            </div>
            <div className='homeUnder'>
                <h3 className='heading3'>WIN Running</h3>
                <h1 className='heading1'>Vencer não é Confortável</h1>
                <p className='text'>Se você não odeia correr um pouco, você não ama correr o suficiente.</p>
                <Link to='/produtos'>
                    <button className='btnColecao'>
                        Ver Coleção
                    </button>
                </Link>
                <img src={Corrida} className='runAd' />

                <div className='line'></div>

                <h3 className='heading3'>WIN Boxing</h3>
                <h1 className='heading1'>A Nobre Arte</h1>
                <p className='text'>Viver significa lutar.</p>
                <Link to='/produtos'>
                    <button className='btnColecao'>
                        Ver Coleção
                    </button>
                </Link>
                <img src={Boxe} className='boxeAd' />
                
            </div>
        </>
    )
}

export default Home
