import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react'; 

export default () => {
    const ref = useRef(null); 

    // this code is showing a div and we're getting a reference to the HTML file 
    // now we need to take this reference to that element and provide it to the mount function
    // but when we do so, we need to make sure that we'll call the mount function just one time 

    // make sure that we'll run code just one sigle time 
    useEffect(() => {
        mount(ref.current); 
    })
    
    return <div ref={ref}> </div>; 
};