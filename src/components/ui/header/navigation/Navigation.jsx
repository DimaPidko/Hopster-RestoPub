import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { handleResize } from './navigationSlice';

const Navigation = () => {
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

    return (
        <>
            {isMobile ? (
                <div class="hamburger-menu">
                    <input
                        id="menu__toggle"
                        type="checkbox"
                    />
                    <label
                        class="menu__btn"
                        for="menu__toggle">
                        <span></span>
                    </label>
                    <ul class="menu__box">
                        <li>
                            <Link
                                to="/"
                                className="menu__item">
                                ГОЛОВНА
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/menu"
                                className="menu__item">
                                МЕНЮ
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contacts"
                                className="menu__item">
                                КОНТАКТИ
                            </Link>
                        </li>
                    </ul>
                </div>
            ) : (
                <nav className="navigation">
                    <ul className="navigation__list">
                        <li className="navigation__list-item">
                            <Link
                                to="/"
                                className="navigation__list-item-link">
                                ГОЛОВНА
                            </Link>
                        </li>
                        <li className="navigation__list-item">
                            <Link
                                to="/menu"
                                className="navigation__list-item-link">
                                МЕНЮ
                            </Link>
                        </li>
                        <li className="navigation__list-item">
                            <Link
                                to="/contacts"
                                className="navigation__list-item-link">
                                КОНТАКТИ
                            </Link>
                        </li>
                    </ul>
                </nav>
            )}
        </>
    );
};

export default Navigation;
