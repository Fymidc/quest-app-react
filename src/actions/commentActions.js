import axios from 'axios';

export const getAllComment=()=>async dispatch=>{
    const comments = await axios.get(`http://localhost:8080/comments?postId=9&userId=1`)
    //console.log("comment actiondan gelen: ",comments)
    dispatch({
        type : "GET_COMMENT",
        payload : comments.data
    })
}

export const createComment=(values)=>async dispatch=>{
  
    
    //console.log("actiondan geldi",id)

    const res = await axios.post("http://localhost:8080/comments",values)
    //console.log("actiondan gelen value",res)
    dispatch({
        type : "ADD_COMMENT",
        payload : res.data
    })
}

export const deleteComment=(id)=>async dispatch=>{
  
    
    //console.log("actiondan geldi",id)

     await axios.delete(`http://localhost:8080/comments/${id}`)
   // console.log("actiondan gelen value",res)
    dispatch({
        type : "DELETE_COMMENT",
        payload : id
    })
}

export const editComment=(id,values)=>async dispatch=>{
  
    
    console.log("actiondan geldi",id ,"actiondan gelen value",values)

    const res = await axios.put(`http://localhost:8080/comments/${id}`,values)
   // console.log("actiondan gelen res",res)
    dispatch({
        type : "EDIT_COMMENT",
        payload : res.data
    })
}