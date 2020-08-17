import React from 'react';
import { render,  waitForElement, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axiosMock from 'axios';

import Article from '../../components/Articles/Article';

jest.mock('axios');

afterEach(cleanup);

describe('component Article', () => {
    test('component exist', () => {
        const mockArticleItem = [];
        axiosMock.get.mockResolvedValue(mockArticleItem);
        const article = render(<Article/>);

        expect(article).not.toBeNull();
    });

    test('component return "O article trouvé"', () => {
        const mockArticleItem = [];
        axiosMock.get.mockResolvedValue(mockArticleItem);
        const { getByTestId } = render(<Article/>);

        const getZeroArticle = getByTestId('zero-article');

        expect(getZeroArticle).toHaveTextContent('0 article trouvé');
    })
});