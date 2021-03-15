import React from 'react';
import '../Assets/css/notify.css';
import Notify from './Layout/Notify';
import Result from './Layout/ResultTaskFront';

export const TaskTwoFront = () => {
const title = "Task Two Front End";
return (
    <div>
        <Result title={title}/>
        <Notify />
    </div>
)};

export default TaskTwoFront;