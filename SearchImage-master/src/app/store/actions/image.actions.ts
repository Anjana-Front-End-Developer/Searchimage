import { Action } from '@ngrx/store';   
import { IImage } from '../../models/image.interface';

export enum EImageActions{
    getImages = '[search] get the images',
    getImagesSuccess = '[search] get images success',
    getImagesError = '[search] get images failure',
    addFavourite = '[searh] add to favourite'
}

export class GetImages implements Action {
    public readonly type = EImageActions.getImages;
    constructor(public payload:string){};
}

export class GetImagesSuccess implements Action {
    public readonly type = EImageActions.getImagesSuccess;
    constructor(public payload){};
}

export class GetImagesError implements Action {
    public readonly type = EImageActions.getImagesError;
    //constructor(public payload:IImage){};
}

export class AddFavourite implements Action {
    public readonly type = EImageActions.addFavourite;
    constructor(public payload:IImage[]){}
}

export type ImageActions = GetImages | GetImagesSuccess | GetImagesError | AddFavourite;