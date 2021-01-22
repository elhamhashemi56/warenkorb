import './ProduktsItems.css'
import {connect} from 'react-redux'
const ListProduktsItems =(props)=>{
    return(
     
        <li >
            <div  className='ProduktsItems'>
                <div className='propsitem'>
                    <div className='pItems'>{props.title}</div>
                    <div className='pItems'>|</div>
                    <div className='pItems'>${props.price}</div>
                    <div className='pItems'>|</div>
                    <div className='pItems'>x{props.inventory}</div>
                </div>
                <div>
                    <button disabled={!props.inventory} onClick={()=>{props.addToCart(props.id)}} className='butpro' >
                    {props.inventory ? 'Add To Cart' : 'Sold out'} 
                    </button>
                </div>
            </div>
        </li>
     
    )
}

const mapDispatchToProps=(dispatch)=>({
    addToCart: (data) => dispatch({type:'ADD_TOCART',payload:data})
})

export default connect(null,mapDispatchToProps)(ListProduktsItems)