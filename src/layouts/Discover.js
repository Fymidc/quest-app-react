import React from 'react'
import { Label } from 'semantic-ui-react'

function Discover() {


    return (
        <div className="discover-container">

            <Label className="discover" size="large" as='a' content='Models' icon="eye dropper" />
            <Label className="discover" size="large" as='a' content='Clothes' icon="eye dropper" />

        </div>
    )
}

export default Discover
