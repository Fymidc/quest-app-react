import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import Createcomment from '../layouts/Createcomment'

function Timeline() {

    const handleClick=()=>{
        console.log("hey")
    }

    return (
        <Card.Group className="timeline-card" centered >

            <Card fluid>
                <Card.Content>
                    <Image
                        floated='right'
                        size='mini'
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnohFaKZzxbQs57LVwssTy2m_RRdn_eas_Fg&usqp=CAU'
                    />
                    <Card.Header>Nerushimav</Card.Header>
                    <Card.Meta>Model</Card.Meta>
                    <Card.Description>
                        I love this app I ask questions and so many people eager to answer! <strong>best friends</strong>
                    </Card.Description>
                </Card.Content>
                <Card.Content >
                    <div className="like-comment-sec" >
                        <Button size="mini"
                            color='red'
                            content='Like'
                            icon='heart'
                            label={{ basic: true, color: 'red', pointing: 'left', content: '2,048' }}
                        />
                        <Button size="mini" onClick={handleClick}
                            basic
                            color='blue'
                            content='Comment'
                            icon='comment outline'
                            label={{
                                as: 'a',
                                basic: true,
                                color: 'blue',
                                pointing: 'left',
                                content: '2,048',
                                
                            }}
                        />
                    </div>
                </Card.Content>
                <Createcomment/>
            </Card>
            
        </Card.Group>
    )
}

export default Timeline
