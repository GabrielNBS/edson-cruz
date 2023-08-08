// eslint-disable-next-line no-unused-vars
import React from 'react'
import "../styles/components/AssessmentsContainer.sass"
import SwiperCarousel from './Swiper'

function AssessmentsContainer() {
    return (
        <section className='assessments'>
            <div className="container">
                <h2 className='assessments__title'>
                    Sua satisfação em <span>1°lugar</span>
                </h2>
                <SwiperCarousel />
            </div>
        </section>
    )
}

export default AssessmentsContainer