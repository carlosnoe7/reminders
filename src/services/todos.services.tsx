import axios from "axios";

import store from "../app/store";
import { TodoProps } from "../interfaces";
import { setReminders } from "./reminders.reducer";

export async function getReminders() {
  // Una llamda de api
  // Cachar errores
  // Regresar la data que recibe de esa api
  const url = "https://jsonplaceholder.typicode.com/todos";

  try {
    const { data }:{data:TodoProps[]} = await axios.get(url);
    console.log('Poniendo la data')
    let date=new Date();
    let countCompleted=1;
    let countUncompleted=1;
    data.slice(0,5).forEach((todo:TodoProps,i) => {
        if (todo.completed) {
          
          store.dispatch(setReminders({...todo,id:`RC - ${countCompleted}`,deadline:date}));
          countCompleted++;
        }
        else{
          store.dispatch(setReminders({...todo,id:`Reminder - ${countUncompleted}`,deadline:date}));
          countUncompleted++;

        }
    })
    return data;
  } catch (error) {
    return null;
  }
}