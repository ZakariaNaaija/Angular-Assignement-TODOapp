import { Injectable } from '@angular/core';
import {Todo} from './todo';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos:Todo[]=[];
  constructor() { }

  addTodo(todo:Todo){
    this.todos.push(todo);
  }
  getTodos(){
    return this.todos;
  }
  deleteTodo(todo:Todo){
    const index: number = this.todos.indexOf(todo);
    if (index !== -1) {
        this.todos.splice(index, 1);
    }  
  }
  loggerTodo(todo:Todo){
    console.log(todo);
  }

}
