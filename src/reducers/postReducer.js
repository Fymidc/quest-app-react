const initialState ={
    posts : []

}

export default function cartReducer(state=initialState,{type,payload}){

    switch (type) {
        case 'GET_POST':
            return {
                ...state,
                posts:payload
            }
        case 'ADD_POST':
            return {
                ...state,
                posts:[...state.posts,payload]
            }
            
        case 'DELETE_POST':
            return {
                ...state,
                posts:state.posts.filter(post=>post.id !== payload)
            }

        case 'EDIT_POST':
            return {
                ...state,
                posts:state.posts.map(post=>{
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