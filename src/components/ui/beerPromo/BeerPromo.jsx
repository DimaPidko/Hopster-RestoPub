import React, { useEffect, useRef, useState } from "react"
import { animated, useSpring } from "react-spring"
import beerImg from "./beerImg"

const BeerPromo = () => {
    const [visibleIndexes, setVisibleIndexes] = useState([]);
    const observer = useRef(null);

    useEffect(() => {
        const handleIntersect = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setVisibleIndexes((prevIndexes) => [
                        ...new Set([
                            ...prevIndexes,
                            parseInt(entry.target.dataset.index),
                        ]),
                    ]);
                }
            });
        };

        observer.current = new IntersectionObserver(handleIntersect, {
            threshold: 0.009,
        });

        const elements = document.querySelectorAll('.beer__wrapper');
        elements.forEach((element) => {
            observer.current.observe(element);
        });

        return () => {
            if (observer.current) {
                observer.current.disconnect();
            }
        };
        
    }, []);

    return (
        <div>
            {beerImg.map((beer, index) => (
                <AnimatedBlock
                    key={index}
                    beer={beer}
                    index={index}
                    isVisible={visibleIndexes.includes(index)}
                />
            ))}
        </div>
    );
};

const AnimatedBlock = ({ beer, index, isVisible }) => {
    const animation = useSpring({
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateX(0)' : 'translateX(-100%)',
    });

    return (
        <animated.div
            style={animation}
            className="beer__wrapper"
            data-index={index}>
            <div className="beer__wrapper-inner">
                <img
                    src={beer.imgURL}
                    alt={beer.imgALT}
                    className="beer__wrapper-img"
                />
                <h2 className="beer__wrapper-title">{beer.title}</h2>
                <div className="beer__wrapper-char">
                    <h3>OG/Сусло: {beer.OG}</h3>
                    <h3>ABV/Алкоголь: {beer.ABV}</h3>
                    <h3>IBU/Гіркота: {beer.IBU}</h3>
                    <h3>Color/Колір: {beer.Color}</h3>
                </div>
                <p className="beer__wrapper-descr">{beer.description}</p>
            </div>
        </animated.div>
    );
};

export default BeerPromo;
