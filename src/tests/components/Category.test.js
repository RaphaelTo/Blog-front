import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Category from '../../components/Categories/Category';

describe('component Category', () => {
    test('component "Category" exist', () => {
       const mock = {};
       const cat = render(<Category items={mock}/>);
       expect(cat).not.toBeNull();
    });
});