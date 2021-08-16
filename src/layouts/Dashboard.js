import React from 'react'
import { Route } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import Timeline from '../pages/Timeline'
import Discover from './Discover'
import Sidebar from './Sidebar'

function Dashboard() {
    return (
        
            <Grid  stackable >
                <Grid.Row > 
                    <Grid.Column  width={4} >
                        <Sidebar />
                    </Grid.Column>
                    <Grid.Column width={8} >
                        <Route  exact path="/" component={Timeline} />
                        {/* <Route exact path="/products/:name" component={ProductDetail} />
                        <Route exact path="/cart" component={CartDetail} />
                        <Route exact path="/product/add" component={ProductAdd} /> */}

                    </Grid.Column>
                    <Grid.Column  width={4} >
                        <Discover />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        
    )
}

export default Dashboard
