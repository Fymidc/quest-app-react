import axios from 'axios';

export const getAllLike=()=>async dispatch=>{
    const likes = await axios.get(`http://localhost:8080/likes?postId=9&userId=1`)
    //console.log("comment actiondan gelen: ",comments)
    dispatch({
        type : "GET_LIKE",
        payload : likes.data
    })
}

export const createLike=(values)=>async dispatch=>{
  
    
    //console.log("actiondan gelen",values.id,"userıd:",values.userId)
    const data ={
        postId:values.id,
        userId:values.userId
    }

    const res = await axios.post("http://localhost:8080/likes",data)
    //console.log("actiondan gelen value",res)
    dispatch({
        type : "ADD_LIKE",
        payload : res.data
    })
}

export const deleteLike=(id)=>async dispatch=>{
  
    
    console.log("actiondan geldi",id)

    await axios.delete(`http://localhost:8080/likes/${id}`)
   // console.log("actiondan gelen value",res)
    dispatch({
        type : "DELETE_LKE",
        payload : id
    })
}
