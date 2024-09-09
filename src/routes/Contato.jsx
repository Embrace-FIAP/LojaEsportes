import React from 'react'
import '../css/Contato.css'
import ContatoImg from '../assets/contatoimg.avif'
import Youtube from '../assets/youtube.png'
import Instagram from '../assets/instagram.png'
import WhatsApp from '../assets/whatsapp.png'

const Contato = () => {
    return (
        <div className='contato'>
            <div className='contatoSection'>
                <h3 className='heading3'>Entre em contato conosco</h3>
                <h1 className='heading1'>Contato WIN</h1>
                <p className='text'>
                    Nossa equipe é formada por especialistas apaixonados por esporte, comprometidos em ajudar você a escolher os melhores produtos para cada objetivo. Aqui, você não apenas encontra equipamentos, mas também orientação profissional para elevar seu desempenho.
                </p>
                <img src={ContatoImg} className='contatoImg' />
                <h3 className='heading3'>
                    Seja parte da nossa comunidade de vencedores!
                </h3>
                <p className='text2'><img src={Instagram} className='instagramImg' /><span>Instagram:</span> winsports</p>
                <p className='text2'><img src={Youtube} className='youtubeImg' /><span>Youtube: </span> WIN Sports</p>
                <p className='text3'><img src={WhatsApp} className='whatsappImg' /><span>WhatsApp:</span> 21 98764-2742</p>
            </div>
        </div>
    )
}

export default Contato
