import { Component } from '@angular/core';
import { AppState } from '../../app.service';
import { Router } from '@angular/router';
import { moldService } from "../../shared/data/mold.service";
import { Http } from '@angular/http';
import { Response,Headers,RequestOptions } from "@angular/http";



import {FormGroup, FormBuilder, Validators,ReactiveFormsModule} from '@angular/forms';

import {SelectModule} from 'angular2-select';
import { selectOption } from "../../shared/data/select.class";

@Component({
  selector: 'callback-mobile',  // <home></home>

  templateUrl: 'mobile.template.callback.html',

  styleUrls: ['../scss/mobile.style.callback.scss']
})
export class callbackMobile {
  complexForm : FormGroup;
  public timeOptions:selectOption[];
  protected url:string;
constructor(public appState: AppState,public router: Router,public _moldService:moldService, public fb: FormBuilder,public http:Http){
  this.http = http;
//this.url = "http://52.57.140.243:8080/immoheld/request/";
//  this.url="http://localhost:8080/request/";
  this.complexForm = fb.group({
    'phone' : ['', [Validators.required]],
    'preferred_time' : ['', Validators.required],
    'email' : ['', [Validators.required]],
    'name' : ['', Validators.required],




    //




  })
  // console.log(this.complexForm);
  // this.complexForm.valueChanges.subscribe( (form: any) => {
  //     console.log('form changed to:', form);
  //   }
  // );


}


  submitForm(value: any){
    if(!this.complexForm.valid){
      for (var i in this.complexForm.controls) {
        this.complexForm.controls[i].markAsTouched();
      }
      return false;
    }

    this.url = this.appState.getUrl()+'/request/';
    //getting additional data from question model
    value.section = 'mold';
    value.health = this._moldService.getHealthforForm();
    value.material = this._moldService.moldData.material;
    value.size = this._moldService.moldData.range.toString();
    console.log(value.size);

    var header = new Headers();
    header.append('Content-Type','application/json');
    var input = new FormData();
    let json = JSON.stringify(value);
    console.log(json);
    input.append('json',json);
    if(this._moldService.moldData.photo.file!==null){
      input.append('file',this._moldService.moldData.photo.file);
    }


    // this.http.post('http://localhost:8080/request/',input  ).subscribe(res => {
    this.http.post(this.url,input  ).subscribe(res => {
      console.log(res);
    });
this.router.navigateByUrl('end-of-flow',{ skipLocationChange: true });
  }


ngOnInit(){

  this.timeOptions = this._moldService.preferedTimes;

}






  goBack(): void {
    this.appState.set('direction','prev');
    if(this._moldService.moldData.photo.file!==null){
      this.router.navigateByUrl('problem-photo',{ skipLocationChange: true });
    }else{
      this.router.navigateByUrl('upload-photo',{ skipLocationChange: true });
    }

  }
  onSelected($event){
    console.log($event);

  }
  goHome() {
    this.appState.set('direction', 'prev');
    this.router.navigateByUrl('/', {skipLocationChange: true});

  }


  goRecomendations(){
    this.appState.set('direction','prev');
    //this.router.navigateByUrl('recomendations',{ skipLocationChange: true });
    this.router.navigateByUrl('primaryContent',{ skipLocationChange: true });
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
