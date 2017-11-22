var Greeter = React.createClass( {
    getDefaultProps: function() {
        return {
            name: 'Jon React',
            message: 'This is a default Message'
        };
    },

    getInitialState: function() {
        return {
            name: this.props.name
        }
    },
    onButtonClick: function(e) {
        e.preventDefault();

        const refsName = this.refs.name;

        const name = refsName.value;
        refsName.value = "";

        if (typeof name === 'string' && name.length > 0) {
            this.setState({
                name: name
            });
        }
    },

    render: function() {
        const name = this.state.name;
        const message =  this.props.message;
        return (
            <div>
                <h1>Hello {name}!</h1>
                <p>{message}</p>
                <form onSubmit={this.onButtonClick}>
                <input type="text" ref="name"/>
                <button>Set Name</button>
            </form>
            </div>
        );
    }
});

const babyName = "Baby Jon"; 
const msg = "This is a component";

ReactDOM.render(
    <Greeter name={babyName} message={msg}/>,
    document.getElementById('site')
);