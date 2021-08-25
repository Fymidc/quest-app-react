import './App.css';
import Dashboard from './layouts/Dashboard';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';
import Nav from './layouts/Nav';


function App() {
  return (
    <>
    <Nav/>
    <Container className="ui main container" >
      <Dashboard/>
    </Container>
     </> 
    
  );
}

export default App;

//create post section - created after redux it will connected to db
//create routes ***
// create comment and like 


//create redux --***


 


