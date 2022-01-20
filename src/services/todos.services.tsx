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
    data.slice(0,5).forEach((todo:TodoProps) => {
        
        store.dispatch(setReminders(todo));
    })
    return data;
  } catch (error) {
    return null;
  }
}