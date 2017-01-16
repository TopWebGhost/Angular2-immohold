import { Component } from '@angular/core';

@Component({
    selector: 'carousel-testimonials',
    templateUrl: './carousel-testimonials.template.html',
    styleUrls: ['../sass/carousel-testimonials.style.scss']
})
export class carouseltestimonialsComponent {
    public slides:Array<any> = []
    public activeSlide: number = 0

    protected testSlideData = [
        {
            title : 'Top Empfehlung!',
            author : 'Markus, 41 Jahre',
            image : '../../../assets/img/slider-testimonials/markus.jpg',
            text : 'Den Schimmel durfte ich laut der Einschätzung des Experten zwar nicht selber entfernen – aber mit wurde mir ein passender Betrieb in meiner Nähe empfohlen, der sich schnell und professionell um mein Problem gekümmert hat.',
        },
        {
            title : 'Super Service',
            author : 'Irmin, 36 Jahre',
            image : '../../../assets/img/slider-testimonials/irmin.jpg',
            text : 'Hinter dem Schrank bildete sich Schimmel an der Tapete – dank telefonischer Anleitung konnte ich ihn schnell selber entfernen. Das ist wirklich ein super Service!',
        },
        {
            title : 'Die passende Lösung per Video',
            author : 'Claudia, 39 Jahre',
            image : '../../../assets/img/slider-testimonials/claudia.jpg',
            text : 'Unsere Badezimmerfugen schimmeln oft, da wir kein Fenster haben im Bad haben. Die Artikel auf Immoheld gaben nützliche Tipps, so dass wir jetzt seit einem halben Jahr schimmelfrei sind! Mithilfe der passenden Videos konnte ich den Schimmel problemlos selber entfernen!',
        },
    ]

    public constructor() {
        this.testSlideData.forEach((item, i) => {
            this.addSlide(item)
        })
    }

    public addSlide(slideData): void {
        this.slides.push(slideData)
    }

    public next (): void {
        this.changeSlide(+1)
    }

    public prev (): void {
        this.changeSlide(-1)
    }

    public changeSlide (direction: number): void {
        const total = this.slides.length
        let activeSlide = this.activeSlide + (direction > 0 ? 1 : -1)
        if (activeSlide >= total) {
            activeSlide = 0
        } else if (activeSlide < 0) {
            activeSlide = total - 1
        }
        this.activeSlide = activeSlide
    }
}
