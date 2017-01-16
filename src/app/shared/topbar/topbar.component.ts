import { Component } from '@angular/core';
import{ EmitterService } from '../../questions/emitter'
@Component({
  selector: 'topbar',  // <home></home>

  templateUrl: './topbar.template.html',

  styleUrls: ['./topbar.style.scss']
})
export class topbarComponent {

  emitter = EmitterService.get("channel_1");
  classTitle:string;
  constructor() {
    this.classTitle = 'block-topbar block-topbar--step-zero';
    this.emitter.subscribe(msg => {
      this.classTitle = 'block-topbar block-topbar--step-'.concat(msg.classTitle);

    });
  }


}

