import React from 'react';
import { render,  waitForElement, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axiosMock from 'axios';
import ArticleId from '../../components/Articles/ArticleId';

jest.mock('axios');

jest.mock('react-router-dom', () => ({
    useParams: jest.fn().mockReturnValue({ id: '5f22eef85d60a92942f449a3' }),
}));

afterEach(cleanup);

describe('component ArticleId', () => {
    test('component exist', () => {
        const mockReturnAxios = {
            data : {
                result: {
                    "Category": [],
                    "_id": "5f22eef85d60a92942f449a3",
                    "title": "A",
                    "abstract": "a",
                    "content": "aaa",
                    "img": "a",
                    "date": "2020-07-30T16:02:00.791Z",
                    "__v": 0
                }
            }
        };
        axiosMock.get.mockResolvedValue(mockReturnAxios);

        const art = render(<ArticleId />);
        expect(art).not.toBeNull();
    });

    test('return a loading before to return article', () => {
        const mockReturnAxios = {
            data : {
                result: {
                    "Category": [],
                    "_id": "5f22eef85d60a92942f449a3",
                    "title": "A",
                    "abstract": "a",
                    "content": "aaa",
                    "img": "a",
                    "date": "2020-07-30T16:02:00.791Z",
                    "__v": 0
                }
            }
        };
        axiosMock.get.mockResolvedValue(mockReturnAxios);

        const {getByTestId} = render(<ArticleId />);
        const getLoading = getByTestId('loading-article');
        expect(getLoading).toHaveTextContent('Loading ...');
    });

    test('return article found', async () => {
        const mockReturnAxios = {
            data : {
                type: 'success',
                result: {
                    "Category": [],
                    "_id": "5f22eef85d60a92942f449a3",
                    "title": "A",
                    "abstract": "a",
                    "content": "aaa",
                    "img": "a",
                    "date": "2020-07-30T16:02:00.791Z",
                    "__v": 0
                }
            }
        };

        axiosMock.get.mockResolvedValue(mockReturnAxios);

        const { getByTestId, debug } = render(<ArticleId/>);

        const getLoading = getByTestId('loading-article');
        expect(getLoading).toHaveTextContent('Loading ...');

        await waitForElement(() =>getByTestId('article-content'));
        expect(axiosMock.get).toHaveBeenCalled();

        const getImg =  getByTestId('article-img');
        const getTitle = getByTestId('article-title');
        const getContent = getByTestId('content');
        const getDate = getByTestId('article-date');

        expect(getImg).toBeInTheDocument('img-element');
        expect(getTitle).toHaveTextContent('A');
        expect(getContent).toHaveTextContent('aaa');
        expect(getDate).toHaveTextContent('30-7-2020')
    });

    test('return an error 404 if article not found', async () => {
        const mockReturnAxios ={
            data : {
                type: 'error',
            }
        };
        axiosMock.get.mockRejectedValue(mockReturnAxios);

        const { getByTestId, debug } = render(<ArticleId/>);

        const getLoading = getByTestId('loading-article');
        expect(getLoading).toHaveTextContent('Loading ...');

        await waitForElement(() => getByTestId('loading-error'));
        expect(axiosMock.get).toHaveBeenCalled();

        const getError = getByTestId('error-text');
        expect(getError).toHaveTextContent("Ooops tu t'es perdu");
    })
});