import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { handleResize } from '../navigation/navigationSlice.js';

const Buttons = () => {
    const modal = document.querySelector('.modal__wrapper');
    // const overlay = document.querySelector('.overlay');

    const { isMobile } = useSelector((state) => state.navigation);
    const dispatch = useDispatch();

    useEffect(() => {
        const handleWindowResize = () => {
            dispatch(handleResize(window.innerWidth <= 768));
        };
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, [dispatch]);

    const onReservClick = (e) => {
        e.preventDefault();
        modal.classList.toggle('modal-active');
    };

    return (
        <>
            {isMobile ? (
                <a
                    href="tel:+380668370182"
                    style={{ position: 'fixed', bottom: '10px', right: '10px' }}>
                    <svg
                        className="mobile-phone"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512">
                        <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                    </svg>
                </a>
            ) : (
                <div className="wrapper">
                    <div className="wrapper__item">
                        <button
                            onClick={(e) => onReservClick(e)}
                            className="wrapper__item-btn">
                            Забронювати
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512">
                                <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Buttons;
