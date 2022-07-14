//This is the Header that appears on the News Feed Page (Left hand side)
import { Container, Row, Col, Image } from "react-bootstrap";
import "./HeaderLeft.css";


const HeaderLeft = () => {
  
  return (
    <Container id="headerMiniContainer" className="px-0">
      <Col className="d-flex flex-column justify-content-center">
        <Row>
          <Image
            src="https://t3.ftcdn.net/jpg/04/96/92/90/360_F_496929033_S9ahAsD3n2yk2ayua2TAzB4ZIiAfikIQ.jpg"
            id="backgroundImage"
          />
        </Row>
        <Row className="d-flex flex-column align-items-center borderBottom ">
          <Image src={"https://thumbs.dreamstime.com/z/caricature-presidential-candidate-donald-trump-character-portrait-giving-speech-70328509.jpg"} id="userImage" className="mx-auto" />
          <div className="mb-3 mt-n3 text-center">
            <div className="font-weight-bold " id="userName">
            Shanmugasundaram Raja
            </div>
            <div className="text-muted fontSize">Epicode Student</div>
          </div>
        </Row>
        <Row className="borderBottom fontSize headerMiniTag">
          <div className="w-100 mx-3 my-2">
            <div className="d-flex justify-content-between">
              <div className="text-muted">Connection</div>
              <div className="font-weight-bold" style={{ color: "blue" }}>
                122
              </div>
            </div>
            <div className="font-weight-bold">Grow your network</div>
          </div>
        </Row>
        <Row className="borderBottom fontSize headerMiniTag">
          <div className="mx-3 my-2">
            <div className="text-muted ">Access exclusive tools & insights</div>
            <div className="d-flex flex-row">
              <div>
                <i
                  className="bi bi-square-half mr-2 "
                  style={{ color: "gold" }}
                ></i>
              </div>
              <div className="font-weight-bold txtBlue">
                Try Premium for free
              </div>
            </div>
          </div>
        </Row>
        <Row className="fontSize headerMiniTag">
          <div className="d-flex flex-row mx-3 my-2">
            <div>
              <i className="bi bi-bookmark-fill mr-2"></i>
            </div>
            <div className="font-weight-bold">My items</div>
          </div>
        </Row>
      </Col>
    </Container>
  );
};

export default HeaderLeft;