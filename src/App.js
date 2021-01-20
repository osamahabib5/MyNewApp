import Header from  './components/header'
import React, {Component} from 'react';
import JSON from './12.1 db.json.json';
import NewsList from './components/news_list';
class App extends Component{
  state={
    news: JSON
  }
  render(){
    return(
      <div>
        <Header />
        <NewsList news = {this.state.news}>
          Hello dudes 
          {/* We can call this through props.children */}
        </NewsList>
      </div>
    )
  }
}

export default App;
