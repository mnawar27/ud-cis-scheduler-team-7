import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import ToastHeader from "react-bootstrap/ToastHeader";
import React, { useState } from "react";

export function Welcome(): JSX.Element{
    const [show, setShow] = useState(false);
    return(
        <div className="welcome">
            <ToastContainer position="top-end" className="p-3">
                <Toast show={!show} onClose={()=>setShow(!show)} bg="light">
                    <ToastHeader>
                        <strong className="me-auto">Welcome!</strong>
                    </ToastHeader>
                    <Toast.Body> 
                        This handy dandy website can help you plan out your four-year computer science degree.
                    </Toast.Body>
                    <Toast.Body> 
                        <button type="button" className="btn btn-dark btn-sm">Tutorial</button>
                    </Toast.Body>
                </Toast>
            </ToastContainer>
        </div>
    );
}
