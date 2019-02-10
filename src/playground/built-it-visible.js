//Create component visibility toggle - render, constructor, handleToggleVisisbility
//visibility -> false

class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.toggleMessage = this.toggleMessage.bind(this);
        this.state = {
            visibility: false
        };
    }
    toggleMessage() { 
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.toggleMessage}>Show Details</button>
                {this.state.visibility && <p>this is something to show and hide </p> }
            </div>
        );
    }

}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

