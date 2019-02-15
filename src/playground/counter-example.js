//count = setup default props value to 0
class Counter extends React.Component {
    
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleResetButton = this.handleResetButton.bind(this);
        this.state = {
            count : 0
        };
    }
    componentDidMount() {
        console.log('Fetching');
        const newCount = localStorage.getItem('count');
        const newParsedNumber = parseInt(newCount, 10);
        if(!isNaN(newParsedNumber)) {

            this.setState(() => { count: newParsedNumber});
        }

    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Saving');
        if(prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count);
        }

    }
    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }
    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
                
            };
        });
    }

    handleResetButton() {
        this.setState(() => {
            return {
                count: 0
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleResetButton}>Reset</button>
            </div>
        );
    }
}


ReactDOM.render(<Counter />, document.getElementById('app'));

// let count = 0;
// const btnIncrement = () => {
//     count = count + 1;
//     renderCounterApp();
// }

// const minusOne =() => {
//     count = count - 1;
//     renderCounterApp();
// }

// const resetBtn= () => {
//     count = 0;
//     renderCounterApp();
// }


// const appRoot = document.getElementById('app');
// const renderCounterApp = ()=> {
//     const templateTow = (
//         <div>
//         <h1>Counter : {count}</h1>
//         <button onClick={btnIncrement}>+1</button>
//         <button onClick={minusOne}>-1</button>
//         <button onClick={resetBtn}>reset</button>
        
//         </div>
//         );
//     ReactDOM.render(templateTow, appRoot);
//     };

//     renderCounterApp();