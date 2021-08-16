import { Form, Formik } from 'formik'
import React from 'react'
import { Button} from 'semantic-ui-react'
import FthTextInput from '../services/FthTextInput'

function Createcomment() {

    const initialValues = {
        text: ""
    }

    return (
        <div className="create-comment">
            <Formik
                initialValues={initialValues}
                onSubmit={(values) => {
                    console.log(values)
                }}

            >
                <Form style={{display:'flex'}}  className="ui form" >
                    <FthTextInput name="text" placeholder="Reply.." />

                    <Button style={{margin:'2px',height:'35px'}} color="green" type="submit" > Send </Button>
                </Form>

            </Formik>
        </div>
    )
}

export default Createcomment
