const React = require('react');

const GreeterForm = React.createClass({
    onFormSubmit: function(e) {
        e.preventDefault();

        let updates = {};
        const name = this.refs.name.value;
        const mood = this.refs.mood.value;

        if (name.length > 0) {
            this.refs.name.value = "";
            updates.name = name;
        }

        if (mood.length > 0) {
            this.refs.mood.value = "";
            updates.mood = mood;                
        }

        this.props.onNewData(updates);

    },
    render: function() {
    return (
        <div>
            <form onSubmit={this.onFormSubmit}>
                <p><input type="text" ref="name" placeholder="Name"/></p>
                <p><textarea ref="mood" placeholder="Mood"></textarea></p>
                <button>Done</button>
            </form>
        </div>
    );
}
});

module.exports = GreeterForm;