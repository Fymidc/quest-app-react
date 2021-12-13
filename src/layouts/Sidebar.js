import { Formik,Form } from 'formik'
import React, { useState,useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'

import { Button, Card,Divider,Icon, Modal } from 'semantic-ui-react'
import FthTextInput from '../services/FthTextInput'
import * as Yup from 'yup'
import {getOneUser} from '../actions/userActions'
import {createPost} from '../actions/postActions'

function Sidebar() {

    const state = useSelector(state => state.user)
    const poststate = useSelector(state => state.post)
    const {id} = state.oneuser

    //console.log(id)
    //console.log("postun id",poststate.posts)

   

    const dispatch = useDispatch();

    

    useEffect(() => {
        dispatch(getOneUser())
 
    }, [])


    const [open, setopen] = useState(false)

    const handleCreatePost = () => {
        setopen(true)
    }

    const newPost =(values)=>{
        dispatch(createPost(values,id))
        setopen(false)
    }


    const initialValues = {
        
        title: "",
        text: "",
        userId:state.oneuser.id
    
    }

    const schema = Yup.object({
        title: Yup.string().required("bir başlık girmelisiniz"),
        text: Yup.string().required("içerik kısmı boş bırakılamaz")
    })



    const extra = (
        <div className="extras"  >
            <a>
                <Icon name='user' />
                16 Friends
            </a>
            <a>
                <Icon name='star' />
                610 QuestPoint
            </a>
        </div>
    )

    return (
        <div className="sidebar-container" >
            <Card
                image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMCtdjxSL4wVgsXAOUGTYqkM2FtbnixDerPw&usqp=CAU'
                header={state.oneuser.userName}
                meta='Model'
                description='Alexis René Glabach known professionally as Alexis Ren, is an American social media personality and model'
                extra={extra}

            />
            <Card.Content extra>
                <Button onClick={handleCreatePost} >
                    <Icon name='bolt' />Post A Quest!
                </Button>

            </Card.Content>

            <Modal
                size='tiny'
                open={open}

            >
                <Modal.Header>Post A Question</Modal.Header>
                <Modal.Content>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={schema}
                        onSubmit={(values) => 
                            newPost(values)
                        }

                    >
                        <Form className="ui form" >
                            <FthTextInput name="title" placeholder="Başlık" />
                            <FthTextInput name="text" placeholder="Soru içeriği" />

                            <Divider/>

                            <Button color="green"   type="submit" > Post </Button>
                            <Button color="red" onClick={() => setopen(false)} > Cancel </Button>
                        </Form>

                    </Formik>


                </Modal.Content>
                {/* <Modal.Actions>
                    <Button negative onClick={() => setopen(false)}>
                        Cancel
                    </Button>
                    <Button type="submit" positive onClick={() => setopen(false)}>
                        Post
                    </Button>
                </Modal.Actions> */}
            </Modal>

        </div>
    )
}

export default Sidebar
