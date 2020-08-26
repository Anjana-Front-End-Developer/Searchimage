import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchImageComponent } from './search-image/search-image.component';
import { AddFavouriteComponent } from './add-favourite/add-favourite.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material/material.module';
import { SavedImagesComponent } from './saved-images/saved-images.component';
import {FormsModule} from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store'
import { ImageEffects } from './store/effects/image.effects'
import { appReducer } from './store/reducers/app.reducers';

@NgModule({
  declarations: [
    AppComponent,
    SearchImageComponent,
    AddFavouriteComponent,
    SavedImagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([ImageEffects]),
    StoreRouterConnectingModule.forRoot({stateKey:'router'})
  ],
  providers: [],
  entryComponents:[AddFavouriteComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
