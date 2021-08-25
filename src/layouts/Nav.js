import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { Container, Menu } from 'semantic-ui-react'

import Signedin from './Signedin'
import Signedout from './Signedout'

function Nav() {

     const state = useSelector(state => state.user)

    
    const [isAuthenticated, setAuthenticated] = useState(true)

    let history = useHistory()

    const handleSignOut = () => {
        setAuthenticated(false)
        history.push("/")
    }

    const handleSignIn = () => {
        setAuthenticated(true)
    }

    return (
        <div  >
            <Menu size="small" inverted fixed="top" >
                <Container>
                    <Menu.Item>
                        <Link to="/" >Home</Link>
                    </Menu.Item>

                    <Menu.Item>
                        <Link to="/messages" >Messages</Link>
                    </Menu.Item>

                    <Menu.Menu position='right'>

                        <Menu.Item>
                            {
                                isAuthenticated ? <Signedin user={state.oneuser.userName} signOut={handleSignOut} /> : <Signedout signIn={handleSignIn} />
                            }

                        </Menu.Item>
                    </Menu.Menu>
                </Container>

            </Menu>
        </div>
    )
}

export default Nav
