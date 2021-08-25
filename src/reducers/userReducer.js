const initialState ={
    oneuser:[],
    users : []

}

export default function cartReducer(state=initialState,{type,payload}){

    switch (type) {
        case 'GET_ONE_USER':
            return {
                
                oneuser:payload
            }
            
    
        default:
           return state
    }

}