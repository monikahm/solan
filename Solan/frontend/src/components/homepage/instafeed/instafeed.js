import React, { Component } from 'react'

class Instafeed extends Component {
  constructor(props) {
    super(props)

    this.state = {
      media_data: [],
      visible: 5
    }
    this.loadmore = this.loadmore.bind(this)
  }

  async componentDidMount() {
    // Getting the list of Instagram media id s
    const response = await fetch(
      `https://graph.instagram.com/17841400698275821/media?access_token=IGQVJXWGZA3VmRtUDRvSW1XblRPMFM3RHBtZAzNnaDlhakJHUGNLNExTVFd0eGhSNGhWTUFzdlVrNmlrLVotbUxPQl92OUdTcWdUSk5ydGVTUF9iRFo5Wkdrel9yLUpjVk1wSjFrbEZAR`
    )
    const mediaIdsArray = await response.json()

    var media_feed = []

    for (let i = 0; i < 20; i++) {
      //Define dynamic media url to be fetched
      let media_url =
        'https://graph.instagram.com/' +
        mediaIdsArray.data[i]['id'] +
        '?access_token=IGQVJXWGZA3VmRtUDRvSW1XblRPMFM3RHBtZAzNnaDlhakJHUGNLNExTVFd0eGhSNGhWTUFzdlVrNmlrLVotbUxPQl92OUdTcWdUSk5ydGVTUF9iRFo5Wkdrel9yLUpjVk1wSjFrbEZAR&fields=media_type,media_url,thumbnail_url,permalink,caption'
      const media_response = await fetch(media_url)
      const media_json = await media_response.json()
      media_feed.push(media_json)

      //Set state the media feeds to media_data
      this.setState({ media_data: media_feed })
    }
  }

  //Load more button
  loadmore() {
    this.setState((old) => {
      return { visible: old.visible + 5 }
    })
  }

  render() {
    // Conditioning to render until api fetches
    if (this.state.media_data.length > 0) {
      return (
        <div>
          <div className="List">
            {this.state.media_data.slice(0, this.state.visible).map((el, i) => (
              <div className="column" key={i}>
                <a href={this.state.media_data[i].permalink} target="_blank">

                  {/* Check whether the feed is video or image and populate the relevant code according to the mdeia type */}
                  {this.state.media_data[i].media_type == 'VIDEO' ? (
                    <video>
                      <source src={this.state.media_data[i].media_url}></source>
                    </video>
                  ) : (
                    <img
                      src={this.state.media_data[i].media_url}
                      alt="instagram feed" className="instamedia-thumb"
                    />
                  )}
                </a>
              </div>
            ))}
          </div>

          {/* Load more button conditioned  */}
          {this.state.visible < this.state.media_data.length && (
            <button onClick={this.loadmore} className="seemore-btn">
              Load More...
            </button>
          )}
        </div>
      )
    } else {
      return <div></div>
    }
  }
}

export default Instafeed
