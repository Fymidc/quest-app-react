import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

function Signedout(props) {
    return (
        <div>
            <Menu.Item>
                <Button onClick={props.signIn} >Giriş yap</Button>
                <Button  style={{marginLeft:'0.5em'}} >Kayıt ol</Button>
            </Menu.Item>
        </div>
    )
}

export default Signedout
