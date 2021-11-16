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
                        <strong className="me-auto">Welcome to UD CIS Scheduler!</strong>
                    </ToastHeader>
                    <Toast.Body> 
                        <p>This handy dandy website can help you plan out your computer science degree at UD.</p>
                        <button type="button" className="btn btn-dark btn-sm">Tutorial</button>
                    </Toast.Body>
                </Toast>
            </ToastContainer>
        </div>
    );
}
