import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { handleResize } from '../navigation/navigationSlice.js';
import { changeModalActivity } from '../../modal/ModalSlice.js';

const Buttons = () => {
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
        dispatch(changeModalActivity());
    };

    return (
        <>
            {isMobile ? (
                <a href="tel:+380660005077">
                    <div className="mobile-phone">
                        <i class="fa fa-phone"></i>
                    </div>
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
