import { Component } from '@angular/core';
import { moldService } from "../../../shared/data/mold.service";
import {WindowService} from "../../../shared/window/window.service";
import { AppState } from '../../../app.service';
import { Router } from '@angular/router';

import {SelectModule} from 'angular2-select';
import { selectOption } from "../../../shared/data/select.class";

@Component({
  selector: 'question1-desktop',  // <question1-desktop></question1-desktop>

  templateUrl: './desktop.template.question1.html',

  styleUrls: ['../../scss/desktop.style.question.scss']
})
export class question1Desktop {
  private Title:string;
  private range:number;
  private min:number;
  private max:number;
  private isDevice:boolean;
  private lastRange:number;
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

  constructor(public appState: AppState,public router: Router,private _moldService:moldService,public mywindow:WindowService){
 //let a = document.getElementsByClassName("pollution-slider");


  }
  ngOnInit(){
    this.isMold = (this.appState.get('service') == 'mold');
    this.isPest = (this.appState.get('service') == 'pest');
    this.isFoodFloor = (this.appState.get('service') == 'floor');
    this.isDevice = this.mywindow.isDevice();
    this.range = this._moldService.moldData.range;
    this.lastRange = this._moldService.moldData.range;
    this.Title = this._moldService.rangeTitles[this.range];
    this.min = this._moldService.rangeMin;
    this.max =this._moldService.rangeMax;
  }
  changeRange(e){
    this.Title = this._moldService.rangeTitles[this.range];
  }
  ngOnDestroy(){
    this._moldService.moldData.range = this.range;

  }

  goNext(): void{
    this.appState.set('direction','next');
    this.router.navigateByUrl('questions/2',{ skipLocationChange: true });
  }

  click(e){
    // console.log('click');
    // //e.stopPropagation();
    // console.log(e);
    // this.calculateTap(e);
  }


onDrag(e){
  console.log('drag');
  this.calculateTap(e);
}
onTap(e){
  // console.log('tap');
  // this.calculateTap(e);
}

input(e){
  console.log(e);
//this.calculateTap(e);

}

  calculateTap(e)
  {



    //to avoid string conversation



    let outerOffset:number = (this.mywindow.nativeWindow.innerWidth- e.target.offsetWidth-e.target.offsetLeft*2)/2;
    let pixels:number = e.pointers[0].screenX - outerOffset - e.target.offsetLeft;

      let rangeBefore:number = ((e.target.max / e.target.offsetWidth) * (pixels));
    rangeBefore = Math.round(rangeBefore);
    console.log(this.lastRange);
    console.log(rangeBefore);
    if (rangeBefore < this.min) {
      rangeBefore = this.min;
    }
    if (rangeBefore > this.max) {
      rangeBefore = this.max;
    }
          if(rangeBefore>this.lastRange){
        rangeBefore = this.lastRange+1;
      }  else if(rangeBefore<this.lastRange){
        rangeBefore = this.lastRange-1;
      } else{
        rangeBefore = this.lastRange;
          }

      this.range =rangeBefore;
      this.Title = this._moldService.rangeTitles[this.range];
    this.lastRange = this.range *1;
    }




}
