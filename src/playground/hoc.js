//Higher order component (HOC) - a componenet that renders another component 
//reuse code
//Render hijacking 
//prop manipulation
//abstract state


import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>the info is : {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info please don't share</p>}
            <WrappedComponent {...props}/>
        </div>
    )
};

const requireAuthintication = (WrappedComponent) => {
    return (props) => (
        <div>
        {props.isLoggedIn ? (<WrappedComponent {...props}/>): (<p>You are not logged in </p>)}
        </div>
         
    );
};
//requireAuthintication

const AuthInfo = requireAuthintication(Info);

const AdminInfo = withAdminWarning(Info);
ReactDOM.render(<AuthInfo isLoggedIn={false} info="These are the details" />, document.getElementById('app'));
// ReactDOM.render(<AdminInfo isAdmin={false} info="These are the details" />, document.getElementById('app'));