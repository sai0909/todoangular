import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  itemCount: number = 4;
  todoText: string;
  todos = [];

  constructor(private _data:TodoService) { }

  ngOnInit() {
    this._data.todo.subscribe(res=>this.todos= res);
    this.itemCount = this.todos.length;
  }

  addTodo(){
    if(this.todoText!=""){
    this.todos.push(this.todoText);
    }
    else{
      alert("Don't try to add empty string");
    }
    this.todoText="";
    this.itemCount = this.todos.length;
    console.log(this.todos);

  }

  removeTodo(i){
    this.todos.splice(i,1);
    this.itemCount = this.todos.length;
    console.log(this.todos);
  }
}
