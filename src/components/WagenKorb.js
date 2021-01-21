import './WagenKorb.css'
import {connect} from 'react-redux'
import WagenItems from './WagenItems'


const WagenKorb = (props) =>{

    return(
        <div className='WagenKorb'>
           <ul>
               {props.wagenkorb.map((element,index)=>{
                   console.log('zahl',props.zahlEinkauf);
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
    wagenkorb:state.produktReducer.wagenkorb,
    zahlEinkauf:state.produktReducer.zahlEinkauf
})

export default connect(mapStateToProps)(WagenKorb)