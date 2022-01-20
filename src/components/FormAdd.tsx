import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TodoProps } from "../interfaces";
import { close } from "../services/modal.reducer";
import { getReminders as getRemindersSelector, setReminders } from "../services/reminders.reducer";
import '../styles/FormAdd.css';

const FormAdd = () => {
    const [reminder, setReminder] = useState('');
    const Reminders =useSelector(getRemindersSelector);
    const dispatch=useDispatch();

    const closeModal = () => {
        dispatch(close())    
    }
    const handleChange = (e:any) => {
        setReminder(e.target.value);
    }
    const handleSumbit = (e:any) => {
        e.preventDefault();
    const todo:TodoProps={
      userId:Reminders.length+1,
      id:Reminders.length+1,
      title:reminder,
      completed:false
    }
    
    dispatch(setReminders(todo));
        dispatch(close());
    }
  return (
    <div className="formAdd">
        <span className="formAdd__title">Agregar reminder</span>
        <form className="formAdd__form" onSubmit={handleSumbit}>
          <textarea  className="formAdd__form__msg" onChange={handleChange} value={reminder}/>
          <div className="formAdd__form__buttons">
            <button className="formAdd__buttons__close" type="button" onClick={closeModal}>
                Cancelar
            </button>
            <button className="formAdd__buttons__save" type="submit">Guardar</button>
          </div>
        </form>
    </div>
  );
};

export default FormAdd;
