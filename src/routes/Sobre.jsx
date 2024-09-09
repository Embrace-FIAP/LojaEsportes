import React from 'react'
import '../css/Sobre.css'
import SobreImg from '../assets/sobreimg.avif'

const Sobre = () => {
    return (
        <div className='sobre'>
            <div className='sobreSection'>
                <h3 className='sobreHeading3'>Conheça um pouco mais a equipe WIN</h3>
                <h1 className='sobreHeading1'>Nossa História</h1>
                <img src={SobreImg} className='sobreImg' />
                <p className='text'>
                    Fundada por <span>apaixonados</span> por esportes, a <span>WIN</span> nasceu com o objetivo de alavancar atletas de todos os níveis. Desde nossa criação, temos trabalhado para oferecer produtos que combinam <span>inovação</span>, <span>desempenho</span> e <span>estilo</span>. Inspirados pelo espírito competitivo, nossa logo em forma de troféu simboliza a vitória e o compromisso em <span>alcançar sempre o topo</span>.
                </p>
                <p className='text2'>
                    Na <span>WIN</span>, acreditamos que cada atleta carrega dentro de si a chama da vitória. Nossa missão é oferecer produtos de alta qualidade que ajudam você a alcançar o seu melhor, seja nas pistas, nas quadras ou nas academias. Aqui, cada peça de equipamento é projetada para <span>transformar desafios em conquistas</span>.
                </p>
            </div>
        </div>
    )
}

export default Sobre
