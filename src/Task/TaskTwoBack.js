import React, {useState} from 'react';
import "../Assets/css/form.css";
import axios from 'axios';
import Result from './Layout/ResultTaskTwoBack';
import { toast } from 'react-toastify';

const TaskTwoBack = () => {
    const arr = "1, 2, 3, 4, 5, 6, 7, 8, 9";
    const url = "http://api.pt-tradaru-digital-niaga/api/shift-array";
    const [postData, setPostData] = useState({
        data : {
            inp : "",
            arr : arr
        }
    });
    const [res,setRes] = useState({
        data :  []
    });

    const handleInputOnChange = (e) => {
        let val = e.target.value;
        setPostData(prevState => ({
          data: { ...prevState.data,  [e.target.name]: val }
        }));
    };

    const handleFormSubmit = async (e) => {
      e.preventDefault();
      axios.post(url, postData.data).then(response => {
        const {status,data,message} = response.data;
        if(status){
            setRes(prevState => ({
                ...prevState,  data
              }));
            toast.success(message);
        }else{
            toast.error(message);
        }
      });
    };

    return(
        <div div className="content">
            <div className="content-header">
                <h1>Task Two Back End</h1>
            </div>
            <div className="content-body">
                <div className="task-review">
                    <p>Arah perputaran array:</p>
                    <p>[</p>
                    <p>1 →  2 →  3</p>
                    <p>↑  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ↓</p>
                    <p>4  &nbsp;&nbsp;&nbsp;  5  &nbsp;&nbsp;  6</p>
                    <p>↑  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ↓</p>
                    <p>7 ←  8 ←  9</p>
                    <p>]</p>
                </div>
                <div className="task-process">
                    <form onSubmit={handleFormSubmit}>
                        <div className="form-group">
                            <label>Input Jumlah perputaran :</label>
                            <input type="text" name="inp" placeholder="input number" value={postData.data.inp} onChange={handleInputOnChange} />
                        </div>
                        <button type="submit" className="primary">Submit</button>
                    </form>
                </div>
                <Result data={res} />
            </div>
        </div>
    )
};

export default TaskTwoBack;