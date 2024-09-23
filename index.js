import React, {Component, createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import RootLayout from './app/layout';


class App extends React.Component {
    constructor(props) {
        super(props);

        const root = ReactDOM.createRoot(
            document.getElementById('root')
        );
        root.render(
            <>
                <App />
                <RootLayout />
            </>);
    }


}

export default App