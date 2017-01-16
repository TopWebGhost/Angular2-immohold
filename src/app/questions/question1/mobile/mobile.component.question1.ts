import { Component } from '@angular/core';
import { AppState } from '../../../app.service';
import { Router } from '@angular/router';
import {WindowService} from "../../../shared/window/window.service";
import { moldService } from "../../../shared/data/mold.service"
//import {Mold} from "../../../shared/data/mold.class"

import {SelectModule} from 'angular2-select';
import { selectOption } from "../../../shared/data/select.class";

@Component({
  selector: 'question1-mobile',  // <home></home>

  templateUrl: './mobile.template.question1.html',

  styleUrls: ['../../scss/mobile.style.question.scss']
})
export class question1Mobile {
  //private myMold:Mold;
  private range:number;
  private Title:string;
  private rangeBefore:number;
  private min:number;
  private max:number;
  private isDevice:boolean;

  private sizeOptions = [
    {
      value: '1',
      label: '1'
    },
    {
      value: '3',
      label: '3'
    },
    {
      value: '5',
      label: '5'
    }
    ];
  private isMold:boolean;
  private isPest:boolean;
  private isFoodFloor:boolean;

  constructor(public appState: AppState,public router: Router,public mywindow:WindowService,private _moldService:moldService){



    //console.log(this._moldService.moldData.range);
    //this.platform = this.mywindow.isIphone();
  }



  ngOnInit(){
    this.isMold = (this.appState.get('service') == 'mold');
    this.isPest = (this.appState.get('service') == 'pest');
    this.isFoodFloor = (this.appState.get('service') == 'floor');

    this.isDevice = this.mywindow.isDevice();
    this.range = this._moldService.moldData.range;
    this.Title = this._moldService.rangeTitles[this.range];
    this.min = this._moldService.rangeMin;
    this.max =this._moldService.rangeMax;

}
goNext(): void{
  this.appState.set('direction','next');
  this.router.navigateByUrl('/questions/2',{ skipLocationChange: true });
}

changeRange(e){

  //this.Title = (this.range ==0) ? 'bis zu 0,5 ' : (this.range ==1) ? '0,6 – 2 ': '2 – 10 ';
  this.Title = this._moldService.rangeTitles[this.range];
}
ngOnDestroy(){
  this._moldService.moldData.range = this.range;
}


onTap(e)
  {


 //if(this.platform.indexOf('iP')>=0) {
    if(this.isDevice){
   let lastRange = this.range;

   this.rangeBefore = ((e.target.max / e.target.offsetWidth) * (e.pointers[0].screenX - e.target.offsetLeft));
   this.range = Math.round(this.rangeBefore);
    if(this.range>lastRange){
      this.range = lastRange+1
    }  else if(this.range<lastRange){
      this.range = lastRange-1;
    }
   if (this.range < this.min) {
     this.range = this.min;
   }
   if (this.range > this.max) {
     this.range = this.max;
   }
      this.Title = this._moldService.rangeTitles[this.range];
 }

    //((e.target.max / e.target.offsetWidth)*(e.pointers[0].screenX - e.target.offsetLeft));


  // console.log(e.pointers['Touch']);
  // console.log(e.pointers['Touch'].screenX);


//   console.log((e.target.max / e.target.offsetWidth)*(e.pointers[0].Touch.screenX - e.target.offsetLeft));
  //   console.log(e.pointers.Touch[0].screenX);
  // //  console.log(e);


  }

}
