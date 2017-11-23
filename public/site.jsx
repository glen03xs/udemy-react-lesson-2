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
                    <button>Submit</button>
                </form>
            </div>
        );
    }
});

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

ReactDOM.render(
    <Greeter/>,
    document.getElementById('site')
);