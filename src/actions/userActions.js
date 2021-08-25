import axios from 'axios';

export const getOneUser=()=>async dispatch=>{

    const user= await axios.get("http://localhost:8080/users/1")
    
    dispatch ({
        type:"GET_ONE_USER",
        payload:user.data
    })
}