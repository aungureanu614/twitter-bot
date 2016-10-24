var React = require('react');
var ReactDOM = require('react-dom');

var Hello = React.createClass({
    render: function(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                <div>Hello React!</div>
                {this.props.fruit.map(function(str){
                    return <p>{str}</p>;
                })}
                <div>{this.props.num2 ? this.props.num2 : "No Num 2"}</div>
            </div>
            );
    }
});

ReactDOM.render(
    <Hello title="React Example" fruit={['Banana', 'Cherry']} num1={41} num2={55}/>, 
    document.getElementById('hello')
);


var Goodbye = React.createClass({
    render:function(){
        return(
            <div>Goodbye</div>
            );
    }
});

ReactDOM.render(
    <Goodbye/>,
    document.getElementById('goodbye')
    )