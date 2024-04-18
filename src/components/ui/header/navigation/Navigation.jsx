import { Link } from 'react-router-dom';

import './Navigation.sass';

const Navigation = () => {
    return (
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
    );
};

export default Navigation;
