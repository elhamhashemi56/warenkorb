import {connect} from 'react-redux'
import ListProduktsItems from './ListProduktsItems'
import './ListProdukts.css'

const ListProdukts = (props) =>{
    return(
        
            <div className='ListProdukts'>
                {props.produkts.map((element,index)=>{
                    return (
                        <ListProduktsItems 
                         key={index}
                         id={element.id} 
                         title={element.title}
                         price={element.price} 
                         inventory={element.inventory}
                         image={element.image}
                          />
                    )
                  }
                )}
            </div>
        
    )

}
const mapStateToProps =(state) => ({
     produkts:state.produktReducer.produkts
})


export default connect(mapStateToProps,null)(ListProdukts)