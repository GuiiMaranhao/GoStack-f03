import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalsStyle from './styles/global';
import AppProvider from './hooks';
import Routes from './routes';

const App: React.FC = () => (
    <BrowserRouter>
        <AppProvider>
            <Routes />
        </AppProvider>
        <GlobalsStyle />
    </BrowserRouter>
);

export default App;
