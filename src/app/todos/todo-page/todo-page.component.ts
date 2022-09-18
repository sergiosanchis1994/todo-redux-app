import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { toggle, toggleAll } from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {

  completedAll: boolean = false;

  constructor( private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  toggleAll(){
    this.completedAll = !this.completedAll;
    this.store.dispatch(toggleAll({completed: this.completedAll}))
  }

}
