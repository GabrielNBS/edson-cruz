// eslint-disable-next-line no-unused-vars
import React from 'react'
import "../styles/components/AssessmentsContainer.sass"
import SwiperCarousel from './Swiper'

function AssessmentsContainer() {
    return (
        <section className='assessments'>
            <div className="container">
                <SwiperCarousel />
            </div>
        </section>
    )
}

export default AssessmentsContainer