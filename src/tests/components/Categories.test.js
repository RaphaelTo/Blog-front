import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Categories from '../../components/Categories/Categories';

describe('component Categories', () => {
   test('component categories exist', () => {
       const cat = render(<Categories/>);
       expect(cat).not.toBeNull();
   })

    test('render loading', () => {
        const { getByTestId } = render(<Categories/>);
        const shouldReturn = 'Loading ...';

        const pElement= getByTestId('p-element');

        expect(shouldReturn).toBe(pElement.textContent);
    });
});