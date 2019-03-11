import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };
    
//Life cycle methods
    componentDidMount() {
        console.log('Fetching data');

        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options) {
                this.setState(() => ({ options}))
            }
        }catch(e) {
            //Do nothing 
        }
        

    }

    componentDidUpdate = (prevProps, prevState) => {
        //after state value changes
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            console.log('saving data');
        }
        
    };

    componentWillUnmount() {
        //barly used 
        console.log('Component will unmount')
    }



    handleDeleteOptions = () => {
        this.setState(() => ({ options: []}));
    };
    handlePick = () => {
        const genratedNumber = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[genratedNumber];
        this.setState( ()=> ({ selectedOption: option}));

    };

    handleClearButton = () => {
        this.setState(() => ({selectedOption: undefined}))
    };
//Something something
    handleAddOption = (option) => {
        if(!option) {
            return 'Enter valid vaule to add item';
        }else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }
        this.setState((prevState) => ({ options: prevState.options.concat(option)}));
    };

    handleDeleteOption = (optionToRemove) => {
       this.setState((prevState) => ({options: prevState.options.filter((option)=> {
           return optionToRemove !== option;
       })}));
    };
    
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
                <OptionModal  
                    selectedOption= {this.state.selectedOption} 
                    clearBtn={this.handleClearButton}
                    />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
}

export default IndecisionApp;