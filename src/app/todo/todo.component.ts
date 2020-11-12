import { Component, OnInit, ɵɵstaticContentQuery } from '@angular/core';
import { Todo } from './todo';
import {TodoService} from './todo.service'
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  nom:string;
  contenu:string;
  constructor(private todoService:TodoService) { }
  addTodo(){
    let todo=new Todo();
    todo.contenu=this.contenu;
    todo.nom=this.nom;
    this.todoService.addTodo(todo);
    this.todoService.loggerTodo(todo);
    this.showTodos();
  }
  ngOnInit(): void {
  }
  todos;
  showTodos(){
    this.todos = this.todoService.getTodos();
  }

  deleteTodo(todo:Todo){
    this.todoService.deleteTodo(todo);
    this.showTodos();
  }
}
