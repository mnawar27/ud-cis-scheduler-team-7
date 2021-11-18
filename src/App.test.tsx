import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders UD CIS Scheduler text", () => {
    render(<App />);
    const linkElement = screen.getByText(/UD CIS Scheduler/i);
    expect(linkElement).toBeInTheDocument();
});
test("renders 8 semesters by default",()=>{
    render(<App/>);
    const linkElement=screen.getByText(/Year 4 Spring/i);
    expect(linkElement).toBeInTheDocument();
});
test("Add fall semester works",()=>{
    render(<App/>);
    const button=screen.getByText("Add fall semester");
    button.click();
    const linkElement=screen.getByText(/Year 5 Fall/i);
    expect(linkElement).toBeInTheDocument();
    
});
test("Add spring semester works",()=>{
    render(<App/>);
    const button=screen.getByText("Add spring semester");
    button.click();
    const linkElement=screen.getByText(/Year 5 Spring/i);
    expect(linkElement).toBeInTheDocument();
    
});
test("remove fall semseter works",()=>{
    render(<App/>);
    const button=screen.getByText("Remove last fall semester");
    button.click();
    const linkElement=screen.queryByText(/Year 4 fall/i);
    expect(linkElement).not.toBeInTheDocument();
});
test("remove spring semseter works",()=>{
    render(<App/>);
    const button=screen.getByText("Remove last spring semester");
    button.click();
    const linkElement=screen.queryByText(/Year 4 spring/i);
    expect(linkElement).not.toBeInTheDocument();
});
test("clear semester works",()=>{
    render(<App/>);
    const button=screen.getByText("Clear all semesters");
    button.click();
    const linkElement1=screen.queryByText(/Year 1 fall/i);
    const linkElement2=screen.queryByText(/Year 1 Spring/i);
    expect(linkElement1).not.toBeInTheDocument();
    expect(linkElement2).not.toBeInTheDocument();
});
test("default button shows after clearing",()=>{
    render(<App/>);
    let button1=screen.queryByText(/Set default plan/i);
    expect(button1).not.toBeInTheDocument();
    const button2=screen.getByText("Clear all semesters");
    button2.click();
    button1=screen.queryByText(/Set default plan/i);
    expect(button1).toBeInTheDocument();
});
