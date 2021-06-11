import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import ItemListContainer from './components/ItemListContainer.jsx';
import Cart from './components/Cart.jsx';
import {CartProvider} from './components/CartProvider.jsx';


function App() {
  return (
    <>
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <ItemListContainer />
          </Route>
          <Route exact path="/merch">
            <ItemListContainer />
          </Route>
          <Route exact path="/merch/:id">
            <ItemListContainer />
          </Route>
          <Route exact path="/item/:id">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>
      </BrowserRouter>
    </CartProvider>
      
    </>
  );
};

export default App;