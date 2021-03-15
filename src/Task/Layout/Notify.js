import React,{useState} from 'react';

export const Notify = () => {
const visible = "active";
const disabled = "disabled";
const [display, setDisplay] = useState({
    val : {
        notify : visible,
        form : "",
        thanks : "",
    }
    
});
const [validation, setValidation] = useState(disabled)
const changeDisplay = (e) =>{
    let val = {};
    switch(e.target.getAttribute('name')){
        case "notify" :
                val = {
                    notify : "",
                    form : visible,
                    thanks : "",
                }
            break;
        case "form" :
                val = {
                    notify : "",
                    form : "",
                    thanks : visible,
                }
            break;
        default : 
                val = {
                    notify : visible,
                    form : "",
                    thanks : "",
                }
            break;
    }
    setDisplay(prevState => ({
      ...prevState,  val
    }));
}

const handlerInputOnChange = (e) => {
    const validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    validEmail.test(e.target.value) ? setValidation("") : setValidation(disabled);
}

return (
    <div className="notify">
        <div className="notify-content">
            <div className={`notify-place ${display.val.notify}`}>
                <p onClick={changeDisplay} name="notify">Notify me</p>
            </div>
            <div className={`notify-place ${display.val.form}`}>
                <input type="text" placeholder="Email" onChange={handlerInputOnChange}/>
                <button onClick={changeDisplay} name="form" className={validation} disabled={validation}>Sent</button>
            </div>
            <div className={`notify-place ${display.val.thanks}`}>
                <p onClick={changeDisplay} name="thanks">Thank You!!!</p>
            </div>
        </div>
    </div>
)};

export default Notify;