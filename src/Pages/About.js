import React, { Component } from "react";
import { Container, Tab, Nav, Row, Col } from "react-bootstrap";
import design from "../assets/about/design.jpg";
import team from "../assets/about/team.jpg";
import programming from "../assets/about/programming.jpg";
import frameworks from "../assets/about/frameworks.jpg";
import libraries from "../assets/about/libraries.jpg";

export default class About extends Component {
  render() {
    return (
      <Container>
        <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mt-2">
                <Nav.Item>
                  <Nav.Link eventKey="first">Design</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Team</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Programming</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">Libraries</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content className="mt-3">
                <Tab.Pane eventKey="first">
                  <img
                    className="d-block w-100"
                    style={{ height: "580px" }}
                    src={design}
                  />
                  <p>
                    We create modern and user-friendly interfaces, combining
                    aesthetics with functionality. Our designers develop unique
                    solutions focused on user experience, ensuring your product
                    looks stylish and provides intuitive interaction.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <img
                    className="d-block w-100"
                    style={{ height: "580px" }}
                    src={team}
                  />
                  <p>
                    Our team consists of professionals with extensive experience
                    in the IT industry. We bring together developers, designers,
                    and analysts to deliver high-quality, reliable, and
                    innovative solutions for projects of any complexity.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <img
                    className="d-block w-100"
                    style={{ height: "580px" }}
                    src={programming}
                  />
                  <p>
                    We develop scalable and high-performance solutions using
                    cutting-edge programming technologies. Optimized code,
                    secure architectures, and flexible solutions allow us to
                    create products that meet business needs.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <img
                    className="d-block w-100"
                    style={{ height: "580px" }}
                    src={frameworks}
                  />
                  <p>
                    We leverage powerful frameworks to speed up development and
                    enhance stability. Choosing the best technologies, such as
                    React, Angular, Django, or Laravel, enables us to build
                    efficient and adaptive products.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <img
                    className="d-block w-100"
                    style={{ height: "580px" }}
                    src={libraries}
                  />
                  <p>
                    Utilizing proven libraries accelerates development, improves
                    performance, and reduces costs. We integrate modern
                    solutions to ensure the convenience, security, and
                    scalability of our digital products.
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    );
  }
}
