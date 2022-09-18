import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Todo } from '../models/todo.model';
import { FiltersType } from '../../filter/filter.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos!: Todo[];
  currentFilter!: FiltersType;

  constructor( private store: Store<AppState>) { 
    this.store.select('todos').subscribe(todos => this.todos = todos);
    this.store.select('filters').subscribe(filter => this.currentFilter = filter);
  }

  ngOnInit(): void {
  }

}
