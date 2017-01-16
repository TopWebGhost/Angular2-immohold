import { Component } from '@angular/core';
import { AppState } from '../../app.service';
import { Router } from '@angular/router';
import { Photo } from "../../shared/data/image.class";
import { moldService } from "../../shared/data/mold.service";
import { WindowService } from "../../shared/window/window.service";
import any = jasmine.any;
@Component({
  selector: 'upload-desktop',  // <success-desktop></success-desktop>

  templateUrl: 'desktop.template.upload.html',

  styleUrls: ['../scss/desktop.style.upload.scss']
})
export class uploadDesktop {
  private image:Photo = {title:'',file:null,src:''};
  constructor(public appState: AppState,public router: Router,public _moldService:moldService, public _windowService:WindowService){

  }



  selectFile($event): void{

    var inputValue = $event.target.files[0];

    let src:string;
    var target: EventTarget;
    var reader = new FileReader();
    this._moldService.moldData.photo.file = inputValue;
    this._moldService.moldData.photo.title = inputValue.name;

    reader.onload = (event:any) => {

      this._moldService.moldData.photo.src = event.target.result;
      this.appState.set('direction','next');
      this.router.navigateByUrl('/problem-photo',{ skipLocationChange: true });
    }


    reader.readAsDataURL($event.target.files[0]);


  }



goNext(){
  this.appState.set('direction','next');
  this.router.navigateByUrl('callback-info',{ skipLocationChange: true });
}



}
