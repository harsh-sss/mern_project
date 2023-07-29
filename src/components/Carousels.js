import React from 'react'

export default function Carousels() {
    return (
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/01072023-UHP-D-MAIN-P1-AxSuperdry-upto50extra35.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://i.pinimg.com/originals/ec/da/c3/ecdac3a87cb45215c26a5b77e40d649f.png" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/01072023-UHP-D-MAIN-P3-trendsAvaasaDNMX-min60.jpg" className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
