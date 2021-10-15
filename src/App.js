import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Sidebar from './containers/sidebar';
import Header from './containers/header';
import Overlay from './components/overlay/Overlay';
import Delete from './components/delete';
import AddProduct from './containers/addProduct';
import AddTech from './components/addTech';
import EditLocation from './components/editLocation';

import Home from './pages/home';
import Customers from './pages/customer';
import Categories from './pages/category';
import Product from './pages/product';
import Technologies from './pages/settings';
import Location from './pages/location';
import Login from './pages/login';
import Error from './pages/error'

import './assets/styles/main.scss'


function App() {
  let sessionToken = localStorage.getItem('sessionToken')
  const [addCategory, setAddCategory] = useState(false)
  const [editCategory, setEditCategory] = useState(false)
  const [deletedCategory, setDeletedCategory] = useState(0)
  const [routeName,setRouteName] = useState()
  const [addProduct, setAddProduct] = useState(false)
  const [addTech, setAddTech] = useState(false)
  const [editLocation, setEditLocation] = useState(false)

  return (
    <Router>
      <div className="App">
        {
          sessionToken ? (
          <>
            <Overlay
              addCategory={addCategory}
              editCategory={editCategory}
              addProduct = {addProduct}
              addTech={addTech}
              editLocation={editLocation}
            />
        <Delete
          editCategory={editCategory}
          setEditCategory={setEditCategory}
          deletedCategory={deletedCategory}
          routeName={routeName}
        />
        <AddProduct
          addProduct={addProduct}
          setAddProduct = {setAddProduct}
        />

        <AddTech
          addTech={addTech}
          setAddTech={setAddTech}
        />

        <EditLocation
          editLocation={editLocation}
          setEditLocation = {setEditLocation}
        />

        <div className="App-left">
          <Sidebar />
        </div>

        <div className={`App-right  ${addCategory ? 'category-add-app' : editCategory ? 'category-add-app' : addProduct ? 'category-add-app' : addTech ? 'category-add-app' : editLocation ? 'category-add-app' : ''}`}>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />

            <Route path='/customers'>
              <Customers
                deletedCategory={deletedCategory}
                setDeletedCategory={setDeletedCategory}
                editCategory={editCategory}
                setEditCategory={setEditCategory}
                setRouteName={setRouteName}
              />  
            </Route>

            <Route path='/categories'>
              <Categories
                addCategory= {addCategory}
                setAddCategory={setAddCategory}
                editCategory={editCategory}
                setEditCategory={setEditCategory}
                deletedCategory={deletedCategory}
                setDeletedCategory={setDeletedCategory}
                setRouteName={setRouteName}
              />
            </Route>
            
            <Route path='/products' >
              <Product
                deletedCategory={deletedCategory}
                setDeletedCategory={setDeletedCategory}
                setRouteName={setRouteName}
                editCategory={editCategory}
                setEditCategory={setEditCategory}
                addProduct={addProduct}
                setAddProduct = {setAddProduct}
              />
            </Route>

            <Route path='/settings'>
              <Technologies
                setDeletedCategory={setDeletedCategory}
                setRouteName={setRouteName}
                editCategory={editCategory}
                setEditCategory={setEditCategory}
                addTech={addTech}
                setAddTech={setAddTech}
              />
            </Route>

            <Route path='/location'>
              <Location
                setDeletedCategory={setDeletedCategory}
                setRouteName={setRouteName}
                editCategory={editCategory}
                setEditCategory={setEditCategory}
                editLocation={editLocation}
                setEditLocation = {setEditLocation}
              />
            </Route>
            <Route path='/login' component={Error} />
            <Route path='*' component={Error} />
          </Switch>
        </div>
          </>) : 

          <Switch>
            <Route exact path='/' component={Login} />
            <Route path='*' component={Error} />
          </Switch>
        }
      </div>
    </Router>
  );
}

export default App;