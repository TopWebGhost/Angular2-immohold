import { Component,Pipe,PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

// webpack html imports
let template = require('./carousel-other-video.template.html');

@Component({
  selector: 'carousel-other-video',
  template: template,
  styleUrls: ['../sass/carousel-other-video.style.scss']
})
export class carouselothervideoComponent {
  public myInterval: number = 5000;
  public noWrapSlides: boolean = true;
  public slides: Array<any> = [];

  public constructor() {
    for (let i = 0; i < 2; i++) {
      this.addSlide();
//      this.initSlides();
    }
    console.log(this.slides);
  }

  public initSlides():void{
  this.slides.push([
    {title:'Schimmel im Bad entfernen',link:'https://www.youtube.com/embed/ZRaglkcBwts?enablejsapi=1'},
    {title:'Hier steht Frage 3. Nice!',link:'https://www.youtube.com/embed/S66a8dejVYQ?enablejsapi=1'},
  ])

  }

  public addSlide(): void {
    let newWidth = 600 + this.slides.length + 1;
    this.slides.push({
        title: `${
          [
            'Schimmel im Bad entfernen',
            'Hier steht Frage 3. Nice!'
          ][this.slides.length % 2]}`,
        link: `${
        [
         'https://www.youtube.com/embed/ZRaglkcBwts?enablejsapi=1',
         'https://www.youtube.com/embed/S66a8dejVYQ?enablejsapi=1',  
        ][this.slides.length % 2]}`

    });
  }



  public removeSlide(index: number): void {
    this.slides.splice(index, 2);
  }
}
