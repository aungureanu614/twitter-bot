var React = require('react');
var ReactDOM = require('react-dom');

var styles = {
	open: { 
		display: 'block'
	},
	closed: { 
		display: 'none' 
	}
};

var DropdownMenu = React.createClass({
	getInitialState: function() {
		return { open: false };
	},
	// Toggle DropdownMenu's open/closed state 
	toggleMenu: function() {
		this.setState({ open: !this.state.open });
	},
	render: function() {
		var listStyle = this.state.open ? styles.open : styles.closed;
		return (
			<div className='dropdown-wrapper' onClick={ this.toggleMenu }>
				<button className='btn btn-info'>
					Dropdown Menu
				</button>
				<ul style={listStyle}>
					<li>Option #1</li>
					<li>Option #2</li>
					<li>Option #3</li>
				</ul>
			</div>
		);
	}
});

ReactDOM.render(<DropdownMenu/>, document.getElementById('dropdown-menu'))