import images from './data/images';

import CustomCarousel from '../../custom/slider/Slider';

const Welcome = () => {
    return (
        <section className="welcome">
            <CustomCarousel>
                {images.map((image, index) => {
                    return (
                        <img
                            key={index}
                            src={image.imgURL}
                            alt={image.imgAlt}
                        />
                    );
                })}
            </CustomCarousel>
        </section>
    );
};

export default Welcome;
