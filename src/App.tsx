import {  useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getReminders } from './services/todos.services';
import { getReminders as getRemindersSelector } from "./services/reminders.reducer";
import { open } from './services/modal.reducer';
import { AddReminder, FormAdd, ReminderUI } from './components';
import './App.css';


function App() {
  
  const Reminders =useSelector(getRemindersSelector);
  const dispatch =useDispatch();
  useEffect(() => {
    getReminders();
    
  }, []);
 
  const add=()=>{
    // setmodalOpen(true);
    dispatch(open('add'));
  }

  return (
    <div className="container">
      <AddReminder>
        <FormAdd />
      </AddReminder>
     <header className="header">
       <h1 className="header-title">Reminders</h1>
      <button className="add" onClick={add}>+</button>
     </header>
     <main className="reminders">
       <h2>Pendientes</h2>
       <hr />
       <ul className="reminders-list">
         {Reminders.filter(r=>r.completed===false).map((reminder:any,i) =>{  
          return <ReminderUI reminder={reminder.title} completed={reminder.completed}
          id={`${reminder.id}`} key={reminder.id + i} deadline={reminder.deadline} /> 
          })}
       </ul>
       <h2>Completados</h2>
       <hr />
       <ul className="reminders-list">
         {Reminders.filter(r=>r.completed===true).map((reminder:any,i) =>{  
          return <ReminderUI reminder={reminder.title} completed={reminder.completed}
          id={`${reminder.id}`} key={'RC'+reminder.id + i} deadline={reminder.deadline} /> 
          })}
       </ul>
     </main>
    </div>
  );
}



export default App;
