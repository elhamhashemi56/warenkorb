import './ProduktsItems.css'
import {connect} from 'react-redux'
const ListProduktsItems =(props)=>{
    return(
     
        <div>
        <li className='ProduktsItems'>
            <div className='pItems'>{props.title}</div>
            <div className='pItems'>|</div>
            <div className='pItems'>${props.price}</div>
            <div className='pItems'>|</div>
            <div className='pItems'>x{props.inventory}</div>
            <button className='pItems' onClick={()=>props.addToCart(props.id)}>Add to cart</button>
        </li>
        
        </div>
        
     
    )
}

const mapDispatchToProps=(dispatch)=>({
    addToCart: (data) => dispatch({type:'ADD_TOCART',payload:data})
})

export default connect(null,mapDispatchToProps)(ListProduktsItems)