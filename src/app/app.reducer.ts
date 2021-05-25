import { ActionReducerMap } from '@ngrx/store';
import { ipReducer } from './ip/ip.reducer';
import { locationReducer } from './location/location.reducer';

export interface AppState {
    location: any,
    ip: any
}
export const appReducers: ActionReducerMap<AppState> = {
    location: locationReducer,
    ip: ipReducer
}