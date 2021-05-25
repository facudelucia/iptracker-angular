import { createReducer, on } from '@ngrx/store';
import { setIp } from './ip.actions'

export const initialState: any = {}

const _ipReducer = createReducer(initialState,
    on(setIp, (state: any, { ip }) => ip),
)
export function ipReducer(state: any, action: any) {
    return _ipReducer(state, action)
}