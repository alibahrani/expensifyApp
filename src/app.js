//Stateless functional component

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: props.options
        };
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
    }

    handleDeleteOptions() {
        this.setState(() => ({ options: []}));
    }
    handlePick() {
        const genratedNumber = Math.floor(Math.random() * this.state.options.length);
        const selectedOption = this.state.options[genratedNumber];
        alert(selectedOption);

    }

    handleAddOption(option) {
        if(!option) {
            return 'Enter valid vaule to add item';
        }else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }
        this.setState((prevState) => ({ options: prevState.options.concat(option)}));
    }

    handleDeleteOption(optionToRemove) {
       this.setState((prevState) => ({options: prevState.options.filter((option)=> {
           return optionToRemove !== option;
       })}));
    }
    
    //handlePick - pass down to Action and bind here and setup onClick
    //Randomly pick an option and alert it 

    render() {
        const subtitle = 'Put your life in the hands of a computer';
        return(
            <div>
                <Header  subtitle = {subtitle}/>
                <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
                <Options  
                    options = {this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption = {this.handleDeleteOption}/>
                <AddOption AddOption={this.handleAddOption}/>
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
}
const Header =(props) => {
    return (
        <div>
        <h1>{props.title}</h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>  
    );
}

Header.defaultProps = {
    title: 'Some Default'
};

const Action = (props) => {
    return (
        <div>
            <button onClick={props.handlePick}
                disabled={!props.hasOptions} >What should i do?</button>
        </div>
    );
    
};

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button onClick={(e) => {
                props.handleDeleteOption(props.optionText)
            }}>Remove</button>
        </div>
    );
    
};

const Options = (props) =>  {
    return (
        <div>

            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {
                props.options.map((option,index) => (
                    <Option 
                        key={index} 
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption}
                         />
                ))
            }
        </div>
    );
};

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.AddOption(option)
        this.setState(() => ({error}));
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     );
// };

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
