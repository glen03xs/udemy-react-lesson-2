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

            const name = this.refs.name.value;

            if (name.length > 0) {
                this.refs.name.value = "";
                this.props.onNewName(name);
            }

        },
        render: function() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" ref="name"/>
                    <button>Set Name</button>
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
            name: this.props.name
        }
    },

    handleNewName: function(name) {
        this.setState({
            name: name
        });
    },

    render: function() {
        const babyName = this.state.name;
        const theMood =  this.props.mood;
        return (
            <div>
                <GreeterMessage name={babyName} mood={theMood}  />
                <GreeterForm onNewName={this.handleNewName}/>
            </div>
        );
    }
});

ReactDOM.render(
    <Greeter/>,
    document.getElementById('site')
);