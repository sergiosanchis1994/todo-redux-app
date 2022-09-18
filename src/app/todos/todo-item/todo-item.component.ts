import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo!: Todo;
  @ViewChild('input') input?: ElementRef;

  checkCompleted!: FormControl;
  textInput!: FormControl;

  editMode: boolean = false;

  constructor( private store: Store<AppState>) { 
    
  }

  ngOnInit(): void {
    this.checkCompleted = new FormControl(this.todo.completed);
    this.textInput = new FormControl(this.todo.text, Validators.required);

    this.checkCompleted.valueChanges.subscribe(
      () => this.store.dispatch(actions.toggle({ id: this.todo.id }))
    );
  }

  edit(){
    this.editMode = true;
    this.textInput.setValue(this.todo.text);
    setTimeout(()=> {
      this.input?.nativeElement.select();
    }, 1);
  }

  finishEdit(){
    this.editMode = false;
    if(this.textInput.valid && this.textInput.value !== this.todo.text){
      this.store.dispatch(actions.edit({
        id: this.todo.id,
        text: this.textInput.value
      }))
    }
  }

  remove(){
    this.store.dispatch(actions.remove({id: this.todo.id}));
  }

}
