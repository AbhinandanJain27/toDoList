import { Component } from '@angular/core';
import { Todo } from '../../Todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  
  localItem : string;
  todos : Todo[] = [];
  completedTodos : Todo[] = [];
  constructor(){
    this.localItem = localStorage.getItem('todos');
    if (this.localItem == null) {
      this.todos = [];
    } else {
      this.todos = JSON.parse(this.localItem);
    }
  }
  DeleteToDo(todo : Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  AddToDo(todo : Todo){
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  CompleteToDo(todo : Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos[index].status = !this.todos[index].status;
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
