const YOUTUBE_RATING_DISLIKE = 'dislike'
const YOUTUBE_RATING_LIKE = 'like'
const YOUTUBE_RATING_NONE = 'none'
import { Component, Input, OnInit, ElementRef } from '@angular/core'
import { YoutubeService } from '../../../services/youtube.service'

import moment = require("moment")
///<reference path="moment/moment.d.ts"/>

@Component({
  selector: 'youtube-video',  // <youtube-video></youtube-video>

  templateUrl: './youtube-video.template.html',

  styleUrls: ['../sass/video.style.scss', '../../tag-line/sass/tag-line.style.scss']
})

export class YoutubeVideoComponent implements OnInit {
    @Input() public frameWidth : number = 560
    @Input() public frameHeight : number = 315
    @Input() public videoId : string
    @Input() public allowFullscreen : boolean = false
    @Input() public showStatusBar : boolean = true
    @Input() public showRateButtons : boolean = true
    public likes : number
    public userLikes : boolean = false
    public duration : string
    public isPlaying : boolean = false
    private youtube : any

    public constructor (yt : YoutubeService, public element: ElementRef) {
        this.youtube = yt

    }

    public ngOnInit () {
        this.getstatistics()
        const iframeCont = this.element.nativeElement.getElementsByClassName('iframe-container')[0]
        const player = this.youtube.getPlayer(iframeCont, {
            width : this.frameWidth,
            height : this.frameHeight,
            videoId : this.videoId,
            allowFullscreen : this.allowFullscreen,
            events : {
                onStateChange : (e) => {
                    if (e.data === 1) {
                        this.isPlaying = true
                    } else if (e.data === 2) {
                        this.isPlaying = false
                    }
                }
            }
        })
    }

    public like () {
        this.youtube.rate(this.videoId, YOUTUBE_RATING_LIKE).then((resp) => {
            if (!this.userLikes) {
                this.likes = this.likes || 0
                this.likes ++
            }
            this.userLikes = true
        }).catch((resp) => {
            console.log('ERROR while trying to rate a video', resp.json())
        })
    }

    public dislike () {
        this.youtube.rate(this.videoId, YOUTUBE_RATING_DISLIKE).then((resp) => {
            console.log('User dislikes this video' + this.videoId)
        }).catch((resp) => {
            console.log('ERROR while trying to rate a video', resp.json())
        })
    }

    public getstatistics () {
        if (this.videoId) {
            this.youtube.getStatistic(this.videoId).then(resp => {
                const data = resp.json()
                const videoDetails = data.items[0]
                if (videoDetails) {
                    this.likes = videoDetails.statistics.likeCount
                    this.duration = moment(videoDetails.contentDetails.duration, '[PT]m[M]s[S]').format('m:ss [Min.]')
                }
            }).catch((resp) => {
                console.log('ERROR while trying to get video statistics', resp.json())
            })
        }
    }
}
