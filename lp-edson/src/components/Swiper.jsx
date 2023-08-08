// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import '../styles/components/Swiper.sass';
import '../styles/components/AssessmentsCard.sass';

function renderStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
        stars.push(<FaStar key={`full-star-${i}`} style={{ color: 'gold' }} />);
    }

    if (hasHalfStar) {
        stars.push(<FaStarHalfAlt key="half-star" style={{ color: 'gold' }} />);
    }

    return stars;
}

function SwiperCarousel() {
    const assessments = [
        {
            name: 'Gabriel',
            rating: 4.5,
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias consequuntur repellat deleniti quo nesciunt ab quae dolor.',
        },
        {
            name: 'Gabrielly',
            rating: 5,
            content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias consequuntur repellat deleniti quo nesciunt ab quae dolor.',
        }
    ];

    return (
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
            {assessments.map((assessment, index) => (
                <SwiperSlide key={index}>
                    <div className="card">
                        <div className="card__perfil"></div>
                        <div className="card__person">
                            <h2>{assessment.name}</h2>
                            <div className="card__star-icon">
                                {renderStars(assessment.rating)}
                            </div>
                        </div>
                        <div className="card__assessments">{assessment.content}</div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default SwiperCarousel;
