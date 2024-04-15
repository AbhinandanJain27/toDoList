import { Component ,EventEmitter,Input, OnInit, Output} from '@angular/core';
import { Todo } from '../../Todo';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent implements OnInit {
  @Input() todo : Todo;
  @Output() todoDelete : EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox : EventEmitter<Todo> = new EventEmitter();
  ngOnInit(): void {
    
  }
  OnClick(todo : Todo){
    this.todoDelete.emit(todo);
    console.log("Trigeered Delete event");
  }
  onCheckboxClick(todo : Todo){
    this.todoCheckbox.emit(todo);
    console.log("Event Completed");
  }
}
