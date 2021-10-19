import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Components/Menu.css";
import {Menu} from "./Components/Menu";
import { Container, Row, Col} from "react-bootstrap";

function App(): JSX.Element {
    return (
        <Container className="App">
            <Row>
                <header className="App-header">
                    <h1>UD CIS Scheduler</h1> 
                </header>
            </Row>
            <Row>
                <Col>
                    <Menu />
                </Col>
                <Col>
                </Col>
            </Row>
        </Container>
            
    );
}

export default App;
