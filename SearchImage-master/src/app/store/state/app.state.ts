import { RouterReducerState } from '@ngrx/router-store'

import { IImageState,initialImageState} from './image.state'

export interface IAppState {
    router?:RouterReducerState;
    images:IImageState;
}

export const intialAppState:IAppState = {
    images:initialImageState
}

export function getInitialState():IAppState{
    return intialAppState;
}