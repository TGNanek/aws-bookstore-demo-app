//Kenan Grant 1521791
import React from 'react';
import ReactDOM, {render} from 'react-dom';
import BestSellers from '../modules/bestSellers/BestSellers';

test('Heading for best sellers component should show text correctly', function () {
    window.alert = jest.fn(() => ({}));
    const div = document.createElement('div');
    render(<BestSellers /> , div);
    let heading = document.getElementById("best-sellers-heading");

    if (heading != null)
    {
        expect(heading.innerHTML).toBe("Top 20 best sellers");
    }

});

