import { Component, OnInit } from '@angular/core';
import{SearchServiceService } from '../search-service.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddFavouriteComponent } from '../add-favourite/add-favourite.component';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../store/state/app.state';
import { GetImages } from '../store/actions/image.actions';
import { selectImageList } from '../store/selectors/image.selectors';

@Component({
  selector: 'app-search-image',
  templateUrl: './search-image.component.html',
  styleUrls: ['./search-image.component.css']
})
export class SearchImageComponent implements OnInit {
  response: any
  //response: any = this.store.pipe(select(selectImageList));
  favImage = [];
  image:any;
  display: boolean = false;
  isDisable: boolean = true;
   
  constructor(private service :SearchServiceService, private dialog: MatDialog,private store:Store<IAppState>) { 
   
  }
  addSelected(i):void {
    this.isDisable = false;
    const dialogRef=this.dialog.open(AddFavouriteComponent , {   
        width:'500px',
        height:'200px',
        data:this.response[i]
        
    });
    dialogRef.afterClosed().subscribe(result=> {
      console.log(result)
    });
}
  
  search(query){
    this.store.dispatch(new GetImages(query));
  // this.service.getSearchResult(query).subscribe(result =>{
  // console.log(result);
  //this.response = result["results"]
 //})  
  }
  
  ngOnInit(): void {
  }

}
