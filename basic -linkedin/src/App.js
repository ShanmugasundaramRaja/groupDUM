
import './App.css';
import MyNavbar from './components/MyNavbar';

import AddToFeed from './components/AddToFeed';
import FooterRight from './components/FooterRight';
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import PostAddSection from './components/PostAddSection';
import HeaderLeft from './components/HeaderLeft';
import BelowHeaderLeft from './components/BelowHeaderLeft';
import Advert from './components/Advert';
import Post from './components/Post';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        
      
        
          <Row>
            <Col sm={12} className="mb-4">
            <MyNavbar/>
            </Col>
          </Row>
          <Container className='outer'>
          <Row>
          <Col sm={12} md={3} className="mt-5">
          <HeaderLeft/>
          <BelowHeaderLeft/>
          </Col>
          
          
          <Col sm={12} md={6} className="mt-5">
          <PostAddSection/>
          <Post/>
          </Col>
          <Col sm={12} md={3}  className="mt-5">
          <AddToFeed/>
          <Advert/>
          <FooterRight/>
          </Col>
          
          </Row>
          
          </Container>
        

        
        
        
        
      

      
        
        
        
      </header>
    </div>
  );
}
export default App;






