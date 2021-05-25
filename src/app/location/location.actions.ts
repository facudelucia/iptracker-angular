import { createAction, props } from '@ngrx/store';

export const setLocation = createAction('[Location] Set Location', props<{ location: any }>())