import './WarenKorb.css'
import {connect} from 'react-redux'
import WagenItems from './WagenItems'


const WagenKorb = (props) =>{

    return(
        <div className='WarenKorb'>
           <ul>
               {props.warenkorb.map((element,index)=>{
                   
                  return <WagenItems id={element.id}
                                     key={index}
                                     title={element.title}
                                     price={element.price}
                                     inventory={element.inventory} />
                 }
               )}
           </ul>
           <div>Total:</div>
           <button>Checkout</button>
        </div>
    )
}

const mapStateToProps=(state)=>({
    warenkorb:state.produktReducer.warenkorb,
    zahlEinkauf:state.produktReducer.zahlEinkauf
})

export default connect(mapStateToProps)(WagenKorb)