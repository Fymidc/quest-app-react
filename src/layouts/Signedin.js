import React from 'react'
import { Dropdown, Image, Menu } from 'semantic-ui-react'

function Signedin(props) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJzv2Nco5ZcLr0iMKTNlGy7CFTt7mmzrJJCg&usqp=CAU" />
                <Dropdown pointing="top left" text="alexis" >
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info" />
                        <Dropdown.Item  onClick={props.signOut} text="Çıkış Yap" icon="sign-out" />
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}

export default Signedin
