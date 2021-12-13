import React,{useEffect,useState} from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { Button, Card, Image,Menu,Dropdown, Modal, Divider} from 'semantic-ui-react'
import Createcomment from '../layouts/Createcomment'
import {getAllPost,deletePost,editPost} from '../actions/postActions'
import {getAllComment} from '../actions/commentActions'
import {getAllLike,createLike,deleteLike} from '../actions/likeActions'
import { Formik,Form } from 'formik'
import FthTextInput from '../services/FthTextInput'
import * as Yup from 'yup'


function Timeline() {

    const state = useSelector(state => state.post)
    const cstate = useSelector(state => state.comment)
    const lstate = useSelector(state => state.like)

    

    const [open, setopen] = useState(false)
    const [edited, setedited] = useState("")
    const [collapsed, setcollapsed] = useState(true)
    const [isLiked, setisLiked] = useState(false)

    const handleCheckbox = (e) =>{
        
         setcollapsed(!collapsed)
      }


   console.log(" likes",lstate.likes.length)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPost());
        dispatch(getAllComment());
        dispatch(getAllLike());
    },[])

    const handleEditPost = (data) => {
        setopen(true)
        setedited(data)
    }
    //console.log("state",edited)

    
    const handleDelete=(id)=>{
        dispatch(deletePost(id))
    }

   
    const handleEdit=(values)=>{
      
       const id = edited.id
        dispatch(editPost(id,values))
        //console.log(id,values)

        setopen(false);
    }
    const deleteHandle=(liked,data)=>{
        const [id] = lstate.likes.slice(-1)
       // console.log("likes from redux",id.id)
        if(liked){
            dispatch(deleteLike(id.id))
           // console.log("like silindi")
        }else{
            dispatch(createLike(data))
            //console.log("like eklendi",data)
        }
    }

    const handleLike=(data)=>{
        setisLiked(!isLiked)
        
        deleteHandle(isLiked,data)
        
    }

    const initialValues = {
        
        title: edited.title,
        text: edited.text
        
    }
    
    const schema = Yup.object({
        title: Yup.string(),
        text: Yup.string()
    })



    return (
        <>
        <Card.Group className="timeline-card" centered >

        {state.posts.map(data=>(
            
             <Card key={data.id} fluid>
                 
                <Card.Content>
                <Menu.Item className="card-user-info" position="right" >
                <Image avatar spaced="right" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJzv2Nco5ZcLr0iMKTNlGy7CFTt7mmzrJJCg&usqp=CAU" />
                <Dropdown pointing="top left" text={data.userName} >
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={()=>handleDelete(data.id)} text="delete" icon="delete" />
                        <Dropdown.Item onClick={()=>handleEditPost(data)} text="edit" icon="edit" />
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
                    <Card.Header>{data.title}</Card.Header>
                    <Card.Meta>Q-category</Card.Meta>
                    <Card.Description>
                        {data.text}
                    </Card.Description>
                </Card.Content>
                <Card.Content >
                    <div className="like-comment-sec" >
                        <Button size="mini"
                            icon='heart'
                            color={isLiked?"red":"grey"}
                            label={{content:lstate.likes.length }}
                            onClick={()=>handleLike(data)}
                        />
                        <Button size="mini" onClick={handleCheckbox}
                            
                            content='Comment'
                            icon='comment outline'
                            label={{
                                as: 'a',
                                
                                content: cstate.comments.length,
                                
                            }}
                        />
                    </div>
                </Card.Content>
                
                <Createcomment collapse={collapsed} postId={data.id} />
            </Card>
        ))}

           
            
        </Card.Group>
        

        <Modal
                size='tiny'
                open={open}

            >
                <Modal.Header>Edit The Question</Modal.Header>
                <Modal.Content>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={schema}
                        onSubmit={(values) => 
                           handleEdit(values)
                           
                        }

                    >
                        <Form className="ui form" >
                            <FthTextInput name="title" placeholder="Başlık" />
                            <FthTextInput name="text" placeholder="Soru içeriği" />

                            <Divider/>

                            <Button color="green"   type="submit" > Edit </Button>
                            <Button color="red" onClick={() => setopen(false)} > Cancel </Button>
                        </Form>

                    </Formik>


                </Modal.Content>
                
            </Modal>
        </>
    )
}

export default Timeline
