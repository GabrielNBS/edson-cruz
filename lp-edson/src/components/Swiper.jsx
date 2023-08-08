import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../styles/components/Swiper.sass';
import '../styles/components/AssessmentsCard.sass'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function SwiperCarousel() {

    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="card">
                        <div className="card__perfil"></div>
                        <div className="card__person">
                            <h2>
                                gabriel
                            </h2>
                        </div>
                        <div className="card__assessments">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias consequuntur repellat deleniti quo nesciunt ab quae dolor.
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card">
                        <div className="card__perfil"></div>
                        <div className="card__person">
                            <h2>
                                gabriel
                            </h2>
                        </div>
                        <div className="card__assessments">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias consequuntur repellat deleniti quo nesciunt ab quae dolor.
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default SwiperCarousel