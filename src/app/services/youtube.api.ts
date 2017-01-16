let gApiClient = require('google-client-api')()
let request = require('request')
let qs = require('qs')

export class YoutubeApi
{
    public endPoint : string = 'https://www.googleapis.com/youtube/v3/'
    public apiKey : string

    constructor (apiKey) {
        this.apiKey = apiKey
        gApiClient.then((gapi) => {
            gapi.client.setApiKey(apiKey)
            gapi.auth2.init({
            client_id: '941873821580-13bgpth9bavtj28vtgriii6mvg24na62.apps.googleusercontent.com',
            scope: 'https://www.googleapis.com/auth/youtube'
          }).then(function () {
            gapi.auth2.getAuthInstance().isSignedIn.listen((res) => {
                console.info('res',res)
            });
            console.info('res2',gapi.auth2.getAuthInstance().isSignedIn.get());
          });
      }).catch(() => {
          console.info('vse propalo')
      })
        // console.log('qs',qs)
        // request({ url : 'https://accounts.google.com/o/oauth2/auth'})
    }

    protected request (method, url, params, callback) {
        params.key = this.apiKey
        const fullUrl = this.endPoint + url + '?' + qs.stringify(params)
        request({url: fullUrl, method: method.toUpperCase()},
          function(err, headers, body) {
            if (err) return callback(err, null, null);
            var data = JSON.parse(body);
            if (data.error) return callback(data, null, null);

            return callback(err, data, headers);
          });
    }

    public get (url, params, callback) {
        this.request('GET', url, params, callback)
    }
    public post (url, params, callback) {
        this.request('POST', url, params, callback)
    }
    public put (url, params, callback) {
        this.request('PUT', url, params, callback)
    }
    public delete (url, params, callback) {
        this.request('DELETE', url, params, callback)
    }
}
