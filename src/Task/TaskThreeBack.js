import React from 'react';
import Attachment from '../Assets/file/task_3.pdf';
import Result from './Layout/ResultTaskThreeBack';

export const TaskThreeBack = () => {
    const downloadHandler = () => {
        let a = document.createElement('a');
		a.href = Attachment;
		a.download = 'sql.pdf';
		a.click();
    }

    return(
        <div div className="content">
            <div className="content-header">
                <h1>Task Three Back End</h1>
            </div>
            <div className="content-body">
                <div className="task-review">
                    <p>Buatlah DB Schema untuk basic chat messaging system dengan fitur:</p>
                    <p>1 on 1 messaging</p>
                    <p>Group messaging, di dalam group ada role:</p>
                    <p>Admin (yang bikin group, dan bisa menambah atau menghapus member)</p>
                    <p>Member (yang di add admin ke dalam group, hanya bisa mengirim message)</p>
                    <p>Status (read/sent/pending)</p>
                    <p>Sharing images/files</p>
                    <p>1 nomor handphone digunakan untuk membuat 1 akun</p>
                </div>
                <div className="task-process">
                    <div className="form-group">
                        <label>Schema Database SQL :</label>
                        <button onClick={downloadHandler} className="primary">Download</button>
                    </div>
                </div>
                <Result />
            </div>
        </div>
    )
};

export default TaskThreeBack;