import axios from "axios";
import dayjs from "dayjs";
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
    data.slice(0,5).forEach((todo:TodoProps) => {
        if (todo.completed) {
          
          store.dispatch(setReminders({...todo,id:`RC - ${todo.id}`,deadline:date}));
        }
        else{
          store.dispatch(setReminders({...todo,id:`Reminder - ${todo.id}`,deadline:date}));

        }
    })
    return data;
  } catch (error) {
    return null;
  }
}