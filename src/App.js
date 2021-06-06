import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import ItemListContainer from './components/ItemListContainer.jsx';

function App() {
  return (
    <>      
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
        </Switch>
      </BrowserRouter>
      
    </>
  );
};

export default App;