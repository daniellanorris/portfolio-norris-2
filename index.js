import React, {Component, createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import CookieContext from './context/cookieContext'
import RootLayout from './app/layout';


class App extends React.Component {
    constructor(props) {
        super(props);
        const [cookie, setCookie] = useState(null)
        const value = {cookie, setCookie}

        const root = ReactDOM.createRoot(
            document.getElementById('root')
        );
        root.render(
            <>
            <CookieContext.Provider value={value}>
                <App />
                <RootLayout />
                </CookieContext.Provider>
            </>);
    }


}

export default App