import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "./People.css";

const People = () => {
  return (
    <Container id="feedContainer" className="mt-2">
      <div className="d-flex justify-content-between mt-2">
        <div id="titleFeedCard">People you may know</div>
        
      </div>
      <Col>
        <Row className="pl-0 my-3 feedProfile">
          <Image className="imgFeed pl-0" src="https://thumbs.dreamstime.com/z/caricature-presidential-candidate-donald-trump-character-portrait-giving-speech-70328509.jpg" />
          <div className="ml-2">
            <div className="feedTitle">Raja</div>
            <div className="feedJobType">Epicode Student</div>
            <div className="d-flex flex-row">
              <div
                className="rounded-pill ButtonFollow"
                variant="outline-secondary"
              >
                
                Connect
              </div>
            </div>
          </div>
        </Row>
        <Row className="pl-0 my-3 feedProfile">
          <Image className="imgFeed pl-0" src="https://thumbs.dreamstime.com/z/caricature-presidential-candidate-donald-trump-character-portrait-giving-speech-70328509.jpg" />
          <div className="ml-2">
            <div className="feedTitle">Agris</div>
            <div className="feedJobType">Epicode Student</div>
            <div className="d-flex flex-row">
              <div
                className="rounded-pill ButtonFollow"
                variant="outline-secondary"
              >
                
                Connect
              </div>
            </div>
          </div>
        </Row>
        <Row className="pl-0 my-3 feedProfile">
          <Image className="imgFeed pl-0" src="https://thumbs.dreamstime.com/z/caricature-presidential-candidate-donald-trump-character-portrait-giving-speech-70328509.jpg" />
          <div className="ml-2">
            <div className="feedTitle">Ganesh</div>
            <div className="feedJobType">Epicode Student</div>
            <div className="d-flex flex-row">
              <div
                className="ButtonFollow"
               
              >
                
                Connect
              </div>
            </div>
          </div>
        </Row>
      
      </Col>
    </Container>
  );
};

export default People;