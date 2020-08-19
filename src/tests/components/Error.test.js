import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Error from '../../components/Error/Error';

afterEach(cleanup);

describe('component Error', () => {
    test('component exist', () => {
        const err = render(<Error />);
        expect(err).not.toBeNull();
    });

    test('component return "oops tu t\'es perdu"', () => {
        const { getByTestId } = render(<Error/>);
        const error = getByTestId('error-text');
        expect(error).toHaveTextContent('Ooops tu t\'es perdu');
    })
});

