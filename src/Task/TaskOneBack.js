import React, {useState} from 'react';
import "../Assets/css/form.css"
import axios from 'axios';
import Result from './Layout/ResultTaskOneBack';
import { toast } from 'react-toastify';


const TaskOneBack = () => {
    const arr = "4, 11, 2, 20, 59, 80";
    const url = "http://api.pt-tradaru-digital-niaga/api/max-profit";
    const [postData, setPostData] = useState({
        data : {
            inp : "",
            arr : arr
        }
    });
    const [res,setRes] = useState({
        data : {
            profit : "",
            res : []
        }
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
                <h1>Task One Back End</h1>
            </div>
            <div className="content-body">
                <div className="task-review">
                    <p>
                        Anda diberikan array angka integer positif yang mewakilkan harga stok dalam beragam hari (setiap index array mencerminkan hari yang berbeda)
                        Anda juga diberikan integer (i), yang mewakilkan jumlah transaksi yang boleh dilakukan
                        Satu transaksi terdiri dari pembelian stok pada suatu hari dan menjualnya di kemudian hari
                    </p>
                    <p>
                        Tulis sebuah fungsi yang menghasilkan keuntungan terbanyak yang dapat dilakukan melalui pembelian dan penjualan stok, bergantung dari (i) transaksi.
                    </p>
                    <p>
                        Note: Anda hanya dapat memegang satu share stok pada satu saat; jadi anda tidak dapat membeli lebih dari satu share stok pada hari manapun, dan anda tidak dapat membeli sebuah share dari stok manapun kalau anda masih memegang share lain. Anda juga tidak perlu menggunakan semua (i) transaksi yang diperbolehkan
                    </p>
                    <p>Contoh:</p>
                    <p>harga = [4, 11 2, 20, 59, 80]</p>
                    <p>i = 2</p>
                    <p>Hasil:</p>
                    <p>85 (beli: 4, jual: 11, beli: 2, jual: 80)</p>
                </div>
                <div className="task-process">
                    <form onSubmit={handleFormSubmit}>
                        <div className="form-group">
                            <label>Input Jumlah transaksi :</label>
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

export default TaskOneBack;