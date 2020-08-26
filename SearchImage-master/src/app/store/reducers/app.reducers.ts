import { ActionReducerMap } from '@ngrx/store';

import { routerReducer } from '@ngrx/router-store';
import { IAppState } from '../state/app.state';
import { imageReducer } from '../reducers/image.reducers'

export const appReducer:ActionReducerMap<IAppState,any> = {
    router:routerReducer,
    images:imageReducer
}