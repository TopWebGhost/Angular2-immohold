import { Component } from '@angular/core';
import { AppState } from '../../../app.service';
import { Router } from '@angular/router';
import { moldService } from "../../../shared/data/mold.service";
import { Material } from "../../../shared/data/material.class";
@Component({
  selector: 'question2-mobile',  // <home></home>

  templateUrl: './mobile.template.question2.html',

  styleUrls: ['../../scss/mobile.style.question.scss']
})
export class question2Mobile {
  private materials: Material[];
  private material: string;
  private isMold:boolean;
  private isPest:boolean;
  private isFoodFloor:boolean;

  constructor(private _moldService:moldService, public appState: AppState,public router: Router){

  }

  ngOnInit(){
    this.isMold = (this.appState.get('service') == 'mold');
    this.isPest = (this.appState.get('service') == 'pest');
    this.isFoodFloor = (this.appState.get('service') == 'floor');
    this.materials = this._moldService.materials;
    this.material = this._moldService.moldData.material;
  }

  trackBy(title:string): void{
    if(title && title.length){
      this._moldService.moldData.material = title;
      this.router.navigateByUrl('questions/3',{ skipLocationChange: true });
    }

  }

  goBack(): void {
    window.history.back();
  }
}
