import { Component } from '@angular/core';

// webpack html imports
let template = require('./carousel-home-with-images.template.html');

@Component({
  selector: 'carousel-home-with-images',
  template: template
  })
export class carouselhomewithimageComponent {
  public myInterval: number = 5000;
  public noWrapSlides: boolean = true;
  public slides: Array<any> = [];

  public constructor() {
    for (let i = 0; i < 3; i++) {
      this.addSlide(i);
    }
  }

  public addSlide(i): void {
    let newWidth = 600 + this.slides.length + 1;
    i++;
    this.slides.push({
      image: `../../../assets/img/slider-homepage/slide-0`+i+`.jpg`,
      text: `${['More', 'Extra', 'Lots of', 'Surplus'][this.slides.length % 4]}
      ${['Cats', 'Kittys', 'Felines', 'Cutes'][this.slides.length % 4]}`
    });
  }

  public removeSlide(index: number): void {
    this.slides.splice(index, 3);
  }
}
