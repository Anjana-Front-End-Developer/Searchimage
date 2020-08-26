import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Store } from "@ngrx/store";
import { EImageActions, GetImages, GetImagesSuccess, GetImagesError } from "../actions/image.actions";
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators'
import { SearchServiceService } from "../../search-service.service";

@Injectable()
export class ImageEffects{

    constructor(private service:SearchServiceService,private _action:Actions,private _store:Store){}
    
    @Effect()
    getImages = this._action.pipe(
        ofType<GetImages>(EImageActions.getImages),
        map((action:GetImages) => action.payload),
        switchMap((payload) => this.service.getSearchResult(payload)),
        map((imagesResult)=> new GetImagesSuccess(imagesResult)),
        //catchError((error) => new GetImagesError(error))
    );
}