const initialState = {
    produkts:[
        {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2},
        {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10},
        {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5}
      ],
    
    warenkorb:[], 

    zahlEinkauf:0
  }
  
  // die Funktion für den reducer:
  
  export default function produktReducer (state = initialState, action){
    switch(action.type){
      case 'ADD_TOCART':{
          let neuprodukts=state.produkts.map((element)=>{
              if(element.id === action.payload){
                  if(element.inventory>=0){
                   element.inventory--
                   state.zahlEinkauf++;
                  }
                  return element
              }else{
                  return element
              }
              
          })

          let neuwagen=[...state.warenkorb]
          state.produkts.map((element,index)=>{
              if(element.id === action.payload){
                  if(element.inventory >= 0){
                 return neuwagen.push(element)
                }
              }
          })
          return {...state, produkts:neuprodukts , warenkorb:neuwagen}
      } 
   
    
    
      default:
        return state;
    }
  }