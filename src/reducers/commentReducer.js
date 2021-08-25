const initialState ={
    comments : []

}

export default function cartReducer(state=initialState,{type,payload}){

    switch (type) {
        case 'GET_COMMENT':
            return {
                ...state,
                comments:payload
            }
        case 'ADD_COMMENT':
            return {
                ...state,
                comments:[...state.comments,payload]
            }
            
        case 'DELETE_COMMENT':
            return {
                ...state,
                comments:state.comments.filter(comment=>comment.id !== payload)
            }

        case 'EDIT_COMMENT':
            return {
                ...state,
                comments:state.comments.map(post=>{
                    if(post.id === payload.id){
                        return payload
                    }else{
                        return post;
                    }
                })
            }
            
    
        default:
           return state;
    }

}