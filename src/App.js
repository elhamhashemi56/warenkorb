
import './App.css';
import {Provider} from 'react-redux'
import store from './store'
import ListProdukts from '../src/components/ListProdukts'
import WarenKorb from '../src/components/WarenKorb'


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ListProdukts />
        <WarenKorb />
      
      </div>
    </Provider>
  );
}

export default App;
