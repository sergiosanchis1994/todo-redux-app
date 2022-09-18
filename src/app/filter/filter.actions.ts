import { createAction, props } from '@ngrx/store';

export type FiltersType = 'All' | 'Active' | 'Completed';

export const set = createAction('[FILTER] Set filter', props<{filter: FiltersType}>());