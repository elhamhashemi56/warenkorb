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
           <div>
                <div className='total'>Total:$
                    {props.warenkorb.reduce((accumulator,current)=>{
                       return accumulator+current.price*current.inventory
                    },0)}
                </div>
               
                <button onClick={()=>props.checkout()} className='Checkout'>Checkout</button>
            </div>
        </div>
    )
}

const mapStateToProps=(state)=>({
    warenkorb:state.produktReducer.warenkorb,
})

const mapDispatchToProps=(dispatch)=>({
    checkout: ()  => dispatch({type:'CHECK_OUT'})
})

export default connect(mapStateToProps,mapDispatchToProps)(WagenKorb)