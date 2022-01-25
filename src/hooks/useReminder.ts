import { useEffect, useRef } from "react";
import store from "../app/store";
import { TodoProps } from "../interfaces";
import { setItemToChange } from "../services/item.reducer";
import { open } from "../services/modal.reducer";
import { changeCompleted, deleteReminders } from "../services/reminders.reducer";
interface ReminderProps{
    args:TodoProps;
    check:boolean;
    setCheck:React.Dispatch<React.SetStateAction<boolean>>;
}

export const useReminder=({args,check,setCheck}:ReminderProps) => {
    
   const {id,completed,deadline,title:reminder}=args;
    

    let refCheck=useRef(false);
    
    const handleClick = () => {
        store.dispatch(open('edit'));
        store.dispatch(setItemToChange({
        id,
        userId:id,
        completed,
        title:reminder,
        deadline
      }))
    }
    const handleDelete=()=>{
      store.dispatch(deleteReminders(id));
    }
    const handleChange=()=>{
      refCheck.current=check;
      setCheck(c=>!c);
      store.dispatch(changeCompleted(
        {
          id,
          userId:id,
          completed:!refCheck.current,
          title:reminder,
          deadline
        }
      ))
    }

    return {
        handleClick,
        handleDelete,
        handleChange
    }
}