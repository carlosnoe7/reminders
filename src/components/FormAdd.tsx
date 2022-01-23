import dayjs from 'dayjs'
import DatePicker from "react-datepicker";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { close } from "../services/modal.reducer";
import { RootState } from "../app/store";
import { useItems } from '../helpers/index';
import '../styles/FormAdd.css';

import "react-datepicker/dist/react-datepicker.css";

export const FormAdd = () => {
    const [reminder, setReminder] = useState('');
    const {valueChange} = useSelector(state => (state as RootState).items);
    const {type} = useSelector(state => (state as RootState).modal);
    const {handleSave,handleSubmit}=useItems();
    const [startDate, setStartDate] = useState<Date>(new Date());

    useEffect(() => {
      setReminder(valueChange.title)
      let fechacool:any=dayjs(valueChange.deadline).toDate();
      setStartDate(fechacool);
      
    }, [valueChange])
    

    const dispatch=useDispatch();

    const closeModal = () => {
        dispatch(close())    
    }
    const handleChange = (e:any) => {
        setReminder(e.target.value);
    }
    const handleClick=(e:any)=> {
      e.preventDefault();
      // let fecha=dayjs(startDate).format('DD/MM');
      if (type==='add') {

        handleSubmit(e,reminder,startDate);  
      }
      else{
        handleSave(e,reminder,valueChange.id,startDate,valueChange.completed);
      }
    }

  return (
    <div className="formAdd">
        <span className="formAdd__title">{type==='add' ? 'Agregar' : 'Editar'} reminder</span>
        <form className="formAdd__form" onSubmit={handleClick}>
          <textarea  className="formAdd__form__msg" onChange={handleChange} value={reminder}/>
          <div className="formAdd__form__date">
            <DatePicker dateFormat="MM-dd" selected={startDate} onChange={(date) => { setStartDate(date!)}} />

          </div>
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

