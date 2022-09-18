import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { FiltersType, set } from '../../filter/filter.actions';
import { removeAllCompleted } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  currentFilter!: FiltersType;
  filters: FiltersType[] = ['All', 'Active', 'Completed'];
  active!: number;

  constructor( private store: Store<AppState>) {
    this.store.select('filters').subscribe(filter => this.currentFilter = filter);
    this.store.select('todos').subscribe(todos => this.active = todos.filter(item => !item.completed).length);
   }

  ngOnInit(): void {
  }

  filterSelected(filter: FiltersType){
    this.store.dispatch(set({filter}));
  }

  removeAllCompleted(){
    this.store.dispatch(removeAllCompleted());
  }

}
