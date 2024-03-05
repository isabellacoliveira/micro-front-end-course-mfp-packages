import React from 'react'
import ReactDOM from 'react-dom'

// Mount function to start up the app 
const mount = (el) => {
    ReactDOM.render(
        <h1>Hi there!</h1>,
        el
    );
};

// If we re in development and in isolation, call mount immediately 
// we need to decide wheter or not this application in development 
if(process.env.NODE_ENV === 'development') {
    // select html element by id 
    const devRoot = document.querySelector('#_marketing-dev-root');

    if(devRoot){
        mount(devRoot);
    }
}
// we are running through container and we should export the mount function 
export { mount }; 
