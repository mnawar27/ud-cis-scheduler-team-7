import React, {useState} from "react";
import { Button, Form } from "react-bootstrap";
import COURSES from "../Assets/courses.json";
 
export function Menu(): JSX.Element{

    function saveEdit() {
        //update classes at all other parts of website
        
        console.log("hi");
    }

    return(
        <div className="menu">
            <h3>Course list</h3>
            <h6>Incomplete Requirements</h6>
            <ul className="nav navbar-nav">
                {COURSES.map((Course, i) => {
                    const[edit, setEdit] = useState(COURSES[i]["description"]);
                    return (
                        <div key={i}>
                            <Form.Group>
                                <Form.Label><strong>{Course.name} </strong></Form.Label>
                                <Form.Label> {edit}</Form.Label>
                                <Form.Control 
                                    value={edit}
                                    onChange={(ev:React.ChangeEvent<HTMLTextAreaElement>) => setEdit(ev.target.value)}/>
                            </Form.Group>
                            <Button onClick={()=>setEdit("")}>Click to Edit</Button>
                            <Button onClick={saveEdit}>Submit</Button>
    
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

