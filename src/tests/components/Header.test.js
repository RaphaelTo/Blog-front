import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Header from '../../components/Header';

describe('component Header', () => {
    test('component exist', () => {
        const component = render(<Header/>);
        expect(component).not.toBeNull();
    })
})