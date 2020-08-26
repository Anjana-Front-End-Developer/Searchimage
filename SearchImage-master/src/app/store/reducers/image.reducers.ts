import { EImageActions } from './../actions/image.actions';
import { ImageActions } from './../actions/image.actions';

import { initialImageState,IImageState } from './../state/image.state'

export const imageReducer = (state = initialImageState,action:ImageActions):IImageState => {
    switch(action.type){
        case EImageActions.getImagesSuccess:
            return {
                ...state,
                images:action.payload
            };
        case EImageActions.getImagesError:
            return {
                ...state,
                images:null
            }    
        case EImageActions.addFavourite:
            return {
                ...state,
                images:action.payload
            }    
        defualt:
            return state;
    }
}