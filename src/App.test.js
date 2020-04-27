import React from 'react';
import SocialNetworkJSApp from "./App";
import ReactDOM from "react-dom";

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SocialNetworkJSApp />, div);
    ReactDOM.unmountComponentAtNode(div);
});
