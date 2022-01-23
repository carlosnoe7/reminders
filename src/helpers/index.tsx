import { close } from "../services/modal.reducer";
import { editReminders, setReminders } from "../services/reminders.reducer";
import { TodoProps } from "../interfaces";
import store from "../app/store";


const Reminders =store.getState().reminders.list;
export const useItems=()=>{
    
    
    
    return {
        handleSubmit,
        handleSave
    }

}


 const handleSubmit = (e:any,reminder:string,deadline:Date) => {
    e.preventDefault();
    const todo:TodoProps={
    userId:`Reminder - ${Reminders.length + 1}`,
    id:`Reminder - ${Reminders.length + 1}`,
    title:reminder,
    completed:false,
    deadline
    }
    
    store.dispatch(setReminders(todo));
    store.dispatch(close());
}
 const handleSave = (e:any,reminder:string,id:string,deadline:Date,completed:boolean) => {
    e.preventDefault();

    const todo:TodoProps={
        userId:id,
        id,
        title:reminder,
        completed,
        deadline
        }
    store.dispatch(editReminders(todo))
    store.dispatch(close());
}