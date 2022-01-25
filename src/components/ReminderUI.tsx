import React, {   useState } from 'react';
import dayjs from 'dayjs';
import '../styles/ReminderUI.css';
import { useReminder } from '../hooks/useReminder';

interface reminderProps{
    reminder: string;
    id:string;
    deadline:Date;
    completed:boolean;
  }
  
  export const ReminderUI=React.memo(({reminder,id,deadline,completed}:reminderProps)=>{
    const [check,setCheck]=useState(completed);
    const {handleClick,handleChange,handleDelete}=useReminder({args:{userId:id,title:reminder,id,deadline,completed},check,setCheck})
    
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
