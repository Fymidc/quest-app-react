const initialState ={
    likes : []

}

export default function cartReducer(state=initialState,{type,payload}){

    switch (type) {
        case 'GET_LIKE':
            return {
                ...state,
                likes:payload
            }
        case 'ADD_LIKE':
            return {
                ...state,
                likes:[...state.likes,payload]
            }
            
        case 'DELETE_LIKE':
            return {
                ...state,
                likes:state.likes.filter(comment=>comment.id !== payload)
            }
            
    
        default:
           return state;
    }

}