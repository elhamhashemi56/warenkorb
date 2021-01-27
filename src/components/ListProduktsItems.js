import './ProduktsItems.css'
import {connect} from 'react-redux'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

const ListProduktsItems =(props)=>{
    return(
     
        <div className='ProContain'>
            <div className='items'>
                
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={props.image} height='200px' />
                    <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>${props.price}</ListGroupItem>
                        <ListGroupItem>x{props.inventory}</ListGroupItem>
                        
                    </ListGroup>
                    <Card.Body>
                    
                    <button
                     disabled={!props.inventory} onClick={() => { props.addToCart(props.id) }} className='butpro' >
                                {props.inventory ? 'Add To Cart' : 'Sold out'}
                                <i className="bi bi-cart-plus-fill svgclass"></i>
                                <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"/>
                                </svg>
                    </button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

const mapDispatchToProps=(dispatch)=>({
    addToCart: (data) => dispatch({type:'ADD_TOCART',payload:data})
})

export default connect(null,mapDispatchToProps)(ListProduktsItems)