import { Component, EventEmitter, Output} from '@angular/core';
import { Todo } from '../../Todo';
@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {
  title : string;
  desc : string;
  date : Date;
  @Output() todoAdd : EventEmitter<Todo> = new EventEmitter();
  OnSubmit(){
    const todo=  {
      sno : 6,
      title :this.title,
      desc : this.desc,
      date : this.date,
      status : true
    }
    this.todoAdd.emit(todo);
  }
}
