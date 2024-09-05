import React from 'react'
import '../css/Base.css'
import '../css/Home.css'
import Video from '../assets/homevideo.mp4'

const Home = () => {
    return (
        <div className='home'>
            <div className="overlay"></div>
            <video src={Video} autoPlay loop muted />
            <div className='title'>
                <h1>WIN</h1>
            </div>
        </div>
    )
}

export default Home
