import { Component } from '@angular/core';
import { moldService } from "../../../shared/data/mold.service";
import { Material } from "../../../shared/data/material.class";
import { Router } from '@angular/router';
import { AppState } from '../../../app.service';

@Component({
  selector: 'question2-desktop',  // <question1-desktop></question1-desktop>

  templateUrl: './desktop.template.question2.html',

  styleUrls: ['../../scss/desktop.style.question.scss']
})
export class question2Desktop {
  private materials: Material[];
  private material: string;
  private isMold:boolean;
  private isPest:boolean;
  private isFoodFloor:boolean;

  constructor(private _moldService:moldService,public router: Router, public appState:AppState){

  }
  ngOnInit(){
    this.isMold = (this.appState.get('service') == 'mold');
    this.isPest = (this.appState.get('service') == 'pest');
    this.isFoodFloor = (this.appState.get('service') == 'floor');
    this.materials = this._moldService.materials;
    this.material = this._moldService.moldData.material;
  }
  trackBy(title:string) {
    this._moldService.moldData.material = title;
    this.router.navigateByUrl('questions/3',{ skipLocationChange: true });
  }


}
