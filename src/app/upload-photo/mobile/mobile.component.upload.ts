import { Component } from '@angular/core';
import { AppState } from '../../app.service';
import { Router } from '@angular/router';
import { Photo } from "../../shared/data/image.class";
import { moldService } from "../../shared/data/mold.service";
import { WindowService } from "../../shared/window/window.service";
import any = jasmine.any;

@Component({
  selector: 'upload-mobile',  // <home></home>

  templateUrl: 'mobile.template.upload.html',

  styleUrls: ['../scss/mobile.style.upload.scss']
})
export class uploadMobile {
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
    this.router.navigateByUrl('/problem-photo',{ skipLocationChange: true });
  }


    reader.readAsDataURL($event.target.files[0]);


  }


  goRecomendations(){
    this.appState.set('direction','next');
    //this.router.navigateByUrl('recomendations',{ skipLocationChange: true });
    this.router.navigateByUrl('primaryContent',{ skipLocationChange: true });
  }

  goBack(): void {
    this.appState.set('direction','prev');
    this.router.navigateByUrl('product-details',{ skipLocationChange: true });
  }

  goHome(){
    this.appState.set('direction','prev');
    this.router.navigateByUrl('/',{ skipLocationChange: true });
  }
  goTerms(){
    this.appState.set('direction','next');
    this.router.navigateByUrl('terms',{ skipLocationChange: true });
  }

  goDisclaimer(){
    this.appState.set('direction','next');
    this.router.navigateByUrl('disclaimer',{ skipLocationChange: true });
  }
  goContact() {
    this.appState.set('direction', 'next');
    this.router.navigateByUrl('contacts', {skipLocationChange: true});
  }
  goAbout() {
    this.appState.set('direction', 'next');
    this.router.navigateByUrl('about', {skipLocationChange: true});
  }
}
