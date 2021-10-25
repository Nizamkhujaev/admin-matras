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
import EditCategory from './components/editCategory';
import EditTech from './components/editTech';
import EditLoc from './components/editLoc'
import EditProduct from './components/editProduct';
import Slider from './pages/Slider'
import EditCarousel from './components/editCarousel'
import Modal from './components/modal'
import EditStat from './components/editStat';

import Home from './pages/home';
import Customers from './pages/customer';
import Categories from './pages/category';
import Product from './pages/product';
import Technologies from './pages/settings';
import Location from './pages/location';
import Login from './pages/login';
import SliderList from './pages/type'
import Statis from './pages/statis'
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
  const [categoryBlock,setCategoryBlock] = useState(false)
  const [editCatId,setEditCatId] = useState(0)
  const [editTech, setEditTech] = useState(false)
  const [editTechId,setEditTechId] = useState(0)
  const [editLoc,setEditLoc] = useState(false)
  const [editLocId, setEditLocId] = useState(0)
  const [editProduct, setProduct] = useState(false)
  const [editProductId,setProductId] = useState(0)
  const [addCarousel,setAddCarousel] = useState(false)
  const [editCarousel,setEditCarousel] = useState(false)
  const [editedCarousel, setEditedCarousel] = useState(0)
  const [modal,setModal] = useState(false)
  const [stat,setStat] = useState(false)

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
              categoryBlock={categoryBlock}
              editTech={editTech}
              editLoc={editLoc}
              editProduct={editProduct}
              addCarousel={addCarousel}
              editCarousel={editCarousel}
              stat={stat}
            />
            <Delete
              editCategory={editCategory}
              setEditCategory={setEditCategory}
              deletedCategory={deletedCategory}
              setDeletedCategory = {setDeletedCategory}
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

            <EditLoc
              editLoc={editLoc}
              setEditLoc={setEditLoc}
              editLocId={editLocId}
            />

            <EditCategory
              categoryBlock={categoryBlock}
              setCategoryBlock={setCategoryBlock}
              editCatId={editCatId}
            />

            <EditTech
              editTech={editTech}
              setEditTech = {setEditTech}
              editTechId={editTechId}
            />

            <EditProduct
              editProduct={editProduct}
              setProduct={setProduct}
              editProductId={editProductId}
            />

            <Slider
              addCarousel={addCarousel}
              setAddCarousel={setAddCarousel}
            />

            <EditCarousel
              editCarousel={editCarousel}
              setEditCarousel={setEditCarousel}
              editedCarousel = {editedCarousel}
            />

            <Modal
              modal = {modal}
              setModal={setModal}
            />

            <EditStat
              stat= {stat}
              setStat= {setStat}
            />

        <div className="App-left">
          <Sidebar />
        </div>

        <div className={`App-right  ${addCategory ? 'category-add-app' : editCategory ? 'category-add-app' : addProduct ? 'category-add-app' : addTech ? 'category-add-app' : editLocation ? 'category-add-app' : categoryBlock ? 'category-add-app' : editTech ? 'category-add-app' : editLoc ? 'category-add-app': editProduct ? 'category-add-app' : addCarousel ? 'category-add-app' : editCarousel ? 'category-add-app' : stat ?  'category-add-app' : ''}`}>
          <Header
            modal = {modal}
            setModal={setModal}
          />
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
                categoryBlock={categoryBlock}
                setCategoryBlock={setCategoryBlock}
                setEditCatId={setEditCatId}
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
                editProduct={editProduct}
                setProduct={setProduct}
                setProductId={setProductId}
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
                editTech={editTech}
                setEditTech = {setEditTech}
                setEditTechId={setEditTechId}
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
                editLoc={editLoc}
                setEditLoc={setEditLoc}
                setEditLocId={setEditLocId}
              />
            </Route>

            <Route path='/slider'>
              <SliderList
                addCarousel={addCarousel}
                setAddCarousel={setAddCarousel}
                setRouteName={setRouteName}
                setDeletedCategory={setDeletedCategory}
                editCategory={editCategory}
                setEditCategory={setEditCategory}
                editCarousel={editCarousel}
                setEditCarousel={setEditCarousel}
                setEditedCarousel = {setEditedCarousel}
              />
            </Route>

            <Route path='/results'>
              <Statis
                stat= {stat}
                setStat= {setStat}
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