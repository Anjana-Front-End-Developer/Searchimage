import { IImage } from '../../models/image.interface';

export interface IImageState{
    image:IImage;
    images:IImage[];
}

export const initialImageState:IImageState = {
    image:null,
    images:null
}