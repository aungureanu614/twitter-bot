var React = require('react');
var ReactDOM = require('react-dom');

var ClickCounterCaption = React.createClass({
    render: function(){
        return (
            <div>
               {this.props.label}{this.props.number} 
            </div>
            )
    }
});

var ClickCounter = React.createClass({
    render: function () {
        return (
            <div>
               <button className="btn btn-primary" onClick={this.clickedButton}>{this.props.text}
               <span className="badge">{this.state.clicks}</span>
               </button>
               <ClickCounterCaption label="Number of clicks" number={this.state.clicks}/>
               <ClickCounterCaption label = "Numero de clics"number={this.state.clicks}/>
               <div>{this.state.clicks % 2 == 0 ? "Even" : "Odd"}</div>
            </div>
            )
    },
    
    clickedButton: function(){
      this.setState({
         
         clicks: this.state.clicks += 1
      })
        
    },
    
    getInitialState: function(){
        return {
            clicks: this.props.number
        }
    }
});



ReactDOM.render(
    <ClickCounter text="Clicks" number={6}/>,
    document.getElementById('click-counter')
);

