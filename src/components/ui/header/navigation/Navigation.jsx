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
                <h1>123</h1>
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
