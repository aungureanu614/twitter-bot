var React = require('react');
var ReactDOM = require('react-dom');

var MyComponent = React.createClass({
    render: function(){
        
        return <div>{this.state.time}</div>
    },
    getInitialState: function(){
        //should always return an object
        
        return {time: 0};
    },
    componentDidMount: function(){
          setInterval(function () {
          this.setState({ time: this.state.time + 1 })
        }.bind(this), 1000)
  
    },
    componentWillMount: function(){
        console.log('componentWillMount');
    }
});

ReactDOM.render(
    <MyComponent/>,
    document.getElementById('lifecycle')
    )