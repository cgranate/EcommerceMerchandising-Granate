import './App.css';
import NavBar from './components/NavBar.jsx';
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
//import ItemListContainer from './components/ItemListContainer.jsx';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemDetailContainer />
    </div>
  );
};

export default App;