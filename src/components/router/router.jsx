import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from '../app/main/Main';
import Menu from '../app/menu/Menu';
import Contacts from '../app/contacts/Contacts';

const Router = () => {
    return (
        <BrowserRouter>
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
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
