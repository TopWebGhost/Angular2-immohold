import { Component, ElementRef, OnInit, AfterViewChecked } from '@angular/core';

// webpack html imports
let template = require('./carousel-home.template.html');

@Component({
  selector: 'carousel-home',
  template: template,
  styleUrls: ['../sass/carousel-home.style.scss']
})
export class carouselhomeComponent implements OnInit, AfterViewChecked
{
  public activeSlide: number = 0
  public slides: Array<any> = [
      {
          title : 'Wie lange dauert der Selbstcheck?',
          text : `Der Selbstcheck beinhaltet lediglich drei einfache Fragen.
                  Diese kannst du in weniger als einer Minute beantworten. Die Analyse
                  deiner Antworten ist dann ebenfalls nach einigen Sekunden beendet,
                  und eine Einschätzung wird dir direkt gegeben.`,
      },
      {
          title : 'Kann ich direkt mit einem Experten reden ohne den Fragebogen auszufüllen?',
          text : `Leider ist das nicht möglich. Die Fragen sind notwendig, um
                  den Experten eine Einschätzung deines Problems zu geben. Sie
                  werden sich dann innerhalb von nur 48 Stunden bei dir melden.`,
      },
      {
          title : 'Woher kommen die Videos?',
          text : `Die Videos wurden aus einer weiten Auswahl an öffentlich
                  verfügbaren Videos von uns auf ihre Qualität und deren inhaltliche
                  Richtigkeit geprüft. Mindestens drei paar Augen haben jedes
                  einzelne Video gesichtet und bewertet. Nur die besten Videos
                  haben es bis hierher geschafft.`,
      },
  ]


  public constructor(public element: ElementRef) {

  }

  public ngOnInit () {
      this.changeSlide(1)
  }

  public ngAfterViewChecked () {
      this.adjustPosition()
  }

  public adjustPosition () {
      const rootElem = this.element.nativeElement
      const contElem = rootElem.getElementsByClassName('carousel-home-block')[0]
      const itemElem = rootElem.getElementsByClassName('item')[0]
      const sliderElem = rootElem.getElementsByClassName('carousel-table')[0]
      console.info(rootElem, contElem, itemElem, sliderElem)
      const totalWidth = contElem.offsetWidth
      const itemWidth = itemElem.offsetWidth
      const leftMargin = (totalWidth - itemWidth) / 2 - itemWidth * (this.activeSlide + 1)
      sliderElem.style.marginLeft = `${leftMargin}px`
  }

  public next (): void {
      this.changeSlide(this.getNextSlide(this.activeSlide, +1))
  }

  public prev (): void {
      this.changeSlide(this.getNextSlide(this.activeSlide, -1))
  }

  public changeSlide (slideIndex: number): void {
      this.activeSlide = slideIndex
  }

  public getNextSlide (currentSlide: number, shift: number = 1): number {
      const total = this.slides.length
      let nextSlide = this.activeSlide + shift
      if (nextSlide >= total) {
          nextSlide = 0
      } else if (nextSlide < 0) {
          nextSlide = total - 1
      }
      return nextSlide
  }

  public getSlides (): Array<any> {
      let slides = this.slides.slice()

      slides.unshift({title: null, text: null, fake: true})
      slides.push({title: null, text: null, fake: true})
      return slides
  }
}
