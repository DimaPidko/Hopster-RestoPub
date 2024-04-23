import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import images from './data/images';

const Welcome = () => {
    return (
        <section className="welcome">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper">
                <SwiperSlide>
                    <img
                        src={images[0].imgURL}
                        alt={images[0].imgAlt}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={images[1].imgURL}
                        alt={images[1].imgAlt}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={images[2].imgURL}
                        alt={images[2].imgAlt}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={images[3].imgURL}
                        alt={images[3].imgAlt}
                    />
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Welcome;
