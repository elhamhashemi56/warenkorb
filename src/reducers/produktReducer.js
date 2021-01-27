const initialState = {
    produkts:[
        {"id": 1, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10, "image":'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F81%2Fe3%2F81e30d75b299cd5b6988c57823265f93753d2513.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_shortsleeve%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]'},
        {"id": 2, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2, "image":'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4QzN2xN7Aez8dIgktpH13xXKNsGJrauN4TA&usqp=CAU'},
        {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5,"image":'https://i.pinimg.com/originals/8e/c6/3c/8ec63cc53cc22be38ae3fab506a9097a.jpg'}
      ],
    
    warenkorb:[], 

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
                   }
    }

    //**************************************************************
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


            let neuProdukts = state.produkts.map((element) => {
                if(element.id === action.payload){
                    element.inventory++
                }
                return element
            })
            
            return { ...state, warenkorb: warenRemov, produkts:neuProdukts }
        } 
    //**********************************************************************

    case 'REMOVE_ALL':{
        let temp=0
        let warenRemovAll=[...state.warenkorb]
        warenRemovAll = state.warenkorb.filter((item) => {
            if(item.id === action.payload){
                console.log('item',item);
                console.log('id',item.id);
                temp=item.inventory
                console.log('temp',temp);
                return false
                
            }else{
                return true
            }
            
        })
        console.log(temp);
        let neuProdukts = state.produkts.map((element) => {
            if(element.id === action.payload){
                element.inventory=element.inventory+temp
            }
            return element
        })
        return{...state,warenkorb:warenRemovAll,produkts:neuProdukts }
   }

    //**********************************************************************

    case 'CHECK_OUT':{
        return {...state,warenkorb:[]}
    }

    default:
        return state;
    }
}

       

         