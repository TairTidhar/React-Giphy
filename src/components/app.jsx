import React, { Component } from 'react';
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId:
    }
  }

  this.setState({ selectedGifId: ...})


  search = (query) => {
    giphy('ocgJ08vwqLFAQbvco4Sxm9jFr3T1vCr6').search({
      q: query,
      rating: 'q',
      limit: 10,
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }

  render() {
    const gifs = [
      {id: },
      {id: },
    ];
  return (
    <div>
      <div className="left-scene">
        <SearchBar searchFunction ={this.search} />
        <div className="selected-gif">
          <Gif id={this.state.selectedGifId} />
        </div>
      </div>
      <div className="right-scene">
        <Giflist gifs={this.state.gifs} />
      </div>
    </div>
    );
  }
}

export default App;


