import { createReducer, on } from '@ngrx/store';
import * as actions from './todo.actions';
import { Todo } from './models/todo.model';

export const initialState: Todo[] = [
  new Todo('Taste JavaScript'),
  new Todo('Taste Java'),
  new Todo('Taste Angular'),
  new Todo('Taste Docker')
];

export const todoReducer = createReducer(
  initialState,
  on(actions.add, (state, { text }) => [...state, new Todo(text)]),
  on(actions.toggle, (state, { id }) => {
    return state.map(todo => {
      return {
        ...todo,
        completed: todo.id === id ? !todo.completed : todo.completed
      }
    })
  }),
  on(actions.edit, (state, { id, text }) => {
    return state.map(todo => {
      return {
        ...todo,
        text: todo.id === id ? text : todo.text
      }
    })
  }),
  on(actions.remove, (state, { id }) => state.filter( todo => todo.id !== id)),
  on(actions.toggleAll, (state, { completed }) => state.map(todo => {
      return {
        ...todo,
        completed: completed
      }
    })
  ),
  on(actions.removeAllCompleted, state => state.filter( todo => !todo.completed))
);