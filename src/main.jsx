import ReactDOM from 'react-dom/client';
import Router from './components/router/router';
import { Provider } from 'react-redux';

import store from './store';

import './index.sass';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <Router />
    </Provider>
);
