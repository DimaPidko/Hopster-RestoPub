import { Link } from 'react-router-dom';

import Navigation from './navigation/Navigation';
import Buttons from './buttons/Buttons';

const Header = () => {
    return (
        <header className="header">
            <div className="header__wrapper">
                <Navigation />
                <div className="header__logo">
                    <Link to="/">
                        <div className="header__logo-img">
                            <img
                                src="/logo.png"
                                alt="logo"
                            />
                        </div>
                    </Link>
                </div>
                <Buttons />
            </div>
        </header>
    );
};

export default Header;
