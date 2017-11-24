const React = require('react');

const GreeterMessage = React.createClass({
    render: function() {
        const name = this.props.name;
        const mood = this.props.mood;

        return (
            <div>
                <h1>Hello {name}!</h1>
                <p>I am {mood} right Now!</p>
            </div>
        );
    }
});

module.exports = GreeterMessage;