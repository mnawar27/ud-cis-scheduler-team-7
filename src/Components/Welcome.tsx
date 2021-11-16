import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import ToastHeader from "react-bootstrap/ToastHeader";
import React, { useState } from "react";

export function Welcome(): JSX.Element{
    const [show, setShow] = useState(false);
    return(
        <div className="welcome">
            <ToastContainer position="top-end" className="p-3">
                <Toast show={!show} onClose={()=>setShow(!show)} bg="light" autohide>
                    <ToastHeader>
                        <strong className="me-auto">Welcome!</strong>
                    </ToastHeader>
                    <Toast.Body> 
                        <p>This handy dandy website can help you plan out your computer science degree at UD.</p>
                        <ul>
                            <li>Add and/or remove semesters using the add and remove fall and spring semester.</li>
                            <li>Clear all semesters will clear out the entire schedule.</li>
                            <li>Click Edit to edit course names in the semesters.</li>
                            <li>Click Remove to remove a course from a semester.</li>
                        </ul>
                    </Toast.Body>
                </Toast>
            </ToastContainer>
        </div>
    );
}
