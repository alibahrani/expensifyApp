console.log("app.js is running");


const appObject = {
    title: "Indecision Application",
    subtitle: "This is some Info",
    options: [],
    isDisabled: false

}

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;

    if(option) {
        appObject.options.push(option);
        e.target.elements.option.value = '';
        renderPElement();
    }
}

const removeAll = () => {
    appObject.options = [];
    renderPElement();
}
const onMakeDecision =() => {
    const genratedNumber = Math.floor(Math.random() * appObject.options.length);
    const selectedOption = appObject.options[genratedNumber];
    alert(selectedOption);
}

const numbers = [55,101,1000]
const renderPElement = () => {
    const template = (
        <div>
            <h1>{appObject.title}</h1>
            {appObject.subtitle ? <p>{appObject.subtitle}</p>: undefined }
            {appObject.options.length > 0 && <p>Here Your Options</p>} 
            <p>{appObject.options.length}</p>
            <button onClick={onMakeDecision} disabled={appObject.options.length === 0}>What should i do?</button>
            <button onClick={removeAll}>Remove All</button>
            <ol>
                {
                   appObject.options.map((option,index) => {
                        return <li key={index}>{option}</li>
                   }) 
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>        
            </form>
        </div>
    );
    
    ReactDOM.render(template,appRoot);    
};

const appRoot = document.getElementById('app');
renderPElement();
