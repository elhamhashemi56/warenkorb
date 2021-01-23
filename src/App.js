
import './App.css';
import {Provider} from 'react-redux'
import store from './store'
import ListProdukts from '../src/components/ListProdukts'
import WarenKorb from '../src/components/WarenKorb'


function App() {
  return (
    <Provider store={store}>
      <div className="AppContainer">
        <div className='lineTitle'><h3>MEIN PRODUKTS ..........................</h3></div>
        <div><ListProdukts /></div>
        <div className='lineTitle'><h3>MEIN WARENKORB ..........................</h3></div>
        <div><WarenKorb /></div>
      </div>
    </Provider>
  );
}

export default App;
