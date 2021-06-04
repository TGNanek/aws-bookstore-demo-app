import React from 'react';
import ReactDOM from 'react-dom';
import PastPurchases from '../modules/pastPurchases/PastPurchases';



it('Past Purchases module renders correctly', () => {
    window.alert = jest.fn(() => ({}));  
    const div = document.createElement('div');
    ReactDOM.render(<PastPurchases />, div);
    ReactDOM.unmountComponentAtNode(div);
});