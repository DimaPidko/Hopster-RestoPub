import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Main from '../app/main/Main';
import Menu from '../app/menu/Menu';
import Contacts from '../app/contacts/Contacts';
import Beers from '../app/beers/Beers';
import Modal from '../ui/modal/Modal';

const Router = () => {
    const { onModal } = useSelector((state) => state.modal);
    return (
        <BrowserRouter>
            {onModal && <Modal />}
            <Routes>
                <Route
                    path="/"
                    element={<Main />}
                />
                <Route
                    path="/menu"
                    element={<Menu />}
                />
                <Route
                    path="/contacts"
                    element={<Contacts />}
                />
                <Route
                    path="/beers"
                    element={<Beers />}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
