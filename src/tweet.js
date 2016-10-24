var React = require('react');
var ReactDOM = require('react-dom');


var Twitter = React.createClass({
  getInitialState: function(){
    return {data: []}
  },
  loadTweetsFromServer: function () {
    // GET updated set of tweets from database
    $.get(this.props.url, function (data) {
        // Set state in step 6 of the exercise!
         this.setState({data: data})
      }.bind(this)
    );
  },
  handleTweetSubmit: function (author, text) {
    var tweet = { author: author, text: text };
  
    // POST to add tweet to database
    $.post(this.props.url, tweet, function (data) {
        // Set state in step 10 of the exercise!
        this.setState({data: data})
      }.bind(this)
    );
  },
  componentDidMount: function () {
    // Set this.state.data to most recent set of tweets from database
    this.loadTweetsFromServer();
  },
  render: function () {
    
    return (
      
      <div className="twitter">
        <h1>Tweets</h1>
        <TweetForm onTweetSubmit={this.handleTweetSubmit}/>
        <TweetList tweets={this.state.data}/>
        
        {/* Render TweetForm component here */}
        {/* Render TweetList component here */}
      </div>
    );
  }
});

var TweetForm = React.createClass({
  render: function () {
    return (
      <form className="tweetForm" onSubmit={this.handleSubmit}>
        <input ref="author" type="text" placeholder="Author name"></input>
        <input ref="text" type="text" placeholder="Tweet"></input>
        <button className="btn btn-info" type="submit">Submit</button>
        
      </form>
    );
  },
  handleSubmit: function(e){
    e.preventDefault();
    this.props.onTweetSubmit( this.refs.author.value, this.refs.text.value);
    this.refs.author.value = "";
    this.refs.text.value = "";
  },
  
});

var TweetList = React.createClass({

  render: function () {
    return (
      <div className="tweetList">
        {this.props.tweets.map(function(tweet){
           return <Tweet text={tweet.text} author={tweet.author}/>
        })}
       
      </div>
    );
  }
});

var Tweet = React.createClass({
  render: function () {
    return (
      <div className="tweet">
        <p>{this.props.author}</p>
        <h2>{this.props.text}</h2>
      </div>
    );
  }
});

ReactDOM.render(
  <Twitter url="tweets.json"/>,
  document.getElementById('tweets')
);
