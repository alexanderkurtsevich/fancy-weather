import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/appContainer';
import { Provider } from 'react-redux';
import store from './store/store';
import { I18nextProvider } from 'react-i18next';
import i18n from './int/i18n';
import './style/index.scss';

ReactDOM.render(
    <Provider store={store}>
        <I18nextProvider i18n={i18n}>
        <App />
        </I18nextProvider>
    </Provider>,
    document.getElementById('root')
);