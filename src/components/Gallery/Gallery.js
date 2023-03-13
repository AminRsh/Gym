import React from 'react'
import Gallery2 from "../../assests/images/gallery.png";
import Gallery1 from "../../assests/images/gallery2.png";
import Gallery3 from "../../assests/images/gallery3.png";
import Gallery4 from "../../assests/images/gallery4.png";
import Gallery5 from "../../assests/images/gallery5.png";
import Gallery6 from "../../assests/images/gallery1.png";
import './Gallery.css'

const Gallery = () => {
    return (
        <section className="gallery" id='gallery'>
            <div className="img1">
                <img src={Gallery1} alt="" />
            </div>
            <div className="img2">
                <img src={Gallery4} alt="" />
            </div>
            <div className="img3">
                <img src={Gallery5} alt="" />
            </div>
            <div className="img4">
                <img src={Gallery6} alt="" />
            </div>
            <div className="img5">
                <img src={Gallery3} alt="" />
            </div>
            <div className="img6">
                <img src={Gallery2} alt="" />
            </div>
        </section>
    )
}

export default Gallery