import { Injectable } from '@angular/core'
import { Http, Response, Headers } from '@angular/http'
import {Observable} from 'rxjs/Rx'
import 'rxjs/add/operator/toPromise'
declare var YT : any

@Injectable()
export class YoutubeService
{
  protected apiKey : string = 'AIzaSyCURzUkx1c86RW9k04evelFkoEPEJLqxQ4'
  protected oAuthClientId : string = '941873821580-13bgpth9bavtj28vtgriii6mvg24na62.apps.googleusercontent.com'
  protected oAuthToken : string
  protected oAuthType : string
  protected oAuthTokenExpiration : number
  protected httpClient : Http

  constructor (http : Http) {
      this.httpClient = http

  }

  getStatistic (videoId: string): Promise<Response> {
    const endpoint = 'https://www.googleapis.com/youtube/v3/videos'
    const parts = 'contentDetails,statistics'
    const url = `${endpoint}?part=${parts}&id=${videoId}&key=${this.apiKey}`

    return this.httpClient.get(url)
      .toPromise()
  }

  getOAuthToken (): Promise<{}> {
      const tokenPromise = new Promise((resolve, reject) => {
          if (this.oAuthToken) {
              return resolve()
          }
          const oAuthEndpoint = 'https://accounts.google.com/o/oauth2/auth'
          const returnUrl = window.location.origin + '/token-parser.html'
          const scope = 'https://www.googleapis.com/auth/youtube'
          const url = `${oAuthEndpoint}?client_id=${this.oAuthClientId}&redirect_uri=${returnUrl}&scope=${scope}&response_type=token`
          const win = window.open(
              url,
              'Youtube Auth',
              'location=no,width=600,height=600,scrollbars=yes,top=100,left=700')

          window['__tokenReceived'] = (tokenData) => {
              this.oAuthToken = tokenData.access_token || null
              this.oAuthType = tokenData.token_type || 'Bearer'
              this.oAuthTokenExpiration = tokenData.expires_in || 0
              resolve()
          }

      })

      return tokenPromise
  }

  rate (videoId: string, rating: string): Promise<Response> {
    return this.getOAuthToken().then(() => {
        let url = `https://www.googleapis.com/youtube/v3/videos/rate?id=${videoId}&rating=${rating}`

        const headers = new Headers()
        headers.append('Authorization', `${this.oAuthType} ${this.oAuthToken}`)

        return this.httpClient.post(url, null, {headers})
            .toPromise()
    })

  }

  getPlayer (container, opts) {
    const player = new YT.Player(container, opts)
    return player
  }
}
