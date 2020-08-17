import React from 'react';
import { render, waitForElement, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import mockedAxios from 'axios';

import Categories from '../../components/Categories/Categories';

jest.mock('axios');

afterEach(cleanup);

describe('component Categories', () => {

    test('component categories exist', () => {
        const mockAxios = {
            data : {
                type: 'success',
                result: [
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
                ]
            }
        };
        mockedAxios.get.mockResolvedValue(mockAxios);
        const cat = render(<Categories/>);
        expect(cat).not.toBeNull();
   })

    test('render loading', () => {
        const mockAxios = {
            data : {
                type: 'success',
                result: [
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
                ]
            }
        };
        mockedAxios.get.mockResolvedValue(mockAxios);
        const { getByTestId } = render(<Categories/>);
        const shouldReturn = 'Aucune catégorie';

        const pElement= getByTestId('p-element');

        expect(shouldReturn).toBe(pElement.textContent);
    });

   test('render all categories', async () => {
       const mockAxios = {
           data : {
               type: 'success',
               result: [
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
               ]
           }
       };
       mockedAxios.get.mockResolvedValue(mockAxios);
       const { getAllByTestId, getByTestId, debug } = render(<Categories/>);
       const shouldReturn = ['front-end', 'back-end'];

       expect(getByTestId('p-element')).toHaveTextContent('Aucune catégorie');

       await waitForElement(() => getByTestId('category-component'));

       const getAllCategories = getAllByTestId('name-categories').map(item => item.textContent);

       expect(getAllCategories).toEqual(shouldReturn);
       debug();
   })
});