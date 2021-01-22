const initialState = {
    produkts:[
        {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2},
        {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10},
        {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5}
      ],
    
    warenkorb:[], 

    // summe:0

  }
  
  // die Funktion für den reducer:
  
  export default function produktReducer (state = initialState, action){
    switch(action.type){
    case 'ADD_TOCART':{
        
            let neuerWarenkorb = [...state.warenkorb];
            state.produkts.forEach((element) => {
                if (action.payload === element.id) {
                    
                    if (element.inventory > 0) {
                        let warenkorbeintrag = neuerWarenkorb.find((item) => {
                            return item.id === action.payload;
                        });
                        
                        if (warenkorbeintrag) {
                            warenkorbeintrag.inventory++;
                        } else {
                            
                            let kopieAusVorrat = {...element};
                            kopieAusVorrat.inventory = 1;
                            neuerWarenkorb.push(kopieAusVorrat);
                        }

                        element.inventory--;
                    }
                }
            });

            return {...state,
                    produkts: [...state.produkts],
                    warenkorb : neuerWarenkorb,
                    // summe:state.warenkorb.reduce((erste,zweite)=>{
                    //    return (((erste.price)*(erste.inventory))+((zweite.price)*(zweite.inventory))).toFixed(2)
                    // },0)
                   }

    }

        case 'REMOVE_ITEM': {
            let warenRemov=[...state.warenkorb]
            state.warenkorb.forEach((item) => {
                if (item.id === action.payload) {
                    if (item.inventory > 1) {
                        item.inventory--;
                        return item
                    } else if (item.inventory === 1) {
                        warenRemov = state.warenkorb.filter((item) => {
                            return item.id !== action.payload
                        })
                    }
                } else {
                    return item
                }
            })


            let neuProdukts = state.produkts.filter((element) => {
                return element.id === action.payload
            })
            console.log('payload', action.payload);
            console.log('del', neuProdukts.id);
            
            neuProdukts.inventory++;
            return { ...state, warenkorb: warenRemov }
        } 
    
    default:
        return state;
    }
  }

       

         