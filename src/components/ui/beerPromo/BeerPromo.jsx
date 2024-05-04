import { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';

import beerImg from './beerImg';

const BeerPromo = () => {
    const [visibleIndexes, setVisibleIndexes] = useState([]);

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const scrollY = window.scrollY;
            const threshold = windowHeight;

            const newVisibleIndexes = [];

            beerImg.forEach((_, index) => {
                const blockTop = index * 750;
                const isVisible =
                    scrollY > blockTop - threshold && scrollY < blockTop + 750;
                if (isVisible) newVisibleIndexes.push(index);
            });

            setVisibleIndexes(newVisibleIndexes);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            {beerImg.map((beer, index) => (
                <AnimatedBlock
                    key={index}
                    beer={beer}
                    isVisible={visibleIndexes.includes(index)}
                    index={index}
                />
            ))}
        </div>
    );
};

const AnimatedBlock = ({ beer, isVisible, index }) => {
    const animation = useSpring({
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateX(0)' : `translateX(-100%)`,
    });

    return (
        <animated.div style={animation}>
            <div className="beer__wrapper">
                <img
                    src={beer.imgURL}
                    alt={beer.imgALT}
                    className="beer__wrapper-img"
                />
                <h2 className="beer__wrapper-title">{beer.title}</h2>
                <p className="beer__wrapper-descr">{beer.description}</p>
            </div>
        </animated.div>
    );
};

export default BeerPromo;
