import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Category from '../../components/Categories/Category';

describe('component Category', () => {
    test('component "Category" exist', () => {
       const mock = [];
       const cat = render(<Category items={mock}/>);
       expect(cat).not.toBeNull();
    });

    test('display all category', () => {
        const mockCategories = [
            {
                "_id": "5f295cd2c10d1e0622a013e7",
                "name": "front-end",
                "__v": 0
            },
            {
                "_id": "5f2960e9130f6307af906be2",
                "name": "back-end",
                "__v": 0
            }
        ];
        const { getAllByTestId } = render(<Category items={mockCategories} />);

        const getNameCat = getAllByTestId('name-categories').map(item => item.textContent);
        const shouldReturn = ['front-end', 'back-end'];

        expect(shouldReturn).toEqual(getNameCat);
    })
});