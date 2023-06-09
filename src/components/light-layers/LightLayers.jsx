import React from 'react'
import ReactPlayer from 'react-player'
import './LightLayers.scss'
import video from '../../assets/video1.mp4'
const LightLayers = () => {
  return (
    <section className='light-layers'>
        <div className="light-layers_cta">
            <h3>Light Layers</h3>
            <p>The Pre-Fall 2021 womenswear collections lightweight jackets in relaxed fits.</p>
            <button className='light-layers_button'>Shop Now</button>
        </div>
        <div className="light-layers_teaser-image">
            <ReactPlayer playing muted loop url={video} height='100%' width='100%'/>
            {/* <img src={teaser} alt="" /> */}
        </div>
    </section>
  )
}

export default LightLayers