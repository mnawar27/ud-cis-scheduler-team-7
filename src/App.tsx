import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col} from "react-bootstrap";
import "./Components/Menu.css";
import {Menu} from "./Components/Menu";
import "./Components/Semester.css";
import { Semester } from "./Components/Semester";

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
                    <Semester />
                </Col>
            </Row>
        </Container>   
    );
}

export default App;
