import React from 'react';
import ReactDOM from 'react-dom';
import PastPurchases from '../modules/pastPurchases/PastPurchases';



test('Past Purchases module renders correctly', function () {
    window.alert = jest.fn(() => ({}));
    
    const div = document.createElement('div');
    ReactDOM.render(<PastPurchases />, div);
    ReactDOM.unmountComponentAtNode(div);
    
});