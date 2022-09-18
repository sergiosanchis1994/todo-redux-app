import { Pipe, PipeTransform } from '@angular/core';
import { FiltersType } from '../filter/filter.actions';
import { Todo } from './models/todo.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filter: FiltersType): Todo[] {
    switch (filter) {
      case 'Active':
        return todos.filter(todo => !todo.completed);
      case 'Completed':
        return todos.filter(todo => todo.completed);
      default:
        return todos;
    }
  }

}
