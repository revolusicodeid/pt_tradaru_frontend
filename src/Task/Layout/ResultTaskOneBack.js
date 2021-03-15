import React from 'react';
import { listData } from '../List/listData';
import ListTask from '../List/ListTaskOneBack';

export const Result = ({ data }) => (
    <div className="task-result" style={{visibility : data.data.profit === "" ? "hidden" : "visible"}}>
        <code className="text-result">Hasil : {data.data.profit}&nbsp; 
            ({listData({
              items : data.data.res,
              Layout : ListTask
            })})
        </code>
    </div>
);

export default Result;