import React from "react";

import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

class GifListContainer extends React.Component {
  state = {
    gifs: [],
    search: ""
  };

  getGifs() {
    const BASEURL = "http://api.giphy.com/v1/gifs/search?q=";
    const APIKEY = "&api_key=dc6zaTOxFJmzC";
    fetch(BASEURL + this.state.search + APIKEY)
      .then(response => response.json())
      .then(json => {
        let gifObjs = json.data;
        let urls, gifs;
        if (gifObjs.length > 0) {
          urls = gifObjs.map(gifObj => gifObj.images.fixed_width.url);
          urls.length > 3 ? (gifs = urls.slice(0, 3)) : (gifs = urls);
          this.setState({ gifs });
        }
      });
  }

  submitHandler = search => {
    this.setState({ search }, this.getGifs());
  };

  render() {
    return (
      <div>
        <GifList gifs={this.state.gifs} />
        <GifSearch
          search={this.state.search}
          submitHandler={this.submitHandler}
        />
      </div>
    );
  }
}

export default GifListContainer;
