/**
 * Created by vitalik on 06.10.16.
 */
import { Injectable } from '@angular/core';
import { Mold } from './mold.class';
import { Material } from "./material.class";
import { Health } from "./health.class";
import { Photo } from "./image.class";
import {selectOption} from "./select.class";


@Injectable()
export class moldService {
    rangeMin:number = 0;
    rangeMax:number =2;
    rangeTitles:any = ['bis zu 0,5','0,6 – 2 ','2 – 10 '];
  materials:Material[] =[
    { title: 'offenporig',secondTitle:'(das Material nimmt Wasser auf, z.B. Holz, Ziegel, Silikonfugen)', icon:'icon-wood',width:68, id:1},
    { title: 'geschlossen',secondTitle:'(das Material weist Wasser ab, z.B. Plastik, Metall, verputzte Wand)', icon:'icon-wall',width:51, id:2},
    { title: 'anderes Material',secondTitle:'', icon:'icon-material-both',width:29, id:3}
  ]
  healthes: Health[] = [
    { title: 'Keine Einschränkungen',secondTitle:'', icon:'icon-healthy',width:55, id:1},
    { title: 'Ich muss vorsichtig sein',secondTitle:'', icon:'icon-unhealthy',width:56, id:2},
  ];
  preferedTimes: selectOption[] = [
    {
      value: '8-12',
      label: '8-12 Uhr'
    },
    {
      value: '12-16',
      label: '12-16 Uhr'
    },
    {
      value: '16-20',
      label: '16-20 Uhr'
    }
    ];

     moldData:Mold = {
       range:0,
       email:'',
       health:'',
       material:'',
       phone:'',
       photo: {title:'',file:null,src:null},
       preferedTime:''
     }


  addPhoto(image:Photo): void{
    this.moldData.photo = image;
    console.log(this.moldData);
  }


  doYourselfDecision(): boolean{
    if((this.moldData.range == 0) && (this.moldData.material ==this.materials[1].title) && (this.moldData.health == this.healthes[0].title)){
      return true;
    }
    return false;
  }

  removePhoto(){
    this.moldData.photo =  {title:'',file:null,src:null};
  }


  getMoldData(){
    return this.moldData;
  }


  getHealthforForm():string{
//first element equals to good condition, second-bad health condition
    if(this.moldData.health ==this.healthes[1].title){
      return 'bad';
    }
    return 'good';
  }


  }







  // get range() {
  //   return this._range = this._clone(this._range);
  // }
  // // never allow mutation
  // set range(value) {
  //   throw new Error('do not mutate the `.state` directly');
  // }



  // private _clone(object: InteralStateType) {
  //   // simple object clone
  //   return JSON.parse(JSON.stringify( object ));
  // }

