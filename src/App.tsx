import { useEffect, useState } from 'react';
import { ReminderUI } from './components/ReminderUI';
import './App.css';
import { getReminders } from './services/todos.services';
import { getReminders as getRemindersSelector, setReminders } from "./services/reminders.reducer";
import { useDispatch, useSelector } from 'react-redux';
import AddReminder from './components/AddReminder';
import { open } from './services/modal.reducer';
import FormAdd from './components/FormAdd';


function App() {
  
  const Reminders =useSelector(getRemindersSelector);
  const [modalOpen, setmodalOpen] = useState<boolean>(false);
  const dispatch =useDispatch();
  useEffect(() => {
    getReminders();
    
  }, []);
 
  const add=()=>{
    // setmodalOpen(true);
    dispatch(open());
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
       <ul className="reminders-list">
         {Reminders.map((reminder:any,i) =>{
          return <ReminderUI reminder={reminder.title} key={reminder.id + i} /> 
          })}
         {/* {Reminders.map((reminder:any,i) =>{
           console.log(reminder)
          })} */}

       </ul>
     </main>
    </div>
  );
}



export default App;
