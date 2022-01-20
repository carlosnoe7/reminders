import '../App.css';

interface reminderProps{
    reminder: string;
  }
  

export const ReminderUI=({reminder}:reminderProps)=>(
    <li className='reminder-item'>
      <label  className="reminder-item-container">{reminder}
      <input type="checkbox"  className="reminder-item-check" />
      <span className="checkmark"></span>
      </label>
      <div className="reminder-item__buttons">
        <button className="reminder-item__edit" type="button"></button>
        <button className="reminder-item__delete" type="button"></button>
      </div>
    </li>
  )