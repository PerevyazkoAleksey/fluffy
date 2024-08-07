import './scss/styles'
import App from './app';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css'
import * as bootstrap from 'bootstrap';

ReactDOM.render(<App />, document.getElementById("root"));

const devMode = process.env.NODE_ENV === 'development';
if(devMode && module && module.hot) {
    module.hot.accept();
}