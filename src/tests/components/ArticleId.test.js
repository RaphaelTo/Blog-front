import React from 'react';
import { render,  waitForElement, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axiosMock from 'axios';

import ArticleId from '../../components/Articles/ArticleId';

jest.mock('axios');

afterEach(cleanup);

describe('component ArticleId', () => {
    test('component exist', () => {
        const art = render(<ArticleId />);
        expect(art).not.toBeNull();
    });

    test('return a loading before to return article', () => {
        const {getByTestId} = render(<ArticleId />);
        const getLoading = getByTestId('loading-article');
        expect(getLoading).toHaveTextContent('Loading ...')
    })
});