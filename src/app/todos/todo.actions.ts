import { createAction, props } from '@ngrx/store';

export const add = createAction('[TODO] Add todo', props<{text: string}>());
export const toggle = createAction('[TODO] Toggle todo', props<{id: number}>());
export const edit = createAction('[TODO] Edit todo', props<{id: number, text: string}>());
export const remove = createAction('[TODO] Delete todo', props<{id: number}>());
export const toggleAll = createAction('[TODO] Toggle all todos', props<{completed: boolean}>());
export const removeAllCompleted = createAction('[TODO] Remove all todos completed');