import {connect} from 'react-redux'
import ListProduktsItems from './ListProduktsItems'
import './ListProdukts.css'

const ListProdukts = (props) =>{
    return(
        
            <ul className='ListProdukts'>
                {props.produkts.map((element,index)=>{
                    return (
                        <ListProduktsItems 
                         key={index}
                         id={element.id} 
                         title={element.title}
                         price={element.price} 
                         inventory={element.inventory}
                          />
                    )
                  }
                )}
            </ul>
        
    )

}
const mapStateToProps =(state) => ({
     produkts:state.produktReducer.produkts
})


export default connect(mapStateToProps,null)(ListProdukts)