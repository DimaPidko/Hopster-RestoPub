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
                <div className="hamburger-menu">
                    <input
                        id="menu__toggle"
                        type="checkbox"
                    />
                    <label
                        className="menu__btn"
                        htmlFor="menu__toggle">
                        <span></span>
                    </label>
                    <ul className="menu__box">
                        <li>
                            <Link
                                to="/"
                                className="menu__item">
                                ГОЛОВНА
                            </Link>
                        </li>
                        <li>
                            <a
                                href="https://expz.menu/1b161be0-8f20-495e-ac2e-ef609bd0906c"
                                className="menu__item">
                                МЕНЮ
                            </a>
                        </li>
                        <li>
                            <Link
                                to="/contacts"
                                className="menu__item">
                                КОНТАКТИ
                            </Link>
                        </li>
                        {/* <li>
                            <Link
                                to="/beers"
                                className="menu__item">
                                ПИВО
                            </Link>
                        </li> */}
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
                            <a
                                href="https://expz.menu/1b161be0-8f20-495e-ac2e-ef609bd0906c"
                                className="navigation__list-item-link">
                                МЕНЮ
                            </a>
                        </li>
                        <li className="navigation__list-item">
                            <Link
                                to="/contacts"
                                className="navigation__list-item-link">
                                КОНТАКТИ
                            </Link>
                        </li>
                        {/* <li className="navigation__list-item">
                            <Link
                                to="/beers"
                                className="navigation__list-item-link">
                                ПИВО
                            </Link>
                        </li> */}
                    </ul>
                </nav>
            )}
        </>
    );
};

export default Navigation;
