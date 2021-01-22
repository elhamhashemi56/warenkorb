import './WagenItems.css'
import {connect} from 'react-redux'

const WagenItems = (props) =>{
    return(
    <li >
        <div className='liContainer'>
            <div className='liItems'>
                <div className='divprops'>
                    <div className='propsItem'>{props.title}</div>
                    <div className='propsItem'>${props.price}</div>
                    <div className='propsItem'>x{props.inventory}</div>
                </div>
            </div>
            <div className='liItems'>
                <button className='remove' onClick={()=>props.removeItem(props.id)}>Remove</button>
                <button className='remove' onClick={()=>props.removeAll(props.id)}>Remove All</button>
            </div>
        </div>
    </li>
    )
}

const mapDispatchToProps = (dispatch) =>({
    removeItem: (data)  => dispatch({type:'REMOVE_ITEM', payload:data}),
    removeAll: (data)  => dispatch({type:'REMOVE_ALL', payload:data})
})

export default connect(null,mapDispatchToProps)(WagenItems)