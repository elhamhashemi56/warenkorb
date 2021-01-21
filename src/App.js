
import './App.css';
import {Provider} from 'react-redux'
import store from './store'
import ListProdukts from '../src/components/ListProdukts'
import WagenKorb from '../src/components/WagenKorb'


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ListProdukts />
        <WagenKorb />
      
      </div>
    </Provider>
  );
}

export default App;
