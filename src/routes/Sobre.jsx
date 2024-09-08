import React from 'react'
import '../css/Sobre.css'
import SobreImg from '../assets/sobreimg.avif'

const Sobre = () => {
    return (
        <div className='sobre'>
            <div className='sobreSection'>
                <h3 className='heading3'>Conheça um pouco mais a WIN</h3>
                <h1 className='heading1'>Nossa História</h1>
                <img src={SobreImg} className='sobreImg' />
                <p className='text'>
                    Fundada por apaixonados por esportes, a WIN nasceu com o objetivo de empoderar atletas de todos os níveis. Desde nossa criação, temos trabalhado para oferecer produtos que combinam inovação, desempenho e estilo. Inspirados pelo espírito competitivo, nossa logo em forma de troféu simboliza a vitória e o compromisso em alcançar sempre o topo.
                </p>
            </div>
        </div>
    )
}

export default Sobre
