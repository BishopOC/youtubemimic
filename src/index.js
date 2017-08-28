import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import API_KEY from '../secret';
const destination = document.querySelector('.container');

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };

    YTSearch({ key: API_KEY, term: 'woah' }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0],
      });
    });
  }

  render() {
    return (
    <div>
      <SearchBar />
      <VideoDetail video={this.state.selectedVideo}/>
      <VideoList videos={this.state.videos} />
    </div>
    );
  }
}

ReactDOM.render(<App />, destination);
