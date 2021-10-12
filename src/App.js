import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Sidebar from './containers/sidebar';
import Header from './containers/header';

import Home from './pages/home';


import './assets/styles/main.scss'


function App() {
  // let sessionToken = localStorage.getItem('sessionToken')
  return (
    <Router>
      <div className="App">
        <div className="App-left">
          <Sidebar />
        </div>

        <div className="App-right">
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />

          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;