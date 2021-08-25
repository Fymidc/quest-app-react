import axios from 'axios';

export const getAllPost=()=>async dispatch=>{
    const posts = await axios.get("http://localhost:8080/posts?userId=1")

    dispatch({
        type : "GET_POST",
        payload : posts.data
    })
}

export const createPost=(values,id)=>async dispatch=>{
  
    
    //console.log("actiondan geldi",id)

    const res = await axios.post("http://localhost:8080/posts",values)
    //console.log("actiondan gelen value",res)
    dispatch({
        type : "ADD_POST",
        payload : res.data
    })
}

export const deletePost=(id)=>async dispatch=>{
  
    
    //console.log("actiondan geldi",id)

    const res = await axios.delete(`http://localhost:8080/posts/${id}`)
   // console.log("actiondan gelen value",res)
    dispatch({
        type : "DELETE_POST",
        payload : id
    })
}

export const editPost=(id,values)=>async dispatch=>{
  
    
    //console.log("actiondan geldi",id ,"actiondan gelen value",values)

    const res = await axios.put(`http://localhost:8080/posts/${id}`,values)
   // console.log("actiondan gelen res",res)
    dispatch({
        type : "EDIT_POST",
        payload : res.data
    })
}

