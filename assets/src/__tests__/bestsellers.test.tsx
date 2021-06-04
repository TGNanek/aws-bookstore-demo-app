//Kenan Grant 1521791
import React from 'react';
import {render, screen} from '@testing-library/react';
import BestSellers from '../modules/bestSellers/BestSellers';


test('Heading of best sellers component shows text correctly', () => {
    window.alert = jest.fn(() => ({}));
    const div = document.createElement('div');
    render(<BestSellers/>);
    let heading = document.getElementsByClassName("container-category")[0];
    if (heading != null)
    {
        expect(heading.getElementsByTagName('h3')[0].innerHTML).toBe("Top 20 best sellers");
    }
});

