import { Component, ElementRef, OnInit, AfterViewChecked } from '@angular/core';

// webpack html imports
let template = require('./carousel-home.template.html');

@Component({
  selector: 'carousel-home-food-floor',
  template: template,
  styleUrls: ['../sass/carousel-home.style.scss']
})
export class carouselhomefoodfloorComponent implements OnInit, AfterViewChecked
{
  public activeSlide: number = 0
  public slides: Array<any> = [
      {
          title : 'Ich habe keine passende Videoanleitung gefunden. Was nun?',
          text : `Das Immoheld-Team arbeitet an einer stetigen Verbesserung unseres Angebots. Sollten wir einmal nicht die für dich passende Inhalte haben, gib uns bitte deinen Wunsch bekannt und wir werden dir weiterhelfen. Versprochen!`,
      },
      {
          title : 'Welche Fragen kann ich euren Experten stellen?',
          text : `Wir arbeiten mit Meistern ihres Fachs zusammen die jahrelange praktische Erfahrungen in ihrem Bereich haben. D.h. von Schritt-für-Schritt Anleitungen, über detaillierte Einkaufslisten bis hin zu einer Musterberatung für ihr Laminat kannst du alles fragen.`,
      },
      {
          title : 'Was hat der Immoheld als nächstes vor?',
          text : `Das Immoheld-Portal ist ein Portal von Experten für den Endnutzer. Solltest du daher die Zukunft von unserem Helden mitgestaltet möchten, so tritt gerne in Kontakt mit unserem Team und hilf mit deinem Beitrag dem Helden dabei, Deutschlands Immobilien noch besser zu machen.`,
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
