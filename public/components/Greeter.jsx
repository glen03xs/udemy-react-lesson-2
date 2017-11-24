const React = require('react');
const GreeterMessage = require('GreeterMessage');
const GreeterForm = require('GreeterForm');

const Greeter = React.createClass( {
    getDefaultProps: function() {
        return {
            name: 'Jon React',
            mood: 'Happy'
        };
    },

    getInitialState: function() {
        return {
            name: this.props.name,
            mood: this.props.mood
        }
    },

    handleNewData: function(updates) {
        this.setState(updates);
    },

    render: function() {
        const babyName = this.state.name;
        const theMood =  this.state.mood;
        return (
            <div>
                <GreeterMessage name={babyName} mood={theMood}  />
                <GreeterForm onNewData={this.handleNewData}/>
            </div>
        );
    }
});

module.exports = Greeter;