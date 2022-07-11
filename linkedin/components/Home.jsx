import { Col, Container, Row } from "react-bootstrap"
import LeftSideBarCardProfile from "../leftSideBarHome/LeftSideBarCardProfile"
import RightSideBar from "../rightSideBarHome/RightSideBar"


const Home = () => {
  
  

  const [ profile , setProfile ] = useState([])

  

  return (
    <Container style={{ marginTop: "100px" }}>
      <Row>
        <Col xs={12} md={4} lg={2} style={{ height: "100%" }}>
          <LeftSideBarCardProfile profile={profile}/>
        </Col>
       

        <Col md={4} className="d-none d-md-block" style={{ height: "100%" }}>
          <RightSideBar />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;