import React, {useState} from "react";
import { Button, Form } from "react-bootstrap";
import COURSES from "../Assets/courses.json";
 
export function Menu(): JSX.Element{
    return(
        <div className="menu">
            <h3>Course list</h3>
            <h6>Incomplete Requirements</h6>
            <ul className="nav navbar-nav">
                {COURSES.map((Course, i) => {
                    const[edit, setEdit] = useState(true);
                    return (
                        <div key={i}>
                            <Form.Group>
                                <Form.Label><strong>{Course.name}</strong></Form.Label>
                                <Form.Control defaultValue={Course.description} disabled={edit}/>
                            </Form.Group>
                            <Button onClick={()=>setEdit(false)}>Click to Edit</Button>
                            <Button disabled={edit} onClick={()=>setEdit(true)}>Submit</Button>
                        </div>
                    );
                })}
            </ul>
            <hr/>
            <h6>Complete Requirements</h6>
            <ul className="nav navbar-nav">
            </ul>
        </div>
    );
}

