import { createAction, props } from '@ngrx/store';

export const setIp = createAction('[Ip] Set Ip', props<{ ip: any }>())