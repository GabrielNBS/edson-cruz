// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./GalleryContainer.sass"

function GalleryContainer() {
    return (
        <section className="gallery">
            <div className="container">
                <div className="gallery__text">
                    <h2 className='gallery__text__content'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                </div>
                <div className='gallery__img'>
                    <img className='gallery__img__content' src="https://placehold.co/500" alt="#" />
                </div>
                <div className='gallery__img'>
                    <img className='gallery__img__content' src="https://placehold.co/500" alt="#" />
                </div>
                <div className="gallery__text">
                    <h2 className='gallery__text__content gallery__text__content--text-right'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                </div>
            </div>
        </section>
    )
}

export default GalleryContainer