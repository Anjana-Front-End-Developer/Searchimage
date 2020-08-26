import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { IImageState } from '../state/image.state';

const selectImages = (state:IAppState) => state.images;

export const selectImageList = createSelector(selectImages,(state:IImageState)=>state.images);
export const selectFavouriteImagesList = createSelector(selectImages,(state:IImageState)=>state.images);
