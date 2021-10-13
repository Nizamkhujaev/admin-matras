import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Sidebar from './containers/sidebar';
import Header from './containers/header';
import Overlay from './components/overlay/Overlay';

import Home from './pages/home';
import Customers from './pages/customer';
import Categories from './pages/category';
import Product from './pages/product';
import Technologies from './pages/settings';

import Error from './pages/error'

import './assets/styles/main.scss'


function App() {
  // let sessionToken = localStorage.getItem('sessionToken')
  const [addCategory, setAddCategory] = useState(false)
  return (
    <Router>
      <div className="App">
        <Overlay
          addCategory={addCategory}
        />
        <div className="App-left">
          <Sidebar />
        </div>

        <div className={`App-right ${addCategory ? 'category-add-app' : ''}`}>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/customers' component={Customers} />
            <Route path='/categories'>
              <Categories
                addCategory= {addCategory}
                setAddCategory={setAddCategory}
              />
            </Route>
            <Route path='/products' component={Product} />
            <Route path='/settings' component={Technologies} />
            <Route path='*' component={Error} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;