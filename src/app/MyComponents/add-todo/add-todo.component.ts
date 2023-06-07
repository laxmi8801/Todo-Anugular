import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  title:string;
  desc:string;
 // priority: string;
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
  
    
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    const todo = {
      sno: 8,
      title: this.title,
      desc: this.desc,
      active: true,
     // priority:this.priority
      
    }
    this.todoAdd.emit(todo);
    //console.log(this.priority);

  }

}
