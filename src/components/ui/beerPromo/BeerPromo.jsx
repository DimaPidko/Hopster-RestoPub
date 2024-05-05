import { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';

import beerImg from './beerImg';

const BeerPromo = () => {
    const [visibleIndexes, setVisibleIndexes] = useState([]);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 425);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const scrollY = window.scrollY;
            const threshold = isMobile ? windowHeight / 2 : windowHeight;

            const newVisibleIndexes = [];

            beerImg.forEach((_, index) => {
                const blockTop = isMobile ? index * 520 : index * 720;
                const isVisible = isMobile
                    ? scrollY > blockTop - threshold && scrollY < blockTop + 500
                    : scrollY > blockTop - threshold && scrollY < blockTop + 700;

                if (isVisible && !visibleIndexes.includes(index)) {
                    newVisibleIndexes.push(index);
                }
            });

            setVisibleIndexes((prevIndexes) => [...prevIndexes, ...newVisibleIndexes]);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isMobile]);

    return (
        <div>
            {beerImg.map((beer, index) => (
                <AnimatedBlock
                    key={index}
                    beer={beer}
                    isVisible={visibleIndexes.includes(index)}
                />
            ))}
        </div>
    );
};

const AnimatedBlock = ({ beer, isVisible }) => {
    const animation = useSpring({
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateX(0)' : 'translateX(-100%)',
    });

    return (
        <animated.div style={animation}>
            <div class="beer__wrapper">
                <img
                    src={beer.imgURL}
                    alt={beer.imgALT}
                    class="beer__wrapper-img"
                />
                <h2 class="beer__wrapper-title">{beer.title}</h2>
                <div class="beer__wrapper-char">
                    <h3>OG/Сусло: {beer.OG}</h3>
                    <h3>ABV/Алкоголь: {beer.ABV}</h3>
                    <h3>IBU/Гіркота: {beer.IBU}</h3>
                    <h3>Color/Колір: {beer.Color}</h3>
                </div>
                <p class="beer__wrapper-descr">{beer.description}</p>
            </div>
        </animated.div>
    );
};

export default BeerPromo;
