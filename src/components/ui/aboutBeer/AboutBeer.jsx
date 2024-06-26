import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import images from './data/images';

const AboutBeer = () => {
    return (
        <section className="aboutBeer">
            <Swiper
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
                {/* <SwiperSlide>
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
                </SwiperSlide> */}
            </Swiper>
            <div className="aboutBeer__wrapper">
                <p>
                    Звітайтеся до світу Hopster Brewery, де мистецтво пивоваріння
                    переплітається з історією та пристрастю до якісного пива. Наша
                    пивоварня запрошує вас на захоплюючу подорож у різноманіття смаків та
                    ароматів, кожен з яких - справжнє шедевр мистецтва.
                </p>
                <br />

                <p>
                    Наші сорти пива - це не лише унікальні рецепти, але й відображення
                    нашого прагнення до вдосконалення. Від класичних європейських стилів
                    до сміливих та сучасних експериментів, ми пропонуємо широкий вибір
                    пива для найвибагливіших гурманів.
                </p>
                <br />

                <p>
                    Зануртеся у атмосферу смаку з нашим різноманітним асортиментом,
                    включаючи такі улюблені сорти, як Plzen 1842, Arnold та Buffalo.
                    Відкрийте для себе давні традиції з Degenberg 1548 та Spaten 1894, або
                    вируште у подорож у минуле з Theresa 1810.
                </p>
                <br />

                <p>
                    Насолоджуйтеся неймовірними ароматами та смаками з Vermont та Nevada,
                    або зануртесь у пригоду з Fiat 124 та Golden Ale 1918. Або, можливо,
                    ви віддасте перевагу ніжному шарму Milk Stout або освіжаючій Blanche
                    1318.
                </p>
                <br />

                <p>
                    У Hopster Brewery ми прагнемо створювати пиво, яке не лише задовольняє
                    ваші смакові уподобання, але й залишає незабутні враження. Підніміть
                    келих та насолоджуйтесь кожним ковтком разом з нами.
                </p>
                <br />

                <p>
                    Приєднуйтесь до нас у захоплюючій подорожі світом пива. Знайомтеся з
                    новими смаками, діліться радістю спілкування та відкривайте для себе
                    світ Hopster Brewery.
                </p>
            </div>
        </section>
    );
};

export default AboutBeer;
