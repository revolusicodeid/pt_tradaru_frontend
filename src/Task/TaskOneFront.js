import React from 'react';
import '../Assets/css/navbar.css';
import Result from './Layout/ResultTaskFront';
import Navbar from './Layout/Navbar';

export const TaskOneFront = () => {
    const title = "Task One Front End";
    return (
    <div className="main">
        <Navbar />
        <Result title={title}/>
    </div>
)};

export default TaskOneFront;