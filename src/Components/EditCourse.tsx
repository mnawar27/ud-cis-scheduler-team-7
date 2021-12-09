import { Button } from "react-bootstrap";
import React, { useState } from "react";
import Course from "../Interfaces/Course";

interface IProps{
   editTmpId:number;
   editAddCourse: (tmpCourse: Course) => void
}
 
const EditCourse:React.FC<IProps> = ({editTmpId,editAddCourse}) => {
    const [name,setName] = useState("");
    const [description, setDescription] = useState("");
    const [credits, setCredits] = useState<number>(3);
    
    const onSubmit = (e:React.FormEvent) =>{
        e.preventDefault();
        const id = editTmpId;
    
        editAddCourse({id,name,description,credits}) ;
    };
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Course ID</label>
                    <input type='text' className="form-control" placeholder='e.g. CISC108' value={name} onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label>Name</label>
                    <input type='text' className="form-control" placeholder='e.g. Intro to Computer Science I' value={description} onChange={(e)=>setDescription(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label>Credits</label>
                    <select className="form-control" value={credits} onChange={(e)=>setCredits(parseInt(e.target.value))}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                    </select>
                </div>
                <Button type="submit" id="save-button" className="btn btn-sm">Save</Button>
            </form>
        </div>
    );
};
 
export default EditCourse;
