import React, {  useRef, useState } from 'react';
import dayjs from 'dayjs';
import { useDispatch } from 'react-redux';

import { setItemToChange } from '../services/item.reducer';
import { open } from '../services/modal.reducer';
import { changeCompleted, deleteReminders } from '../services/reminders.reducer';
import '../App.css';

interface reminderProps{
    reminder: string;
    id:string;
    deadline:Date;
    completed:boolean;
  }
  
  export const ReminderUI=React.memo(({reminder,id,deadline,completed}:reminderProps)=>{
    const dispatch=useDispatch();
    const [check,setCheck]=useState(completed);
    let refCheck=useRef(false);
    
    const handleClick = () => {
      dispatch(open('edit'));
      dispatch(setItemToChange({
        id,
        userId:id,
        completed,
        title:reminder,
        deadline
      }))
    }
    const handleDelete=()=>{
      dispatch(deleteReminders(id));
    }
    const handleChange=()=>{
      refCheck.current=check;
      setCheck(c=>!c);
      dispatch(changeCompleted(
        {
          id,
          userId:id,
          completed:!refCheck.current,
          title:reminder,
          deadline
        }
      ))
    }
    return(
  
    <li className='reminder-item'>
      <label  className="reminder-item-container">{reminder} {`(${dayjs(deadline).format('DD/MM')})`}
      <input type="checkbox"  className="reminder-item-check" onChange={handleChange} checked={check}/>
      <span className="checkmark"></span>
      </label>
      <div className="reminder-item__buttons">
        <button className="reminder-item__edit" onClick={handleClick} type="button"></button>
        <button className="reminder-item__delete" type="button" onClick={handleDelete}></button>
      </div>
    </li>
  )})
