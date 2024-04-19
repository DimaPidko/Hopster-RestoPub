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
                                src="https://www.hopster.tv/static/f12df19e11ee30ac52f030ee6b8d0014/f8e28/white.png"
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
