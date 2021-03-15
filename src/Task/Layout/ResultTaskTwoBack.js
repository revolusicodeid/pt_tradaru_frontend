import React from 'react';

export const Result = ({ data }) => (
    <div className="task-result" style={{visibility : data.data.length === 0 ? "hidden" : "visible"}}>
        <code className="text-result">Hasil :&nbsp; [{data.data.join(",")}]</code>
    </div>
);

export default Result;