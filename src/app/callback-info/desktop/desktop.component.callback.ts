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
  selector: 'callback-desktop',  // <success-desktop></success-desktop>

  templateUrl: 'desktop.template.callback.html',

  styleUrls: ['../scss/desktop.style.callback.scss']
})
export class callbackDesktop {
  complexForm : FormGroup;
  public timeOptions:selectOption[];
  protected url:string;
phonePattern:RegExp;
  constructor(public appState: AppState,public router: Router,public _moldService:moldService, public fb: FormBuilder,public http:Http){
    this.http = http;

    this.complexForm = fb.group({
      'phone' : ['', Validators.required],
      'preferred_time' : ['', Validators.required],
      'email' : ['', Validators.required],
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
//http://immoheld-staging.squareball.de:8080/immoheld/request
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


    this.http.post(this.url,input  ).subscribe(res => {
      console.log(res);
    });
    this.appState.set('direction','next');
    this.router.navigateByUrl('end-of-flow',{ skipLocationChange: true });
  }


  ngOnInit(){
console.log(this.phonePattern);
    this.timeOptions = this._moldService.preferedTimes;

  }






  goBack(): void {
    this.appState.set('direction','prev');
    this.router.navigateByUrl('problem-photo',{ skipLocationChange: true });
  }
  onSelected($event){
    console.log($event);

  }



}
