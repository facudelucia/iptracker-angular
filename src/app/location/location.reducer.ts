import { createReducer, on } from '@ngrx/store';
import { setLocation } from './location.actions'

export const initialState: any = {}

const _locationReducer = createReducer(initialState,
    on(setLocation, (state: any, { location }) => location),
)
export function locationReducer(state: any, action: any) {
    return _locationReducer(state, action)
}