import { Action, createReducer, on, props } from '@ngrx/store';
import * as actions from './filter.actions';
import { FiltersType } from './filter.actions';

export const initialState: FiltersType = 'All';
  
export const filterReducer = createReducer<FiltersType, Action>(
    initialState,
    on(actions.set, (state: FiltersType, { filter }) => filter)
);