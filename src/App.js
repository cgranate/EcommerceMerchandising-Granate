import './App.css';
import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import ItemCount from './components/ItemCount.jsx';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer saludo="¡Bienvenidxs!" />
      <ItemCount stock={6} initial={1} />
    </div>
  );
};

export default App;