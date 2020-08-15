import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Header from '../../components/Header';

describe('component Header', () => {
    test('component exist', () => {
        const component = render(<Header/>);
        expect(component).not.toBeNull();
    });

    test('header get li about and title', () => {
        const { getAllByTestId, debug } = render(<Header/>);
        const shouldHaveLink = ['Le blog de Raphael', 'À propos'];

        const linkElement = getAllByTestId('link-header').map(link => link.textContent);

        expect(linkElement).toEqual(shouldHaveLink);
    });
})