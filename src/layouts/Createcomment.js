import { Form, Formik } from 'formik'
import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Comment, Dropdown, Modal } from 'semantic-ui-react'
import FthTextInput from '../services/FthTextInput'
import { createComment ,deleteComment,editComment} from '../actions/commentActions'

function Createcomment({ collapse, postId }) {

    const cstate = useSelector(state => state.comment)
    const ustate = useSelector(state => state.user)
    const [open, setopen] = useState(false)
    const [cid, setid] = useState("")
    const [editc, seteditc] = useState("")

  //console.log("createcomment :", cstate.comments.length)
    const dispatch = useDispatch();


    //console.log("post id: ", postId, "userId: ", ustate.oneuser.id)
    const initialValues = {
        text: "",
        userId: ustate.oneuser.id,
        postId: postId
    }

    const editValues = {
        text: editc,
    }

    const handleSubmit = (values) => {
       // console.log(values)
        dispatch(createComment(values))
        values.text = " "
    }

    const handleDelete=(id)=>{
       // console.log("delete id",id)
        dispatch(deleteComment(id))
    }

    const handleEditpopup=(id,text)=>{
        
        setopen(true)
        setid(id)
        //console.log("popupdan gelen",id)
        seteditc(text)
        //console.log("gelen veri: ", text)
    }

    const handleEditComment=(value)=>{
        dispatch(editComment(cid,value))
        //console.log("edit value: ",value,"edit id: ", cid)
        setopen(false)
    }

    return (


        <div className="create-comment">
            <Comment  >


                <Comment.Group collapsed={collapse} >

                    {
                        cstate.comments.map(comment => (
                            <Comment key={comment.id} className="comments-section" >
                                <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                                <Comment.Content className="comment-content" >
                                    <Comment.Author as='a'>{comment.userName}</Comment.Author>
                                    <Comment.Metadata>
                                        <span>1 day ago</span>
                                        <Dropdown pointing="top left" icon="sort down" >
                                            <Dropdown.Menu>
                                                <Dropdown.Item onClick={() => handleDelete(comment.id)} text="delete" icon="delete" />
                                                <Dropdown.Item onClick={() => handleEditpopup(comment.id,comment.text)} text="edit" icon="edit" />
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Comment.Metadata>
                                    <Comment.Text>{comment.text}</Comment.Text>
                                </Comment.Content>

                            </Comment>
                        ))
                    }




                    <Formik
                        initialValues={initialValues}
                        onSubmit={(values) => {
                            handleSubmit(values)
                        }}

                    >
                        <Form style={{ display: 'flex' }} className="ui form" >
                            <FthTextInput name="text" placeholder="Reply.." />

                            <Button style={{ margin: '2px', height: '35px' }} color="green" type="submit" > Send </Button>
                        </Form>

                    </Formik>
                </Comment.Group>

            </Comment>


            
        <Modal
                size='tiny'
                open={open}

            >
                <Modal.Content>
                   
                <Formik
                        initialValues={editValues}
                        onSubmit={(values) => {
                            handleEditComment(values)
                        }}

                    >
                        <Form style={{ display: 'flex' }} className="ui form" >
                            <FthTextInput name="text" placeholder="Reply.." />

                            <Button style={{ margin: '2px', height: '35px' }} color="green" type="submit" > Edit </Button>
                            <Button style={{ margin: '2px', height: '35px' }} color="red" onClick={()=>setopen(false)} > Cancel </Button>
                        </Form>

                    </Formik>

                </Modal.Content>
                
            </Modal>



        </div>
    )
}

export default Createcomment
