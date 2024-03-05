// new react component thats going to show those two different landing and pricing component 
import React from 'react'; 
import { Routes, Route, BrowserRouter } from 'react-router-dom'; 
import { StylesProvider } from '@material-ui/core/styles'; 

import Landing from './components/Landing'
import Pricing from './components/Pricing'

export default () => {
    return <div> 
        <StylesProvider>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/pricing" component={Pricing}></Route>
                    <Route exact path="/" component={Landing}></Route>
                </Routes>
            </BrowserRouter>
        </StylesProvider>
    </div>
}
